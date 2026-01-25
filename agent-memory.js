/**
 * Agent Memory System
 * Manages Claude agent sessions and their metadata
 */

class AgentMemory {
  constructor() {
    this.agents = [];
    this.storageKey = 'blackroad-agents';
    this.loadFromStorage();
  }

  /**
   * Extract session ID from various formats
   * Examples:
   * - "session_01ToNdyuPhUpgWkB37svZEY7"
   * - "copilot/feature/session_01ToNdyuPhUpgWkB37svZEY7"
   * - "https://claude.ai/code/session_01ToNdyuPhUpgWkB37svZEY7"
   */
  extractSessionId(input) {
    const sessionPattern = /(session_[a-zA-Z0-9]{20,})/;
    const match = input.match(sessionPattern);
    return match ? match[1] : null;
  }

  /**
   * Add or update an agent
   */
  addAgent(sessionId, name = null, metadata = {}) {
    const cleanSessionId = this.extractSessionId(sessionId) || sessionId;
    
    const existingIndex = this.agents.findIndex(a => a.sessionId === cleanSessionId);
    
    const agent = {
      sessionId: cleanSessionId,
      name: name || `Agent ${cleanSessionId.substring(0, 12)}...`,
      createdAt: existingIndex >= 0 ? this.agents[existingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...metadata
    };

    if (existingIndex >= 0) {
      this.agents[existingIndex] = agent;
    } else {
      this.agents.push(agent);
    }

    this.saveToStorage();
    return agent;
  }

  /**
   * Get an agent by session ID
   */
  getAgent(sessionId) {
    const cleanSessionId = this.extractSessionId(sessionId) || sessionId;
    return this.agents.find(a => a.sessionId === cleanSessionId);
  }

  /**
   * Get all agents
   */
  getAllAgents() {
    return [...this.agents].sort((a, b) => 
      new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  }

  /**
   * Update agent name
   */
  updateAgentName(sessionId, newName) {
    const cleanSessionId = this.extractSessionId(sessionId) || sessionId;
    const index = this.agents.findIndex(a => a.sessionId === cleanSessionId);
    if (index >= 0) {
      this.agents[index] = {
        ...this.agents[index],
        name: newName,
        updatedAt: new Date().toISOString()
      };
      this.saveToStorage();
      return this.agents[index];
    }
    return null;
  }

  /**
   * Delete an agent
   */
  deleteAgent(sessionId) {
    const cleanSessionId = this.extractSessionId(sessionId) || sessionId;
    const index = this.agents.findIndex(a => a.sessionId === cleanSessionId);
    if (index >= 0) {
      this.agents.splice(index, 1);
      this.saveToStorage();
      return true;
    }
    return false;
  }

  /**
   * Save to localStorage
   */
  saveToStorage() {
    try {
      const data = {
        agents: this.agents,
        metadata: {
          version: '1.0.0',
          lastUpdated: new Date().toISOString()
        }
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save agents to storage:', error);
    }
  }

  /**
   * Load from localStorage
   */
  loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const data = JSON.parse(stored);
        this.agents = data.agents || [];
      }
    } catch (error) {
      console.error('Failed to load agents from storage:', error);
      this.agents = [];
    }
  }

  /**
   * Export agents data
   */
  exportData() {
    return {
      agents: this.agents,
      metadata: {
        version: '1.0.0',
        exportedAt: new Date().toISOString()
      }
    };
  }

  /**
   * Import agents data
   */
  importData(data) {
    if (data.agents && Array.isArray(data.agents)) {
      this.agents = data.agents;
      this.saveToStorage();
      return true;
    }
    return false;
  }
}

// Export for use in browser
if (typeof window !== 'undefined') {
  window.AgentMemory = AgentMemory;
}

# CLAUDE.md - BlackRoad AI Agent Framework

This file provides guidance for AI assistants working with the BlackRoad codebase.

## Project Overview

**BlackRoad** is a framework for building sovereign, local-first AI systems. The project focuses on creating autonomous agents with persistent memory, trinary logic engines, and secure communication protocols.

### Mission

Building AI systems that:
- Run locally with full user sovereignty
- Maintain persistent memory through journal-based systems
- Use trinary logic for handling uncertainty and contradictions
- Operate without dependency on external cloud services

## Repository Structure

```
blackroad-io/
├── index.html           # Landing page
├── docs.html            # Documentation wireframe/template
├── CLAUDE.md            # AI assistant guidance (this file)
└── .git/                # Git repository
```

### Current State

This is an **early-stage project**. The codebase currently contains:
- Static HTML landing page
- Documentation wireframe template

### Planned Architecture

Based on documentation wireframe, the framework will include:

```
@blackroad/cli          # Command-line interface
@blackroad/core         # Core agent framework
```

## Technology Stack

### Current
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, modern layout (Flexbox)
- **Fonts** - Inter (body), Space Grotesk (headings), JetBrains Mono (code)

### Planned
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe development (expected)
- **npm** - Package management

## Code Conventions

### HTML/CSS Standards

1. **Indentation**: 2 spaces
2. **CSS Architecture**:
   - Use CSS custom properties (variables) defined in `:root`
   - Section comments with `/* === SECTION === */` format
   - BEM-like class naming (e.g., `.nav-item`, `.article-header`)

3. **Color Palette** (design tokens):
```css
--white: #ffffff;
--gray-100: #f4f4f5;  /* Light text */
--gray-200: #e4e4e7;
--gray-300: #d4d4d8;
--gray-400: #a1a1aa;  /* Secondary text */
--gray-500: #71717a;  /* Muted text */
--gray-600: #52525b;
--gray-700: #3f3f46;  /* Borders */
--gray-800: #27272a;  /* Cards/surfaces */
--gray-900: #18181b;  /* Sidebar bg */
--gray-950: #09090b;  /* Main bg */
```

4. **Typography**:
   - Headings: `Space Grotesk` (600, 700 weights)
   - Body: `Inter` (400, 500, 600 weights)
   - Code: `JetBrains Mono` (400, 500 weights)

### File Naming

- Lowercase with hyphens: `quick-start.html`, `agent-config.js`
- Component files: Descriptive names matching their purpose

## Core Concepts (Planned)

### Agents

Autonomous entities with:
- **Name**: Unique identifier
- **Role**: Behavioral specification
- **Memory**: Persistent state management
- **Logic**: Reasoning engine configuration

```javascript
// Expected API
import { Agent } from '@blackroad/core';

const agent = new Agent({
  name: 'assistant',
  role: 'helper',
  memory: { type: 'journal', persistence: true },
  logic: 'trinary'
});

await agent.start();
```

### Memory System

- **Journal Mode**: Append-only memory log
- **PS-SHA∞ Hashing**: Content-addressable memory
- **Persistence**: Local storage backend

### Logic Engine

- **Trinary States**: True, False, Unknown
- **Contradiction Handling**: Graceful resolution of conflicting information

## Development Workflow

### Getting Started (Planned)

```bash
# Install CLI
npm install -g @blackroad/cli

# Initialize project
blackroad init my-project

# Start development
cd my-project && blackroad dev
```

### Current Development

For now, the project is static HTML:
```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
```

## Git Workflow

### Branch Naming

- Feature branches: `claude/<description>-<session-id>`
- Main branch: `main`

### Commit Messages

- Use clear, descriptive messages
- Format: `<type>: <description>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat: Add agent configuration options
docs: Update quick start guide
style: Refactor CSS custom properties
```

## Documentation Structure

The documentation follows this hierarchy:

1. **Getting Started**
   - Introduction
   - Quick Start
   - Installation
   - Configuration

2. **Core Concepts**
   - Agents (Creating, Lifecycle, Communication)
   - Memory (Journal Mode, PS-SHA∞ Hashing, Persistence)
   - Logic Engine (Trinary States, Contradictions)

3. **API Reference**
   - REST API
   - WebSocket
   - Events

4. **Guides**
   - Deployment
   - Scaling
   - Security

## AI Assistant Guidelines

### When Working on This Codebase

1. **Preserve design system**: Maintain the established color palette and typography
2. **Follow CSS conventions**: Use existing custom properties, don't introduce new colors arbitrarily
3. **Keep it minimal**: The project values simplicity - avoid over-engineering
4. **Local-first philosophy**: All features should work offline when possible
5. **Semantic HTML**: Use appropriate HTML5 elements

### Before Making Changes

1. Read relevant files to understand current implementation
2. Check for existing patterns and conventions
3. Verify changes align with the local-first, sovereign AI philosophy

### Testing

No testing framework is currently configured. When adding tests:
- Prefer lightweight, fast-running tests
- Focus on unit tests for core logic
- Document test commands in this file

## Resources

- **Project**: BlackRoad - Sovereign, local-first AI systems
- **Status**: Early development (landing page + documentation wireframe)

---

*Last updated: January 2026*

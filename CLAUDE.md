# CLAUDE.md - BlackRoad OS AI Assistant Guide

## Project Overview

**BlackRoad OS** is a browser-native operating system for AI agent orchestration. This repository contains the design system and UI template showcase demonstrating the visual language and component patterns for the platform.

## Repository Structure

```
blackroad-io/
├── index.html              # Vol.1: Core templates (1-6)
├── templates-vol2.html     # Vol.2: Application templates (7-12)
├── templates-vol3.html     # Vol.3: Advanced components (13-18)
├── templates-vol4.html     # Vol.4: Modal & Onboarding (19-20)
├── templates-vol5.html     # Vol.5: Productivity tools (21-23)
├── templates-vol6.html     # Vol.6: Team & Operations (24-26)
├── templates-billing.html  # Billing & Usage wireframe
├── CLAUDE.md               # This file - AI assistant guidelines
└── .git/                   # Git version control
```

## Technology Stack

- **HTML5** - Semantic document structure with `lang="en"` attribute
- **CSS3** - Comprehensive design system using CSS custom properties
- **Google Fonts** - Space Grotesk (display), Inter (body), JetBrains Mono (code)
- **No JavaScript** - Purely static/CSS-driven interactions
- **No build tools** - Direct file deployment
- **No frameworks** - Vanilla HTML/CSS only

## Design System

### Color Palette

The design follows a **grayscale-first** philosophy with accent colors used sparingly:

**Grayscale Foundation:**
| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-950` | `#0a0a0a` | Darkest background |
| `--gray-900` | `#121212` | Primary background |
| `--gray-850` | `#1a1a1a` | Elevated surfaces |
| `--gray-800` | `#1f1f1f` | Borders, dividers |
| `--gray-700` | `#2d2d2d` | Secondary borders |
| `--gray-600` | `#404040` | Muted elements |
| `--gray-500` | `#525252` | Labels, captions |
| `--gray-400` | `#737373` | Secondary text |
| `--gray-300` | `#a3a3a3` | Body text |
| `--gray-200` | `#d4d4d4` | Primary text |
| `--gray-100` | `#e5e5e5` | Emphasis text |
| `--gray-50` | `#f5f5f5` | Headlines |

**Accent Colors (use sparingly):**
- `--accent-orange`: `#ff6b00`
- `--accent-pink`: `#ff1493`
- `--accent-magenta`: `#ff00ff`
- `--accent-blue`: `#1e90ff`

### Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk | Headlines, titles, stat values |
| Body | Inter | Paragraphs, descriptions, UI text |
| Mono | JetBrains Mono | Code, labels, tags, technical text |

### UI Templates Included

**Vol.1 - Core Templates** (`index.html`):
1. **Hero Landing** (`#hero`) - Marketing landing page with stats grid
2. **Dashboard Layout** (`#dashboard`) - Admin panel with sidebar, metrics, tables
3. **Agent Cards** (`#agents`) - Card grid with avatars, tags, status indicators
4. **Documentation** (`#docs`) - Three-column docs layout with code blocks
5. **Terminal/CLI** (`#terminal`) - Command-line aesthetic with blinking cursor
6. **Pricing Tiers** (`#pricing`) - Three-tier pricing cards

**Vol.2 - Application Templates** (`templates-vol2.html`):
7. **Settings Panel** (`#settings`) - Tabbed settings with toggles and forms
8. **Login Page** (`#login`) - Authentication form with social logins
9. **Activity Logs** (`#logs`) - Timestamped event stream with filters
10. **Forms** (`#forms`) - Input components, selects, checkboxes, validation
11. **Empty States** (`#empty`) - Zero-data states with illustrations
12. **Error Pages** (`#errors`) - 404, 500, maintenance pages

**Vol.3 - Advanced Components** (`templates-vol3.html`):
13. **Data Table** (`#data-table`) - Sortable, filterable data grid
14. **Analytics Dashboard** (`#analytics`) - Charts, graphs, KPI cards
15. **Notifications/Toasts** (`#notifications`) - Alert types, toast stack
16. **Command Palette** (`#command-palette`) - Keyboard-driven command search
17. **Agent Profile** (`#agent-profile`) - Detailed agent view with stats
18. **Split View/Editor** (`#split-view`) - Code editor with preview pane

**Vol.4 - Modals & Onboarding** (`templates-vol4.html`):
19. **Modal/Dialog System** (`#modals`) - Confirmation, form, alert, command modals
20. **Onboarding Wizard** (`#onboarding`) - Multi-step setup flow with progress

**Vol.5 - Productivity Tools** (`templates-vol5.html`):
21. **File Browser** (`#file-browser`) - File explorer for configs, logs, resources
22. **Chat Interface** (`#chat`) - Conversational UI for agent interaction
23. **Kanban Board** (`#kanban`) - Task management for agent workflows

**Vol.6 - Team & Operations** (`templates-vol6.html`):
24. **Team Management** (`#team`) - User roles, permissions, invitations
25. **Integrations** (`#integrations`) - Third-party service connections
26. **Timeline/Gantt** (`#timeline`) - Agent schedules and deployment windows

**Specialty Templates**:
- **Billing & Usage** (`templates-billing.html`) - Plan cards, usage meters, payment methods

## Development Workflow

### Getting Started

1. Edit template files directly (index.html, templates-vol2.html, etc.)
2. Open in browser to preview (or use local server)
3. Commit and push changes
4. Each template file is self-contained with its own CSS

### Serving Locally

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# Or simply open index.html in a browser
```

### Deployment

Static hosting compatible:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Code Conventions

### HTML
- Use semantic HTML5 elements (`section`, `nav`, `main`, `aside`, `article`)
- Include `lang="en"` on `<html>` element
- Include viewport meta tag for responsiveness
- Use BEM-like class naming (e.g., `.agent-card-header`, `.docs-nav-link`)

### CSS
- Use CSS custom properties for all colors and fonts
- Organize styles by template section with comment headers
- Use `transition` for hover/interaction states
- Maintain consistent spacing (multiples of 4px/8px)

### Component Patterns
- **Cards**: Rounded corners (8-16px), subtle borders, hover elevation
- **Buttons**: Primary (filled light), Secondary (outlined)
- **Tables**: Grid-based layouts, row hover states
- **Status indicators**: Badges with uppercase mono text, dot indicators
- **Tags/Labels**: Uppercase, letter-spacing, small mono text

## Key Agents Referenced

The UI showcases these AI agents from the BlackRoad ecosystem:

| Agent | Role | Description |
|-------|------|-------------|
| **Lucidia** | Core Orchestrator | Recursive AI with trinary logic, central coordinator |
| **Alice** | Gateway Node | K3s/Traefik gateway, ingress, caching, routing |
| **Octavia** | Hailo Worker | Hardware acceleration for inference tasks |

## Notes for AI Assistants

1. **Grayscale First**: Color is used as enhancement, not foundation. Maintain the grayscale aesthetic and only use accent colors for specific interactive or highlight elements.

2. **Static Only**: All interactions are CSS-driven (hover states, transitions). Do not add JavaScript unless explicitly requested.

3. **Font Loading**: Google Fonts are loaded via CDN. This is the only external dependency - maintain this minimal approach.

4. **Component Consistency**: When adding new UI elements, follow existing patterns for spacing, typography, and color usage.

5. **Template Structure**: Each template section follows the pattern:
   ```html
   <section id="name" class="template-section specific-class">
       <div class="template-header">...</div>
       <div class="specific-container">...</div>
   </section>
   ```

6. **Accessibility**: Maintain proper heading hierarchy, sufficient color contrast (grayscale provides good contrast), and semantic structure.

7. **Responsive Considerations**: Current templates are desktop-focused. When adding responsive styles, use mobile-first media queries.

## Project Mission

BlackRoad OS is building a browser-native operating system for AI agent orchestration at scale. The design system emphasizes:
- **Clarity**: Clean interfaces that communicate complex agent states
- **Professional tone**: Grayscale foundation projects seriousness and reliability
- **Technical precision**: Monospace fonts for technical data, clear hierarchies
- **Scalability**: Component patterns that work for 10 or 10,000 agents

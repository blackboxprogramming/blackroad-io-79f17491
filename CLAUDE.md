# CLAUDE.md - AI Assistant Guide for BlackRoad

## Project Overview

**BlackRoad** is a project focused on building sovereign, local-first AI systems. The project emphasizes user control, privacy, and offline-capable AI infrastructure.

**Mission:** Building sovereign, local-first AI systems.

## Current State

This repository is in its **initial phase** with foundational infrastructure only. The current implementation consists of a minimal landing page.

### Repository Structure

```
blackroad-io/
├── CLAUDE.md           # AI assistant guidelines (this file)
└── index.html          # Landing page
```

### Technology Stack (Current)

- **Frontend:** Plain HTML5
- **Styling:** Inline CSS with system fonts
- **Backend:** None (static site)
- **Build System:** None required
- **Dependencies:** None

## Development Guidelines

### Git Workflow

1. **Branch Naming:** Feature branches should follow the pattern `claude/<description>-<session-id>` for AI-assisted development
2. **Commits:** Use clear, descriptive commit messages in imperative mood (e.g., "Add feature" not "Added feature")
3. **Push Command:** Always use `git push -u origin <branch-name>`

### Code Style Conventions

#### HTML
- Use HTML5 doctype
- Include proper meta charset (UTF-8)
- Use semantic HTML elements
- Maintain consistent 2-space indentation

#### CSS (when added)
- Prefer external stylesheets over inline styles for production code
- Use system-ui font stack for better cross-platform compatibility
- Follow mobile-first responsive design principles

#### JavaScript (when added)
- Use modern ES6+ syntax
- Prefer const/let over var
- Use meaningful variable and function names
- Add JSDoc comments for functions

### File Organization Guidelines

As the project grows, follow this recommended structure:

```
blackroad-io/
├── CLAUDE.md           # AI assistant guidelines
├── README.md           # Project documentation
├── index.html          # Main entry point
├── src/                # Source code
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript modules
│   └── components/     # Reusable components
├── assets/             # Static assets
│   ├── images/
│   └── fonts/
├── docs/               # Documentation
└── tests/              # Test files
```

## Key Principles for AI Assistants

### When Working on This Codebase

1. **Respect the local-first philosophy:** Design features that work offline and keep user data local
2. **Minimize dependencies:** Only add external dependencies when absolutely necessary
3. **Privacy first:** Never implement features that send user data externally without explicit consent
4. **Simplicity:** Keep solutions minimal and focused; avoid over-engineering

### Before Making Changes

1. Read and understand existing code before modifying
2. Check for existing patterns and follow them
3. Consider the impact on the local-first architecture
4. Ensure changes work offline where applicable

### Code Quality Standards

- Write clean, self-documenting code
- Add comments only where logic is not self-evident
- Keep functions small and focused
- Avoid introducing security vulnerabilities (XSS, injection attacks, etc.)

## Common Tasks

### Running Locally

Currently, the project is a static HTML file. To view:

```bash
# Using Python's built-in server
python3 -m http.server 8000

# Or using Node.js http-server (if installed)
npx http-server
```

Then open `http://localhost:8000` in a browser.

### Adding New Features

1. Create a feature branch from main
2. Implement changes following the conventions above
3. Test thoroughly in a local environment
4. Commit with descriptive messages
5. Push and create a pull request

## Project Context

### What "Sovereign, Local-First" Means

- **Sovereign:** Users maintain full control over their AI systems and data
- **Local-First:** Core functionality works without internet connectivity
- **Privacy-Preserving:** No data leaves the user's device without explicit permission

### Design Considerations

When contributing, always consider:
- Can this feature work offline?
- Does this respect user privacy?
- Is the user in control of their data?
- Does this add unnecessary complexity?

## Notes for AI Assistants

- This project values simplicity over complexity
- When in doubt, choose the simpler solution
- Always explain proposed changes and their rationale
- Avoid adding features beyond what is explicitly requested
- Keep the local-first philosophy central to all decisions

# CLAUDE.md - AI Assistant Guide for BlackRoad

This file provides guidance for AI assistants working with the BlackRoad codebase.

## Project Overview

**BlackRoad** is a project focused on building sovereign, local-first AI systems. The project emphasizes user autonomy, privacy, and local data control.

- **Repository**: blackboxprogramming/blackroad-io
- **Status**: Early development (landing page stage)

## Codebase Structure

```
blackroad-io/
├── index.html          # Landing page for BlackRoad
├── CLAUDE.md           # This file - AI assistant guidance
└── .git/               # Git version control
```

### Current Files

| File | Purpose |
|------|---------|
| `index.html` | Simple landing page displaying project name, tagline, and status |

## Development Guidelines

### Code Style

- **HTML**: Use semantic HTML5 elements
- **CSS**: Inline styles acceptable for simple pages; prefer external stylesheets for complex layouts
- **JavaScript**: ES6+ syntax when JS is added
- **Formatting**: 2-space indentation, UTF-8 encoding

### Commit Conventions

Follow conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting, styling changes
- `refactor:` - Code restructuring
- `chore:` - Maintenance tasks

Example: `feat: add contact form to landing page`

### File Naming

- Use lowercase with hyphens for HTML/CSS/JS files: `about-page.html`
- Use PascalCase for component files if a framework is adopted
- Keep names descriptive but concise

## Working with This Codebase

### For AI Assistants

1. **Read before modifying**: Always read existing files before making changes
2. **Minimal changes**: Make only the changes requested; avoid unnecessary refactoring
3. **Preserve intent**: The project emphasizes local-first, sovereign AI - respect this philosophy
4. **Test locally**: Recommend testing HTML changes in a browser before committing

### Common Tasks

**Adding a new page:**
1. Create new HTML file at root level
2. Link from index.html if appropriate
3. Maintain consistent styling

**Updating landing page:**
1. Read current `index.html`
2. Make targeted edits
3. Verify HTML validity

## Project Philosophy

BlackRoad is built on these principles:

- **Sovereignty**: Users control their data and AI systems
- **Local-first**: Prioritize local processing over cloud dependencies
- **Privacy**: Minimize data exposure and tracking
- **Simplicity**: Start simple, add complexity only when needed

When contributing, ensure changes align with these values.

## Build & Deployment

Currently no build process - static HTML served directly.

**To preview locally:**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000
```

## Future Development Areas

As the project grows, expect additions in:
- Static site generator integration
- CSS framework or design system
- JavaScript for interactivity
- Documentation pages
- API specifications (for AI systems)

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Preview site | `python -m http.server 8000` |
| Check git status | `git status` |
| View history | `git log --oneline` |

---

*Last updated: January 2026*

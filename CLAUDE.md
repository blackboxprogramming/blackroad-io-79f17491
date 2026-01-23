# CLAUDE.md - BlackRoad AI Assistant Guide

## Project Overview

**BlackRoad** is a project focused on building sovereign, local-first AI systems. Currently in its early stage, the repository contains a minimal static landing page.

## Repository Structure

```
blackroad-io/
├── index.html          # Main landing page (static HTML)
├── CLAUDE.md           # This file - AI assistant guidelines
└── .git/               # Git version control
```

## Technology Stack

- **HTML5** - Semantic document structure
- **Inline CSS** - Minimal styling using system fonts
- **No JavaScript** - Purely static content
- **No build tools** - Direct file deployment
- **No dependencies** - Zero external packages

## Development Workflow

### Getting Started

This is a static HTML project with no build process. To work on it:

1. Edit `index.html` directly
2. Open the file in a browser to preview changes
3. Commit and push changes

### Serving Locally

Any static file server works:
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# Or simply open index.html in a browser
```

### Deployment

The site can be deployed to any static hosting provider:
- GitHub Pages
- Netlify
- Vercel
- Any web server (nginx, Apache, etc.)

## Code Conventions

### HTML
- Use semantic HTML5 elements
- Maintain proper heading hierarchy (`h1` > `h2` > etc.)
- Include `charset="utf-8"` meta tag
- Keep markup minimal and clean

### CSS
- Currently uses inline styles in the `<body>` tag
- Uses `system-ui` font stack for native feel
- Maintain minimal, functional styling

### General Guidelines
- Keep the codebase simple and lightweight
- No unnecessary dependencies
- Prioritize accessibility
- Maintain fast load times

## Git Workflow

- **Main branch**: Primary development branch
- **Commit messages**: Use clear, descriptive messages
- **Initial commit**: `14a4a3d` - "Initial BlackRoad landing"

## Important Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page displaying project name, mission, and status |

## Project Mission

BlackRoad is building sovereign, local-first AI systems. The landing page serves as the initial web presence for the project.

## Notes for AI Assistants

1. **Simplicity First**: This project intentionally has minimal tooling. Do not add build tools, package managers, or frameworks unless explicitly requested.

2. **Static Only**: All content is static HTML. Do not add JavaScript unless specifically asked.

3. **No External Dependencies**: Avoid adding external CSS frameworks, fonts (beyond system fonts), or libraries.

4. **File Organization**: Currently single-file. If the project grows, maintain a flat structure until complexity demands otherwise.

5. **Accessibility**: Ensure any changes maintain or improve accessibility (proper heading structure, semantic HTML, readable contrast).

6. **Performance**: Keep the page lightweight. Current size is ~277 bytes - maintain this minimal footprint.

## Future Considerations

As the project evolves, this document should be updated to reflect:
- New directories and file organization
- Build tools if added
- Testing frameworks if implemented
- API documentation if applicable
- Deployment pipelines if configured

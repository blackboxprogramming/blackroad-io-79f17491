# CLAUDE.md - AI Assistant Guide for BlackRoad-IO

This document provides essential context for AI assistants working with the blackroad-io repository.

## Project Overview

**BlackRoad-IO** is a landing page for the BlackRoad project, which focuses on "Building sovereign, local-first AI systems." This repository is part of the `blackboxprogramming` GitHub organization ecosystem.

- **Type**: Static website (HTML landing page)
- **Deployment**: Cloudflare Pages
- **Status**: Active development

## Repository Structure

```
blackroad-io/
├── .github/
│   └── workflows/
│       ├── auto-label.yml      # Auto-labels PRs based on repo name
│       ├── core-ci.yml         # Core CI pipeline (guard + lint placeholder)
│       ├── deploy.yml          # Cloudflare deployment via reusable workflow
│       ├── failure-issue.yml   # Creates issues on CI failures
│       └── project-sync.yml    # Syncs PRs to GitHub Project board
├── index.html                  # Main landing page
└── CLAUDE.md                   # This file
```

## Development Workflow

### Local Development

This is a static HTML project with no build step required:

1. Edit `index.html` directly
2. Open in browser to preview changes
3. Commit and push to trigger CI/CD

### Branch Naming Convention

- Feature branches: `claude/[feature-name]-[suffix]`
- Main branch: `main`

### Commit Message Style

Use imperative mood, lowercase, descriptive messages:
- `add new feature description`
- `fix issue with component`
- `update workflow configuration`

## CI/CD Pipeline

### On Pull Requests

1. **CORE CI** (`core-ci.yml`): Runs guard check and lint placeholder
2. **Auto Label** (`auto-label.yml`): Adds labels based on repository name
   - Adds "core" label for repos containing "blackroad"
   - Adds "labs" label for repos containing "lab"
3. **Project Sync** (`project-sync.yml`): Adds PR to [GitHub Project board](https://github.com/users/blackboxprogramming/projects/8)

### On Push to Main

1. **Deploy** (`deploy.yml`): Triggers Cloudflare deployment via shared workflow from `blackboxprogramming/blackroad-deploy`

### On CI Failure

- **Failure Issue** (`failure-issue.yml`): Automatically creates a GitHub issue when CORE CI fails

## Key Files

### `index.html`

The main (and only) content file. A minimal HTML5 page with:
- System UI font stack
- 40px body padding
- Project name, tagline, and status

### GitHub Workflows

All workflows use:
- `actions/checkout@v4` for repository checkout
- `actions/github-script@v7` for GitHub API automation
- `actions/add-to-project@v1` for project board integration

## External Dependencies

| Dependency | Purpose |
|------------|---------|
| `blackboxprogramming/blackroad-deploy` | Reusable Cloudflare deployment workflow |
| GitHub Projects | PR tracking at projects/8 |
| Cloudflare Pages | Production hosting |

## Guidelines for AI Assistants

### When Making Changes

1. **Keep it minimal**: This is intentionally a simple, lightweight project
2. **Preserve simplicity**: Avoid adding unnecessary complexity or dependencies
3. **Test locally**: Open HTML files in browser before committing
4. **Follow conventions**: Use existing commit message and branch naming patterns

### When Modifying Workflows

1. Workflows use specific permissions - maintain least-privilege principle
2. The deploy workflow references an external repository - don't modify deployment logic here
3. Automation workflows handle labeling, failure tracking, and project sync - modify with care

### Code Style

- **HTML**: Minimal inline styles, no external CSS frameworks
- **Workflows**: YAML with 2-space indentation, descriptive job/step names

### What NOT to Do

- Do not add build tools (npm, webpack, etc.) unless explicitly requested
- Do not create README.md if not asked (landing page is self-documenting)
- Do not modify deployment infrastructure (managed in separate repo)
- Do not add external dependencies without explicit approval

## Quick Commands

```bash
# View current status
git status

# Run CI locally (placeholder - no actual tests yet)
echo "Add lint/test here"

# Preview site
open index.html  # macOS
xdg-open index.html  # Linux
```

## Related Repositories

- `blackboxprogramming/blackroad-deploy` - Deployment infrastructure
- Other repos in `blackboxprogramming` organization - Part of BlackRoad ecosystem

---

*Last updated: January 2026*

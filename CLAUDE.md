# CLAUDE.md - AI Assistant Guide for blackroad-io

## Project Overview

BlackRoad is a project focused on **building sovereign, local-first AI systems**. This repository (`blackroad-io`) serves as the public landing page and website for the BlackRoad initiative.

**Repository**: `blackboxprogramming/blackroad-io`

## Codebase Structure

```
blackroad-io/
├── index.html                    # Main landing page
├── .github/
│   └── workflows/
│       ├── core-ci.yml          # Core CI pipeline (lint/test placeholder)
│       ├── deploy.yml           # Cloudflare deployment workflow
│       ├── auto-label.yml       # Auto-labels PRs (core/labs)
│       ├── failure-issue.yml    # Creates issues on CI failures
│       └── project-sync.yml     # Syncs PRs to GitHub project board
└── CLAUDE.md                    # This file
```

## Technology Stack

- **Frontend**: Static HTML
- **Hosting**: Cloudflare Pages
- **CI/CD**: GitHub Actions
- **Project Management**: GitHub Projects

## Development Workflows

### Branch Naming Convention

- Feature branches for AI assistants: `claude/<description>-<session-id>`
- Main development branch: `main`

### CI/CD Pipeline

1. **CORE CI** (`core-ci.yml`)
   - Triggers on: PRs and pushes to `main`/`master`
   - Jobs: `guard` (guardrail check), `lint` (placeholder for lint/tests)

2. **Deploy** (`deploy.yml`)
   - Triggers on: Push to `main`
   - Uses reusable workflow from `blackboxprogramming/blackroad-deploy`
   - Deploys to Cloudflare Pages

### Automation Bots

- **Auto Label**: Automatically labels PRs with `core` (if repo contains "blackroad") or `labs` (if repo contains "lab")
- **CI Failure Tracker**: Creates GitHub issues when CI fails
- **Project Sync**: Adds new/reopened PRs to GitHub project board (#8)

## Key Conventions

### Code Style

- HTML: Standard semantic HTML5
- Keep the landing page minimal and clean
- Use `system-ui` font family for consistency

### Commit Messages

- Use lowercase, imperative style
- Examples from history:
  - `fix automation workflow permissions and triggers`
  - `add automation bots (label + failure tracking)`
  - `add standard workflows`

### Pull Requests

- PRs are automatically labeled based on repository name
- PRs are automatically added to the project board
- Target `main` branch for all changes

## Quick Commands

```bash
# View local changes
git status

# Push to feature branch
git push -u origin <branch-name>

# View CI status
gh run list
```

## Important Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page content |
| `.github/workflows/deploy.yml` | Deployment configuration |
| `.github/workflows/core-ci.yml` | CI pipeline definition |

## Related Repositories

- `blackboxprogramming/blackroad-deploy` - Shared deployment workflows

## Notes for AI Assistants

1. **Keep changes minimal** - This is a simple landing page, avoid over-engineering
2. **Test locally** - Open `index.html` directly in browser for preview
3. **Follow existing patterns** - Match the style of existing workflow files
4. **Commit atomically** - Make focused commits with clear messages
5. **Never push to main directly** - Always use feature branches and PRs

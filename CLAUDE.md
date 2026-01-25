# CLAUDE.md

This file provides guidance for AI assistants working with the blackroad-io repository.

## Project Overview

**BlackRoad** is a project focused on building sovereign, local-first AI systems. This repository (`blackroad-io`) serves as the main landing page and web presence, currently deployed as a static website.

## Repository Structure

```
blackroad-io/
├── index.html                    # Main landing page
├── .github/
│   └── workflows/
│       ├── deploy.yml            # Cloudflare deployment (on push to main)
│       ├── core-ci.yml           # Core CI pipeline (lint/test placeholder)
│       ├── auto-label.yml        # Auto-labels PRs based on repo name
│       ├── failure-issue.yml     # Creates issues when CI fails
│       └── project-sync.yml      # Syncs PRs to GitHub project board
└── CLAUDE.md                     # This file
```

## Development Workflow

### Branching Strategy

- **Main branch**: `main` - protected, triggers deployment
- **Feature branches**: Use descriptive names (e.g., `feature/add-about-page`)
- **AI agent branches**: Must follow pattern `claude/*` for automated workflows

### CI/CD Pipeline

1. **On Pull Request** (to main/master):
   - `core-ci.yml` runs guardrail and lint checks
   - `auto-label.yml` adds labels (`core` for blackroad repos, `labs` for lab repos)
   - `project-sync.yml` adds PR to project board

2. **On Push to Main**:
   - `deploy.yml` triggers Cloudflare deployment via reusable workflow from `blackboxprogramming/blackroad-deploy`

3. **On CI Failure**:
   - `failure-issue.yml` automatically creates an issue with failure details

### Making Changes

1. Create a feature branch from `main`
2. Make your changes
3. Open a pull request to `main`
4. Wait for CI checks to pass
5. Merge to deploy

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Static landing page with project info |
| `.github/workflows/deploy.yml` | Cloudflare deployment configuration |
| `.github/workflows/core-ci.yml` | CI checks (currently placeholder) |

## Conventions

### Code Style

- HTML files: Use 2-space indentation
- Keep markup semantic and minimal
- Use system fonts for performance

### Commit Messages

- Use present tense ("add feature" not "added feature")
- Keep first line under 72 characters
- Reference issues when applicable

### Pull Requests

- PRs are automatically labeled based on repository name
- PRs are automatically added to the project board
- Ensure CI passes before requesting review

## External Dependencies

- **Deployment**: Uses reusable workflow from `blackboxprogramming/blackroad-deploy` repository
- **Hosting**: Cloudflare Pages
- **Project Board**: https://github.com/users/blackboxprogramming/projects/8

## Common Tasks

### Update Landing Page Content

Edit `index.html` directly. Changes pushed to `main` will auto-deploy.

### Add New Workflow

Create a new `.yml` file in `.github/workflows/`. Follow existing patterns for triggers and permissions.

### Debug CI Failures

1. Check the failed workflow run in GitHub Actions
2. Review the auto-created issue in the repository
3. Fix the issue and push changes

## Notes for AI Assistants

- This is a minimal static site - keep changes simple and focused
- The CI pipeline has placeholder steps for lint/test - these may be expanded later
- Deployment is handled externally via Cloudflare
- Always ensure HTML is valid and semantic
- The project emphasizes local-first, sovereign AI - keep this philosophy in mind for any additions

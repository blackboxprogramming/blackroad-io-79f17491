# CLAUDE.md

This file provides guidance for AI assistants working with the blackroad-io repository.

## Project Overview

**BlackRoad** is a project building sovereign, local-first AI systems. This repository (`blackroad-io`) serves as the landing page and web presence for the project, deployed to blackroad.io.

## Repository Structure

```
blackroad-io/
├── index.html                 # Static landing page
├── CLAUDE.md                  # AI assistant guidance (this file)
└── .github/
    └── workflows/
        ├── core-ci.yml        # Main CI pipeline (lint/test placeholder)
        ├── deploy.yml         # Cloudflare deployment via reusable workflow
        ├── auto-label.yml     # Auto-labels PRs based on repo name
        ├── failure-issue.yml  # Creates issues when CI fails
        └── project-sync.yml   # Syncs PRs to GitHub Projects board
```

## Technology Stack

- **Frontend**: Static HTML (no build step)
- **Deployment**: Cloudflare Pages (via `blackroad-deploy` shared workflow)
- **CI/CD**: GitHub Actions

## Development Workflows

### Main Branch Protection

- The `main` branch is the production branch
- All changes should go through pull requests
- Push to `main` triggers deployment to Cloudflare

### CI Pipeline (core-ci.yml)

Runs on:
- Pull requests to `main` or `master`
- Pushes to `main` or `master`

Jobs:
1. **guard**: Guardrail check (placeholder)
2. **lint**: Lint/test placeholder (to be implemented)

### Deployment (deploy.yml)

- Triggered on push to `main`
- Uses shared workflow from `blackroad-deploy` repository
- Deploys to Cloudflare Pages with project name `blackroad-io`

### Automation Bots

1. **Auto Label** (`auto-label.yml`)
   - Labels PRs with `core` if repo name contains "blackroad"
   - Labels PRs with `labs` if repo name contains "lab"

2. **CI Failure Tracker** (`failure-issue.yml`)
   - Automatically creates an issue when CORE CI workflow fails
   - Links to the failed workflow run

3. **Project Sync** (`project-sync.yml`)
   - Adds opened/reopened PRs to GitHub Projects board
   - Project URL: `https://github.com/users/blackboxprogramming/projects/8`

## Key Conventions

### Commit Messages

Follow conventional style based on recent commits:
- Use lowercase, descriptive messages
- Keep messages concise
- Examples: `add standard workflows`, `fix automation workflow permissions`

### Branching

- Feature branches should be prefixed appropriately (e.g., `claude/` for AI-generated branches)
- Always create PRs against `main`

### File Organization

- Keep the root directory clean - only essential files
- Workflows go in `.github/workflows/`
- Static assets should be referenced inline or via CDN

## Working with This Repository

### Making Changes to the Landing Page

1. Edit `index.html` directly
2. Test locally by opening in a browser
3. Create a PR for review
4. Merge triggers automatic deployment

### Adding New Workflows

1. Create new `.yml` file in `.github/workflows/`
2. Follow existing patterns for permissions and triggers
3. Use `actions/github-script@v7` for GitHub API interactions
4. Prefer reusable workflows from `blackroad-deploy` when available

### Permissions in Workflows

Standard permissions pattern used:
```yaml
permissions:
  contents: read
  pull-requests: write
  issues: write
```

## External Dependencies

- **blackroad-deploy**: Shared deployment workflows (`blackboxprogramming/blackroad-deploy`)
- **GitHub Actions**:
  - `actions/checkout@v4`
  - `actions/github-script@v7`
  - `actions/add-to-project@v1`

## Notes for AI Assistants

1. This is a minimal static site - no package managers or build tools
2. Changes to `index.html` are the main development activity
3. Workflow changes should maintain consistency with existing patterns
4. The project is part of a larger BlackRoad ecosystem with shared infrastructure
5. Deployment is handled automatically - no manual deployment steps needed
6. When creating PRs, they will automatically be labeled and added to the project board

# CLAUDE.md - AI Assistant Guide for blackroad-io

## Project Overview

**BlackRoad** is a project focused on building sovereign, local-first AI systems. This repository (`blackroad-io`) serves as the main website/landing page hosted on Cloudflare.

**Organization**: blackboxprogramming

## Repository Structure

```
blackroad-io/
├── index.html                    # Main landing page (static HTML)
└── .github/
    └── workflows/
        ├── core-ci.yml           # Main CI pipeline
        ├── deploy.yml            # Cloudflare deployment
        ├── auto-label.yml        # PR auto-labeling bot
        ├── failure-issue.yml     # CI failure tracking
        └── project-sync.yml      # GitHub project board sync
```

## Technology Stack

- **Frontend**: Static HTML (vanilla, no framework)
- **Hosting**: Cloudflare (deployed via reusable workflow from `blackroad-deploy` repo)
- **CI/CD**: GitHub Actions

## Development Workflows

### CI Pipeline (`core-ci.yml`)
- Triggers on: PRs and pushes to `main`/`master`
- Jobs:
  - `guard`: Basic guardrail check
  - `lint`: Placeholder for future lint/test tasks

### Deployment (`deploy.yml`)
- Triggers on: Push to `main`
- Uses reusable workflow from `blackboxprogramming/blackroad-deploy`
- Deploys to Cloudflare with project name `blackroad-io`

### Automation Bots

1. **Auto-Label** (`auto-label.yml`): Labels PRs based on repo name
   - Repos containing "blackroad" get `core` label
   - Repos containing "lab" get `labs` label

2. **Failure Tracker** (`failure-issue.yml`): Creates GitHub issues when CI fails

3. **Project Sync** (`project-sync.yml`): Adds PRs to organization project board (#8)

## Git Conventions

### Branch Naming
- Feature branches from Claude: `claude/<feature-description>-<session-id>`
- Main branch: `main`

### Commit Messages
- Keep concise and descriptive
- Reference issue numbers when applicable

### Pull Requests
- PRs to `main` trigger CI checks
- PRs are auto-labeled and added to project board

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page - static HTML with project description |

## Making Changes

### Modifying the Website
1. Edit `index.html` directly
2. Push to feature branch
3. Create PR to `main`
4. Merge triggers automatic Cloudflare deployment

### Adding New Pages
1. Create new HTML files in root directory
2. Follow existing HTML structure pattern
3. No build step required - static files served directly

## Important Notes

- This is a minimal static site - no build tools, no npm, no bundlers
- Deployment is fully automated via GitHub Actions
- Changes to `main` are immediately deployed to production
- All PRs are tracked in the organization's GitHub project board

## Related Repositories

- `blackboxprogramming/blackroad-deploy`: Contains reusable deployment workflows for Cloudflare

## Testing

Currently no automated tests. The `lint` job in CI is a placeholder for future testing infrastructure.

When adding tests, update `.github/workflows/core-ci.yml` in the `lint` job section.

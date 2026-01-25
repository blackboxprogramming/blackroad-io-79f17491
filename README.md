# BlackRoad.io

Building sovereign, local-first AI systems.

## Repository Purpose

This repository serves as:
1. The main website for BlackRoad ([blackroad.io](https://blackroad.io))
2. A central hub for **reusable GitHub Actions workflows** used across the blackboxprogramming organization

## Reusable Workflows

This repository provides organization-wide GitHub Actions workflow templates that can be used in any repository. These workflows automate:

- **Auto-labeling**: Automatically label PRs based on repository name patterns
- **Project sync**: Add all PRs to a centralized GitHub Project board
- **CI failure tracking**: Create issues when CI workflows fail

### Using These Workflows in Your Repository

To use these workflows in another repository, reference them using the `uses` keyword:

```yaml
jobs:
  your-job:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/[workflow-name].yml@main
```

For complete documentation and examples, see [.github/workflows/reusable/README.md](.github/workflows/reusable/README.md).

### Quick Start

Add these three files to `.github/workflows/` in any repository to get the full automation suite:

1. **Auto Label** - Labels PRs automatically
2. **Project Sync** - Syncs PRs to project board  
3. **CI Failure Tracker** - Creates issues for CI failures

See the [reusable workflows README](.github/workflows/reusable/README.md) for copy-paste examples.

## Workflows in This Repository

This repository uses its own reusable workflows as examples:

- **Auto Label** - Applies 'core' label to PRs
- **Project Sync** - Adds PRs to project #8
- **CI Failure Tracker** - Tracks CORE CI failures
- **CORE CI** - Basic CI checks
- **Deploy** - Deploys to Cloudflare Pages on merge to main

## Architecture

```
blackroad-io/
├── index.html                  # Main website
└── .github/
    └── workflows/
        ├── auto-label.yml      # Local usage of auto-label
        ├── project-sync.yml    # Local usage of project-sync
        ├── failure-issue.yml   # Local usage of failure-tracker
        ├── core-ci.yml         # CI workflow
        ├── deploy.yml          # Deployment workflow
        └── reusable/           # Reusable workflow assets
            ├── README.md       # Full documentation
            ├── auto-label.yml
            ├── project-sync.yml
            └── failure-tracker.yml
```

## Development

This is a static website repository. The site automatically deploys to Cloudflare Pages when changes are pushed to `main`.

## Organization-Wide Standards

All repositories in the blackboxprogramming organization should use:
- The reusable workflows from this repository
- The centralized project board: https://github.com/users/blackboxprogramming/projects/8
- Consistent labeling (core/labs) based on repository names

## License

[License information here]

## Contact

[Contact information here]

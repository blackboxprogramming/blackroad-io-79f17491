# GitHub Workflows Organization Summary

## Overview

This repository has been organized to provide reusable GitHub Actions workflow assets for all repositories in the blackboxprogramming organization.

## Repository Structure

```
blackroad-io/
├── README.md                              # Main repository documentation
├── index.html                             # BlackRoad website
└── .github/
    ├── workflow-templates/                # Copy-paste ready templates
    │   ├── README.md                      # Quick setup guide
    │   ├── auto-label.yml                 # Template: Auto-label PRs
    │   ├── project-sync.yml               # Template: Sync to project board
    │   └── failure-tracker.yml            # Template: Track CI failures
    └── workflows/
        ├── auto-label.yml                 # Local: Uses reusable auto-label
        ├── project-sync.yml               # Local: Uses reusable project-sync
        ├── failure-issue.yml              # Local: Uses reusable failure-tracker
        ├── core-ci.yml                    # Local: CI checks
        ├── deploy.yml                     # Local: Cloudflare deployment
        └── reusable/                      # Reusable workflow assets
            ├── README.md                  # Full documentation
            ├── auto-label.yml             # Reusable: Auto-label workflow
            ├── project-sync.yml           # Reusable: Project sync workflow
            └── failure-tracker.yml        # Reusable: Failure tracker workflow
```

## Three Ways to Use These Workflows

### 1. Use Reusable Workflows (Recommended)

Reference them directly in your workflow files:

```yaml
jobs:
  label:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/auto-label.yml@main
    permissions:
      contents: read
      pull-requests: write
```

**Benefits**: Always up-to-date, centrally managed, consistent across all repos.

### 2. Copy Workflow Templates

Copy ready-made templates from `.github/workflow-templates/`:

```bash
curl -o .github/workflows/auto-label.yml \
  https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/auto-label.yml
```

**Benefits**: Quick setup, pre-configured, still uses reusable workflows.

### 3. View Examples

Look at how this repository uses the workflows in `.github/workflows/`.

## Workflow Capabilities

### Core Automation

**Auto Label**
- Automatically applies labels to PRs based on repository name
- Default patterns: "blackroad" → `core` label, "lab" → `labs` label
- Customizable via input parameters

**Project Sync**
- Automatically adds all PRs to organization project board
- Default: https://github.com/users/blackboxprogramming/projects/8
- Customizable project URL

**Failure Tracker**
- Creates GitHub issues when CI workflows fail
- Includes link to failed workflow run
- Helps track and resolve CI problems

### PR Management

**PR Validation**
- Enforces PR description requirements (minimum length)
- Validates branch naming conventions
- Posts validation errors as comments

**PR Size Labeler**
- Labels PRs as XS/S/M/L/XL based on change count
- Helps reviewers prioritize and estimate review time
- Configurable size thresholds

### Issue Management

**Issue Triage**
- Auto-labels issues based on keywords (bug, feature, docs)
- Customizable keyword patterns
- Streamlines issue organization

**Stale Management**
- Marks inactive issues/PRs as stale
- Automatically closes after grace period
- Configurable timeframes and exempt labels

### Release & Dependencies

**Release Generator**
- Auto-creates GitHub releases from git tags
- Generates changelog from commits
- Supports pre-releases and drafts

**Dependabot Auto-Merge**
- Auto-merges dependency updates based on type
- Configurable by major/minor/patch versions
- Waits for CI checks to pass

## Quick Start Commands

### Setup All Workflows (Copy-Paste)

```bash
# Navigate to your repository
cd /path/to/your/repo

# Create workflows directory
mkdir -p .github/workflows && cd .github/workflows

# Download all templates
curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/auto-label.yml
curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/project-sync.yml
curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/failure-tracker.yml

# Remember to update failure-tracker.yml with your CI workflow name!
```

## Documentation Locations

1. **Main README**: `/README.md` - Repository overview and workflow system explanation
2. **Reusable Workflows**: `/.github/workflows/reusable/README.md` - Comprehensive usage guide
3. **Templates**: `/.github/workflow-templates/README.md` - Quick setup instructions
4. **This File**: `/.github/WORKFLOWS-SUMMARY.md` - Organization summary

## Maintenance

All reusable workflows are maintained in this repository. To update functionality:

1. Edit the reusable workflow in `.github/workflows/reusable/`
2. Changes automatically apply to all repositories using them
3. No need to update individual repositories

## Version Pinning

For stability, you can pin to specific commits or tags:

```yaml
uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/auto-label.yml@v1.0.0
```

Or use `@main` for always-latest (default in templates).

## Security

All workflows have been:
- Reviewed for security issues (CodeQL: 0 alerts)
- Granted minimal necessary permissions
- Configured to use GitHub's automatic `GITHUB_TOKEN`

## Support

For issues or questions about these workflows:
1. Check the documentation in `.github/workflows/reusable/README.md`
2. Open an issue in this repository
3. Review example usage in `.github/workflows/`

---

**Last Updated**: January 25, 2026
**Repository**: blackboxprogramming/blackroad-io

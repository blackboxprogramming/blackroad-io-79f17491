# Workflow Templates

This directory contains ready-to-use workflow templates that can be copied directly into any repository's `.github/workflows/` directory.

## Quick Setup

To add all standard workflows to a new repository:

```bash
# Navigate to your repository
cd /path/to/your/repo

# Create workflows directory if it doesn't exist
mkdir -p .github/workflows

# Copy all templates
curl -o .github/workflows/auto-label.yml https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/auto-label.yml

curl -o .github/workflows/project-sync.yml https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/project-sync.yml

curl -o .github/workflows/failure-tracker.yml https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/failure-tracker.yml

# Don't forget to update the workflow name in failure-tracker.yml!
```

## Available Templates

### Core Automation

#### 1. `auto-label.yml`
Automatically labels PRs based on repository name patterns.
- No customization needed
- Works out of the box

#### 2. `project-sync.yml`
Adds PRs to the organization's project board.
- No customization needed
- Uses the standard org project board

#### 3. `failure-tracker.yml`
Creates issues when CI fails.
- **Requires customization**: Update the workflow name to match your CI workflow

### PR Management

#### 4. `pr-validation.yml`
Validates PR descriptions and branch naming.
- Optional: Customize description length and branch patterns

#### 5. `pr-size-labeler.yml`
Labels PRs by size (XS/S/M/L/XL).
- No customization needed
- Works out of the box

### Issue Management

#### 6. `issue-triage.yml`
Auto-labels issues based on keywords.
- Optional: Customize keyword lists

#### 7. `stale-management.yml`
Manages inactive issues and PRs.
- Optional: Customize staleness thresholds

### Release & Dependencies

#### 8. `release-generator.yml`
Creates releases from git tags.
- No customization needed
- Auto-generates changelogs

#### 9. `dependabot-auto-merge.yml`
Auto-merges Dependabot updates.
- Optional: Configure which update types to auto-merge

## Quick Setup Script

```bash
# One-line setup (copy all workflows)
mkdir -p .github/workflows && cd .github/workflows && \
  curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/auto-label.yml && \
  curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/project-sync.yml && \
  curl -O https://raw.githubusercontent.com/blackboxprogramming/blackroad-io/main/.github/workflow-templates/failure-tracker.yml
```

## Customization

All templates use the reusable workflows from this repository. To customize behavior:

1. **Auto Label**: Add custom patterns
   ```yaml
   with:
     repo-pattern-core: 'your-pattern'
     repo-pattern-labs: 'your-labs-pattern'
   ```

2. **Project Sync**: Change project board
   ```yaml
   with:
     project-url: https://github.com/users/YOUR_ORG/projects/YOUR_PROJECT_NUMBER
   ```

3. **Failure Tracker**: Match your CI workflow name
   ```yaml
   on:
     workflow_run:
       workflows: ["Your CI Name Here"]
   ```

For full documentation, see [../workflows/reusable/README.md](../workflows/reusable/README.md).

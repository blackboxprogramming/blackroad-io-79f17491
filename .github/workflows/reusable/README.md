# Reusable GitHub Workflows

This directory contains reusable GitHub Action workflows that can be shared across all repositories in the blackboxprogramming organization.

## Available Workflows

### 1. Auto Label (`auto-label.yml`)

Automatically labels pull requests based on repository name patterns.

**Purpose**: Maintains consistent labeling across the organization by automatically applying labels to PRs.

**Usage in your repository**:

```yaml
name: Auto Label

on:
  pull_request:
    types: [opened]

permissions:
  contents: read
  pull-requests: write

jobs:
  label:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/auto-label.yml@main
    permissions:
      contents: read
      pull-requests: write
```

**With custom patterns**:

```yaml
jobs:
  label:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/auto-label.yml@main
    with:
      repo-pattern-core: 'blackroad'  # Repos containing this get 'core' label
      repo-pattern-labs: 'lab'        # Repos containing this get 'labs' label
    permissions:
      contents: read
      pull-requests: write
```

### 2. Project Sync (`project-sync.yml`)

Automatically adds pull requests and issues to a GitHub Project board.

**Purpose**: Centralizes all PRs and issues in a single project board for better organization.

**Usage in your repository**:

```yaml
name: Project Sync

on:
  pull_request:
    types: [opened, reopened]

permissions:
  contents: read
  pull-requests: write
  issues: write

jobs:
  add-to-project:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/project-sync.yml@main
    with:
      project-url: https://github.com/users/blackboxprogramming/projects/8
    permissions:
      contents: read
      pull-requests: write
      issues: write
```

### 3. CI Failure Tracker (`failure-tracker.yml`)

Creates GitHub issues when CI workflows fail.

**Purpose**: Automatically tracks CI failures as issues for better visibility and follow-up.

**Usage in your repository**:

```yaml
name: CI Failure Tracker

on:
  workflow_run:
    workflows: ["Your CI Workflow Name"]
    types: [completed]

permissions:
  contents: read
  issues: write

jobs:
  report:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/failure-tracker.yml@main
    with:
      workflow-name: 'Your CI Workflow Name'
    permissions:
      contents: read
      issues: write
```

## Quick Setup for New Repositories

To add all three workflows to a new repository:

1. Create `.github/workflows/` directory in your repo
2. Add the following three files:

**`.github/workflows/auto-label.yml`**:
```yaml
name: Auto Label
on:
  pull_request:
    types: [opened]
permissions:
  contents: read
  pull-requests: write
jobs:
  label:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/auto-label.yml@main
    permissions:
      contents: read
      pull-requests: write
```

**`.github/workflows/project-sync.yml`**:
```yaml
name: Project Sync
on:
  pull_request:
    types: [opened, reopened]
permissions:
  contents: read
  pull-requests: write
  issues: write
jobs:
  add-to-project:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/project-sync.yml@main
    with:
      project-url: https://github.com/users/blackboxprogramming/projects/8
    permissions:
      contents: read
      pull-requests: write
      issues: write
```

**`.github/workflows/failure-tracker.yml`** (customize workflow-name):
```yaml
name: CI Failure Tracker
on:
  workflow_run:
    workflows: ["CORE CI"]  # Change to your CI workflow name
    types: [completed]
permissions:
  contents: read
  issues: write
jobs:
  report:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/failure-tracker.yml@main
    permissions:
      contents: read
      issues: write
```

## Benefits

- **Consistency**: All repos use the same automation logic
- **Maintainability**: Update once in this repo, affects all repos
- **Easy adoption**: Copy-paste workflow calls into any repo
- **Customizable**: Inputs allow customization per repo while maintaining core logic
- **Centralized management**: All PRs flow to the same project board

## Notes

- The `@main` reference uses the latest version. Pin to a specific commit/tag for stability.
- Permissions must be declared both at the workflow level and job level when using `workflow_call`.
- All workflows use `${{ secrets.GITHUB_TOKEN }}` which is automatically provided by GitHub Actions.

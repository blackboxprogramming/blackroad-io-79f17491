# Reusable GitHub Workflows

This directory contains reusable GitHub Action workflows that can be shared across all repositories in the blackboxprogramming organization.

## Available Workflows

### Core Automation Workflows

#### 1. Auto Label (`auto-label.yml`)

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

#### 2. Project Sync (`project-sync.yml`)

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

#### 3. CI Failure Tracker (`failure-tracker.yml`)

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

### PR Management Workflows

#### 4. PR Validation (`pr-validation.yml`)

Validates pull requests for required description, minimum length, and branch naming conventions.

**Purpose**: Enforces PR quality standards across repositories.

**Usage in your repository**:

```yaml
name: PR Validation

on:
  pull_request:
    types: [opened, edited]

permissions:
  contents: read
  pull-requests: write

jobs:
  validate:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/pr-validation.yml@main
    with:
      require-description: true
      min-description-length: 10
      check-branch-naming: true
      branch-pattern: '^(feature|fix|docs)/.*'
    permissions:
      contents: read
      pull-requests: write
```

#### 5. PR Size Labeler (`pr-size-labeler.yml`)

Automatically labels PRs based on the number of changes (additions + deletions).

**Purpose**: Helps reviewers understand PR complexity at a glance.

**Usage in your repository**:

```yaml
name: PR Size Labeler

on:
  pull_request:
    types: [opened, synchronize]

permissions:
  contents: read
  pull-requests: write

jobs:
  label-size:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/pr-size-labeler.yml@main
    permissions:
      contents: read
      pull-requests: write
```

### Issue Management Workflows

#### 6. Issue Triage (`issue-triage.yml`)

Automatically labels issues based on keywords in title and body.

**Purpose**: Streamlines issue organization and categorization.

**Usage in your repository**:

```yaml
name: Issue Triage

on:
  issues:
    types: [opened]

permissions:
  contents: read
  issues: write

jobs:
  triage:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/issue-triage.yml@main
    with:
      bug-keywords: 'bug,error,crash,broken'
      feature-keywords: 'feature,enhancement,add,new'
      docs-keywords: 'docs,documentation,readme'
    permissions:
      contents: read
      issues: write
```

#### 7. Stale Management (`stale-management.yml`)

Marks and closes inactive issues and pull requests.

**Purpose**: Keeps repositories clean by managing stale items.

**Usage in your repository**:

```yaml
name: Stale Management

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

permissions:
  contents: read
  issues: write
  pull-requests: write

jobs:
  stale:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/stale-management.yml@main
    with:
      days-before-stale: 60
      days-before-close: 7
      exempt-labels: 'pinned,security,critical'
    permissions:
      contents: read
      issues: write
      pull-requests: write
```

### Release & Dependency Workflows

#### 8. Release Generator (`release-generator.yml`)

Automatically creates GitHub releases from git tags with changelog generation.

**Purpose**: Streamlines release process and changelog creation.

**Usage in your repository**:

```yaml
name: Release Generator

on:
  push:
    tags:
      - 'v*.*.*'

permissions:
  contents: write

jobs:
  create-release:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/release-generator.yml@main
    with:
      tag-name: ${{ github.ref_name }}
      generate-changelog: true
    permissions:
      contents: write
```

#### 9. Dependabot Auto-Merge (`dependabot-auto-merge.yml`)

Automatically merges Dependabot PRs based on version update type.

**Purpose**: Reduces manual work for dependency updates while maintaining control.

**Usage in your repository**:

```yaml
name: Dependabot Auto-Merge

on:
  pull_request:
    types: [opened, synchronize]

permissions:
  contents: write
  pull-requests: write

jobs:
  auto-merge:
    uses: blackboxprogramming/blackroad-io/.github/workflows/reusable/dependabot-auto-merge.yml@main
    with:
      merge-minor: true
      merge-patch: true
      merge-major: false  # Require manual review for major updates
    permissions:
      contents: write
      pull-requests: write
```

## Quick Setup for New Repositories

To add the core workflows to a new repository:

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

# CLAUDE.md

This file provides comprehensive guidance for AI assistants working with the blackroad-io repository.

## Project Overview

**BlackRoad** is a project building sovereign, local-first AI systems. This repository (`blackroad-io`) serves as the landing page and web presence for the project, deployed to blackroad.io.

### Vision & Philosophy

BlackRoad is built on the principle of **digital sovereignty** - the idea that individuals and organizations should have full control over their AI systems and data. The project emphasizes:

- **Local-First**: AI runs on your hardware, not someone else's cloud
- **Privacy**: Your data never leaves your control
- **Transparency**: Open systems you can inspect and understand
- **Independence**: Freedom from vendor lock-in and external dependencies

This landing page repository is intentionally minimal, reflecting the philosophy of simplicity and direct communication.

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
  - No JavaScript frameworks or build tools by design
  - Inline styles for minimal external dependencies
  - UTF-8 encoding for international character support
- **Deployment**: Cloudflare Pages (via `blackroad-deploy` shared workflow)
  - Global CDN distribution
  - Automatic HTTPS
  - Zero-downtime deployments
- **CI/CD**: GitHub Actions
  - Automated testing and deployment
  - Reusable workflows for consistency across BlackRoad ecosystem
  - Automated project management integrations

## Development Workflows

### Main Branch Protection

- The `main` branch is the production branch
- All changes should go through pull requests
- Push to `main` triggers deployment to Cloudflare

### CI Pipeline (core-ci.yml)

**Purpose**: Ensures code quality and prevents broken deployments.

**Trigger Events**:
- Pull requests to `main` or `master`
- Pushes to `main` or `master`

**Jobs**:
1. **guard**: Guardrail check (placeholder)
   - Currently a placeholder that confirms the workflow is active
   - Future: Will include security checks, compliance validation
   
2. **lint**: Lint/test placeholder (to be implemented)
   - Currently a placeholder
   - Future: HTML validation, link checking, accessibility testing

**Complete Workflow Definition**:
```yaml
name: CORE CI

on:
  pull_request:
    branches: [ main, master ]
  push:
    branches: [ main, master ]

jobs:
  guard:
    runs-on: ubuntu-latest
    steps:
      - name: Guardrail
        run: echo "CORE repo guardrail active"

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint placeholder
        run: echo "Add lint/test here"
```

### Deployment (deploy.yml)

**Purpose**: Automatically deploys the landing page to Cloudflare Pages when changes are merged.

**Trigger**: Push to `main` branch only (production deployments)

**Implementation**: Uses a reusable workflow from the `blackroad-deploy` repository, promoting consistency across all BlackRoad web properties.

**Complete Workflow Definition**:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    uses: blackboxprogramming/blackroad-deploy/.github/workflows/cloudflare-deploy.yml@main
    with:
      project: blackroad-io
```

**Deployment Process**:
1. Workflow triggered on merge to `main`
2. Calls shared `cloudflare-deploy.yml` workflow
3. Cloudflare Pages builds and deploys the site
4. Site becomes available at blackroad.io within seconds
5. Global CDN propagation completes within minutes

**Important Notes**:
- Only `main` branch deploys to production
- PR branches do not trigger deployment (CI only)
- Deployment credentials managed in `blackroad-deploy` repository
- No manual deployment steps required

### Automation Bots

#### 1. Auto Label (`auto-label.yml`)

**Purpose**: Automatically categorizes PRs based on repository naming conventions.

**Trigger**: When a PR is opened

**Labels Applied**:
- `core` - If repository name contains "blackroad"
- `labs` - If repository name contains "lab"

**Complete Workflow Definition**:
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
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            const repo = context.repo.repo.toLowerCase()
            let labels = []
            if (repo.includes("blackroad")) labels.push("core")
            if (repo.includes("lab")) labels.push("labs")
            if (labels.length)
              await github.rest.issues.addLabels({
                ...context.repo,
                issue_number: context.issue.number,
                labels
              })
```

**Use Case**: Helps organize work across the BlackRoad ecosystem by automatically tagging core infrastructure vs. experimental projects.

#### 2. CI Failure Tracker (`failure-issue.yml`)

**Purpose**: Automatically creates GitHub issues when CI fails, ensuring visibility of broken builds.

**Trigger**: When the "CORE CI" workflow completes with failure status

**Behavior**:
- Creates a new issue with title "CI failed: [workflow name]"
- Issue body contains direct link to the failed workflow run
- Enables quick triage and fix of CI problems

**Complete Workflow Definition**:
```yaml
name: CI Failure Tracker

on:
  workflow_run:
    workflows: ["CORE CI"]
    types: [completed]

jobs:
  report:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            await github.rest.issues.create({
              ...context.repo,
              title: "CI failed: " + context.payload.workflow_run.name,
              body: context.payload.workflow_run.html_url
            })
```

**Important Notes**:
- Only triggers on actual failures (not cancellations)
- Requires workflow to have permissions to create issues
- Does not close issues automatically - manual triage required

#### 3. Project Sync (`project-sync.yml`)

**Purpose**: Automatically adds PRs to the centralized GitHub Projects board for tracking.

**Trigger**: When a PR is opened or reopened

**Target Project**: https://github.com/users/blackboxprogramming/projects/8

**Complete Workflow Definition**:
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
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@v1
        with:
          project-url: https://github.com/users/blackboxprogramming/projects/8
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

**Use Case**: Maintains a centralized view of all work-in-progress across BlackRoad repositories.

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

**Standard Process**:
1. Create a feature branch: `git checkout -b feature/your-change`
2. Edit `index.html` directly in your editor
3. Test locally by opening the file in a browser
4. Commit your changes with a descriptive message
5. Push and create a PR for review
6. After approval, merge triggers automatic deployment

**HTML Guidelines**:
- Keep the page minimal and fast-loading
- Use inline styles (no external CSS files)
- Avoid JavaScript unless absolutely necessary
- Ensure UTF-8 encoding is maintained
- Test in multiple browsers before submitting PR

**Example Change Workflow**:
```bash
# Create branch
git checkout -b feature/update-tagline

# Edit the file
vim index.html  # or your preferred editor

# Test locally
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or just drag to browser

# Commit
git add index.html
git commit -m "update tagline to emphasize privacy"

# Push and create PR
git push origin feature/update-tagline
gh pr create --title "Update tagline" --body "Emphasizes privacy aspect"
```

### Adding New Workflows

**Standard Process**:
1. Create new `.yml` file in `.github/workflows/`
2. Follow existing patterns for permissions and triggers
3. Use `actions/github-script@v7` for GitHub API interactions
4. Prefer reusable workflows from `blackroad-deploy` when available
5. Test workflow on a feature branch before merging

**Workflow Best Practices**:
- Always specify minimum necessary permissions
- Use specific action versions (not `@main` for third-party actions)
- Add clear comments explaining workflow purpose
- Test with `act` locally if possible
- Document any required secrets or environment variables

**Example Workflow Template**:
```yaml
name: Your Workflow Name

on:
  pull_request:
    types: [opened]
  # or other triggers

permissions:
  contents: read
  # add minimum permissions needed

jobs:
  your-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Your step
        run: echo "Your command"
```

### Permissions in Workflows

**Standard Permission Pattern**:
```yaml
permissions:
  contents: read        # Read repository contents
  pull-requests: write  # Comment on/modify PRs
  issues: write        # Create/modify issues
```

**Permission Principles**:
- Grant minimum permissions required for the workflow
- Use `read` when write access is not needed
- Document why each permission is necessary
- Review permissions when modifying workflows

**Common Permission Combinations**:
- **Read-only workflow**: `contents: read` only
- **PR automation**: `contents: read, pull-requests: write`
- **Issue management**: `contents: read, issues: write`
- **Full automation**: All three permissions above

## External Dependencies

- **blackroad-deploy**: Shared deployment workflows (`blackboxprogramming/blackroad-deploy`)
  - Centralized Cloudflare Pages deployment logic
  - Manages deployment secrets and credentials
  - Provides consistent deployment patterns across all web properties
- **GitHub Actions**:
  - `actions/checkout@v4` - Repository checkout
  - `actions/github-script@v7` - GitHub API scripting
  - `actions/add-to-project@v1` - Project board integration

## The BlackRoad Ecosystem

### Related Repositories

This repository is part of a larger ecosystem:

- **blackroad-io** (this repo) - Public-facing landing page
- **blackroad-deploy** - Shared CI/CD workflows and deployment automation
- **blackroad-lab-*** - Experimental projects and research
- Other core infrastructure repositories (TBD)

### Shared Infrastructure

All BlackRoad web properties share:
- Common deployment workflows
- Consistent CI/CD patterns
- Unified project management
- Standard automation bots

This approach ensures:
- **Consistency**: Same patterns across all projects
- **Maintainability**: Update once, apply everywhere
- **Reliability**: Battle-tested deployment processes
- **Efficiency**: Reduce duplicated effort

### Project Organization

Work across the BlackRoad ecosystem is tracked in a centralized GitHub Projects board:
- URL: https://github.com/users/blackboxprogramming/projects/8
- Automatically populated via `project-sync.yml` workflow
- Provides cross-repository visibility
- Enables coordinated releases and planning

## Best Practices for AI Assistants

### Understanding Before Acting

1. **Read the context**: Always review existing code and patterns before making changes
2. **Check git history**: Use `git log` and `git blame` to understand evolution of code
3. **Test locally first**: Open `index.html` in a browser before committing changes
4. **Follow conventions**: Match existing style, naming, and patterns

### Making Changes

1. **Minimal diffs**: Change only what's necessary
2. **Atomic commits**: One logical change per commit
3. **Clear messages**: Write descriptive commit messages
4. **Test thoroughly**: Verify changes don't break existing functionality

### Working with Workflows

1. **Understand triggers**: Know when workflows run (PR vs push vs workflow_run)
2. **Check permissions**: Ensure workflow has necessary permissions
3. **Test on branches**: Don't test workflow changes directly on `main`
4. **Review logs**: Check Actions tab for workflow execution details

### Communication

1. **Clear PR descriptions**: Explain what changed and why
2. **Reference issues**: Link to related issues or discussions
3. **Document decisions**: Add comments for non-obvious choices
4. **Ask when unsure**: Better to clarify than make wrong assumptions

### Common Pitfalls to Avoid

1. ❌ **Don't add build tools**: This is intentionally a static site
2. ❌ **Don't add dependencies**: No npm, no package.json
3. ❌ **Don't overcomplicate**: Simple is better
4. ❌ **Don't break workflows**: Test changes to `.github/workflows/` carefully
5. ❌ **Don't skip testing**: Always verify changes locally first

### Recommended Approach

1. **Explore**: Use `view`, `grep`, `glob` to understand the codebase
2. **Plan**: Think through the change before editing
3. **Execute**: Make minimal, targeted changes
4. **Verify**: Test locally and check git diff
5. **Document**: Clear commit messages and PR descriptions

## Troubleshooting

### Deployment Issues

**Problem**: Changes merged but not visible on blackroad.io

**Solutions**:
1. Check Deploy workflow in Actions tab
2. Wait 2-3 minutes for CDN propagation
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
4. Check Cloudflare Pages dashboard (if access available)

**Problem**: Deploy workflow failing

**Solutions**:
1. Check workflow logs in Actions tab
2. Verify `blackroad-deploy` repository is accessible
3. Ensure project name matches in `deploy.yml`
4. Check for issues in `blackroad-deploy` repository

### CI/CD Issues

**Problem**: CORE CI workflow failing

**Solutions**:
1. Check workflow logs for specific error
2. Verify all workflow files are valid YAML
3. Ensure referenced actions exist and are accessible
4. Check if GitHub Actions is experiencing outages

**Problem**: Automation bots not working

**Solutions**:
1. Verify workflow permissions are correct
2. Check if workflow is enabled (Actions tab → Workflows)
3. Ensure triggering events match expectations
4. Review workflow logs for error messages

### Git Issues

**Problem**: Merge conflicts

**Solutions**:
1. Pull latest changes: `git pull origin main`
2. Resolve conflicts in affected files
3. Test locally after resolving
4. Commit resolution and push

**Problem**: Accidentally committed to `main`

**Solutions**:
1. **Don't force push** - main is protected
2. Create a revert commit: `git revert HEAD`
3. Or create a PR to undo changes
4. Learn from it - use feature branches

### Local Testing Issues

**Problem**: HTML not rendering correctly

**Solutions**:
1. Check browser console for errors
2. Verify UTF-8 encoding
3. Validate HTML (https://validator.w3.org/)
4. Test in multiple browsers
5. Check for typos in HTML tags

## Testing and Validation

### Pre-Commit Checklist

Before committing changes to `index.html`:
- [ ] File opens correctly in browser
- [ ] No console errors
- [ ] Text is readable and properly formatted
- [ ] Page loads quickly (no external dependencies)
- [ ] Works on mobile viewport (responsive)
- [ ] UTF-8 characters display correctly

### Pre-Merge Checklist

Before merging a PR:
- [ ] CI workflows passing
- [ ] Changes reviewed by maintainer
- [ ] PR description is clear and complete
- [ ] Commit messages follow conventions
- [ ] No unintended file changes
- [ ] Automated checks passing (labels, project sync)

### Deployment Validation

After merging to `main`:
- [ ] Deploy workflow completed successfully
- [ ] Changes visible on blackroad.io (after cache clear)
- [ ] No broken links or formatting issues
- [ ] Page loads quickly from different locations
- [ ] Mobile and desktop views both work

## Security Considerations

### Workflow Security

1. **Minimize permissions**: Only grant what's necessary
2. **Pin action versions**: Use specific commits or tags for third-party actions (not `@main`)
   - Exception: Internal reusable workflows (e.g., `blackroad-deploy`) can use `@main`
3. **Validate inputs**: Sanitize any user-provided data
4. **Protect secrets**: Never log or expose secrets
5. **Review dependencies**: Audit third-party actions

### HTML Security

1. **No inline JavaScript**: Avoid XSS vulnerabilities
2. **Safe external links**: Use `rel="noopener"` if adding links
3. **Content security**: No user-generated content in static page
4. **HTTPS only**: Cloudflare enforces, but maintain awareness

### Access Control

1. **Branch protection**: `main` requires PR approval
2. **Workflow permissions**: Minimal and explicit
3. **Secret management**: Handled in `blackroad-deploy` repo
4. **Token scope**: GITHUB_TOKEN limited to repository

## Performance Optimization

### Current Performance

- **Page size**: < 1KB (extremely minimal)
- **Load time**: < 100ms (static HTML)
- **No external requests**: Everything inline
- **Global CDN**: Cloudflare edge network

### Maintaining Performance

1. **Keep it simple**: No frameworks or build tools
2. **Inline everything**: Styles, content, minimal
3. **Avoid images**: Use text and symbols
4. **No external fonts**: System fonts only
5. **Test on slow connections**: Should be near-instant

### Future Considerations

If adding content:
- Use SVG instead of images (inline if small)
- Lazy load non-critical content
- Optimize any added assets
- Monitor page size (keep under 10KB)

## Accessibility

### Current Accessibility Features

- Semantic HTML structure
- UTF-8 encoding for international characters
- System font stack (user's preferred font)
- Simple, readable content
- No complex interactions

### Accessibility Checklist

When making changes:
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for any images (if added)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works (if interactive elements)
- [ ] Screen reader friendly structure
- [ ] No flashing or moving content

## Future Development

### Planned Enhancements

1. **CI/CD**: Implement actual lint/test jobs in `core-ci.yml`
2. **Validation**: Add HTML validation checks
3. **Link checking**: Verify no broken links
4. **Accessibility testing**: Automated a11y checks
5. **Performance monitoring**: Track page load metrics

### Potential Features

- Additional pages for documentation
- More detailed project information
- Links to other BlackRoad resources
- Status page for services
- RSS feed for updates

### What to Avoid

- Complex frameworks (React, Vue, etc.)
- Build processes (webpack, vite, etc.)
- External dependencies (minimize)
- Heavy images or media
- Tracking or analytics

## Notes for AI Assistants

### Critical Understanding

1. **Static Site Philosophy**: This is intentionally minimal - no build tools, no frameworks, no complexity
2. **Production Branch**: `main` is production - all changes go through PR review
3. **Automated Deployment**: Merging to `main` triggers immediate deployment to blackroad.io
4. **Shared Infrastructure**: Part of larger BlackRoad ecosystem with shared workflows
5. **Automation First**: Workflows handle labeling, project sync, and failure tracking automatically

### Key Behaviors

1. **Always test locally**: Open `index.html` in browser before committing
2. **Match existing style**: Follow patterns in current code
3. **Minimal changes**: Edit only what's necessary
4. **Clear commits**: Descriptive, lowercase commit messages
5. **Verify workflows**: Check Actions tab after workflow changes

### Common Tasks

**Update page content**:
```bash
# Edit index.html
vim index.html
# Test locally
open index.html
# Commit and push
git add index.html
git commit -m "update content with new messaging"
git push origin feature/your-branch
```

**Add new workflow**:
```bash
# Create workflow file
vim .github/workflows/your-workflow.yml
# Test on feature branch first
git checkout -b test/new-workflow
git add .github/workflows/your-workflow.yml
git commit -m "add new workflow for X"
git push origin test/new-workflow
# Monitor Actions tab for results
```

**Debug workflow failure**:
```bash
# Check logs
gh run list
gh run view [run-id]
# Or use Actions tab in GitHub UI
```

### Integration Points

1. **PRs automatically**:
   - Get labeled with `core`
   - Get added to Projects board
   - Trigger CI workflows

2. **Main branch pushes**:
   - Trigger deployment to Cloudflare
   - Run CI validation
   - Update production site

3. **CI failures**:
   - Create GitHub issue automatically
   - Link to failed run
   - Require manual triage

### Quick Reference

| Task | Command/Location |
|------|------------------|
| View workflows | `.github/workflows/` directory |
| Check CI status | Actions tab → CORE CI |
| View deploy status | Actions tab → Deploy |
| Test locally | Open `index.html` in browser |
| Create PR | `gh pr create` |
| View project board | https://github.com/users/blackboxprogramming/projects/8 |

## Appendix

### File Reference

#### `/index.html`
Main landing page. Keep minimal and fast.

#### `/CLAUDE.md`
This file. Guidance for AI assistants.

#### `/.github/workflows/core-ci.yml`
Main CI pipeline. Runs on PRs and pushes.

#### `/.github/workflows/deploy.yml`
Production deployment. Runs on main branch pushes.

#### `/.github/workflows/auto-label.yml`
PR labeling automation. Runs when PRs opened.

#### `/.github/workflows/failure-issue.yml`
CI failure tracking. Creates issues when CI fails.

#### `/.github/workflows/project-sync.yml`
Project board sync. Adds PRs to tracking board.

### Useful Commands

```bash
# Repository navigation
git log --oneline          # View commit history
git status                 # Check working directory
git diff                   # See unstaged changes

# Workflow management
gh workflow list           # List all workflows
gh workflow view           # View workflow details
gh run list               # List recent runs
gh run view [run-id]      # View specific run

# PR management
gh pr create              # Create new PR
gh pr list                # List PRs
gh pr view [number]       # View specific PR
gh pr checks              # View PR check status

# Branch management
git branch -a             # List all branches
git checkout -b [name]    # Create and switch to branch
git push origin [branch]  # Push branch to remote
```

### External Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **HTML Validator**: https://validator.w3.org/
- **GitHub Projects**: https://docs.github.com/en/issues/planning-and-tracking-with-projects

### Contact and Support

For questions or issues:
1. Check this document first
2. Review existing issues and PRs
3. Check workflow logs in Actions tab
4. Create issue with clear description
5. Tag relevant maintainers if urgent

---

**Last Updated**: 2026-01-26  
**Maintained By**: BlackRoad Team  
**Version**: 2.0

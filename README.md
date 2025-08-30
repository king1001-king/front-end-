Examples:
- `feat(ui): add navbar component`
- `fix(api): correct response mapping`
- `chore(standards): add naming workflow`

PRs use our template (summary, type, ticket, checklist).

## 🐞 Issues
Use **Bug report** template. Include steps, expected behavior, logs/screenshots, and environment (dev/acc/prod).

## 🔒 Protected Branches
`main` is protected:
- requires PRs
- requires the **Validate naming** check
- blocks force pushes & deletions

## ⚡ Automation
GitHub Action **Validate naming** checks:
- branch name format
- PR title format

Merges are blocked if rules aren’t followed.

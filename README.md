# AmogaDS — Central Design System (`@mohdaman/ui`)

Welcome to the **Amoga Design System (AmogaDS)** repository. This repository serves two unified purposes:
1. **Source of Truth for `@mohdaman/ui`**: A centralized, versioned design system package containing design tokens, atomic UI primitives, reusable business patterns, and page templates published directly to the public [NPM Registry](https://www.npmjs.com/package/@mohdaman/ui).
2. **Interactive Component Gallery**: A live Next.js documentation and preview application for exploring components, states, responsive viewports, and theme variants.

---

## 📦 Consuming `@mohdaman/ui` in Next.js Applications

### 1. Install Package
Install directly from NPM into any Next.js (or React) project:
```bash
npm install @mohdaman/ui
```

### 2. Import Theme & Styles
In your global stylesheet (`app/globals.css` or `src/styles/globals.css`):
```css
@import "tailwindcss";
@import "@mohdaman/ui/theme.css";

/* Tell Tailwind CSS v4 to scan compiled package classes */
@source "../node_modules/@mohdaman/ui/dist";
```

> 📖 **Full Developer Integration Guide**: For complete setup, dark mode, component examples, and templates, see [HOW-TO-USE.md](HOW-TO-USE.md).

### 3. Consume Components in Code
```tsx
import { 
  Button, 
  PageHeader, 
  DataTable, 
  StatusBadge, 
  ListTemplate 
} from '@mohdaman/ui'

export default function UsersPage() {
  return (
    <ListTemplate
      title="User Management"
      description="Manage system users and their permissions."
      actions={<Button>Invite User</Button>}
    >
      <StatusBadge status="success" dot pulse>
        Active
      </StatusBadge>
    </ListTemplate>
  )
}
```

---

## 🏛 Architecture & Public Exports

```
src/
└── design-system/
    ├── tokens/              # Semantic OKLCH tokens, themes, radius, animations
    ├── components/
    │   ├── ui/              # 57 Radix-based atomic primitives
    │   └── business/        # Multi-app reusable composite patterns
    ├── templates/           # 6 standard architectural page blueprints
    └── index.ts             # Central public barrel export
```

### Export Classification Matrix

| Layer | Subpath / Export | Examples |
|---|---|---|
| **Tokens** | `@mohdaman/ui/tokens`<br/>`@mohdaman/ui/theme.css` | `SEMANTIC_TOKENS`, `CHART_TOKENS`, `SIDEBAR_TOKENS`, CSS custom properties |
| **Primitives** | `@mohdaman/ui` | `Button`, `Input`, `Card`, `Table`, `Tabs`, `Dialog`, `Sheet`, `Drawer`, `Select`, `Checkbox`, `RadioGroup`, `Slider`, `Switch`, `Badge`, `Avatar`, `Breadcrumb`, `DropdownMenu`, `Popover`, `Tooltip`, `Command`, `ContextMenu`, `Pagination`, `Progress`, `ScrollArea`, `Skeleton`, `Sonner`, `Toaster`, `Spinner`, `Textarea`, `Toggle`, `Kbd`, `Label`, `Empty`, `Field`, `Form`, `InputGroup`, `InputOTP` |
| **Business Components** | `@mohdaman/ui` | `PageHeader`, `DataTable`, `StatusBadge`, `FilterBar`, `FormSection`, `MetricCard`, `ConfirmDialog`, `PasswordInput`, `SignOutDialog`, `ThemeSwitch`, `ThemeSelector`, `SelectDropdown`, `LongText`, `Search`, `Stats01`, `DatePicker`, `QrCodeDisplay` |
| **Page Templates** | `@mohdaman/ui` | `ListTemplate`, `DetailTemplate`, `FormTemplate`, `WizardTemplate`, `DashboardTemplate`, `WorkspaceTemplate` |

---

## 🛠 Local Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Interactive Component Gallery
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live component catalog and responsive viewports.

### 3. Build Distribution Package (`@mohdaman/ui`)
```bash
npm run build:package
```
Generates clean ESM (`dist/index.mjs`), CommonJS (`dist/index.js`), TypeScript declarations (`dist/index.d.ts`), and styles (`dist/theme.css`).

### 4. Build Next.js Documentation App
```bash
npm run build
```

### 5. Typecheck & Lint
```bash
npm run typecheck
npm run lint
```

### 6. Publish to NPM
```bash
npm publish --access public
```

---

## 🛡 Repository Governance & CI/CD

### 1. Branch Protection & PRs
* Direct pushes to `main` are restricted.
* All changes must go through Pull Requests with minimum **1 Code Owner approval**.
* Required status check: `Lint, Typecheck & Build`.

### 2. Code Ownership ([.github/CODEOWNERS](.github/CODEOWNERS))
* `/src/design-system/tokens/` & `/ux/` → `@amoga-design-leads`
* `/src/design-system/components/ui/` → `@amoga-ui-engineers`
* `/src/design-system/components/business/` & `/templates/` → `@amoga-core-devs`
* `/package.json`, `tsup.config.ts`, `/.github/` → `@amoga-maintainers`

### 3. CI Pipeline ([.github/workflows/ci.yml](.github/workflows/ci.yml))
Triggered on every PR to `main`:
1. `npm ci` (Dependency installation)
2. `npm run lint` (ESLint validation)
3. `npx tsc --noEmit` (TypeScript compilation check)
4. `npm run build:package` (Package bundle validation)
5. `npm run build` (Next.js production build)
6. Non-blocking design token integrity check

### 4. Release Pipeline ([.github/workflows/release.yml](.github/workflows/release.yml))
Triggered via GitHub Actions Workflow Dispatch:
1. Select release type (`patch`, `minor`, `major`).
2. Pipeline validates codebase and executes `npm run build:package`.
3. Bumps version in `package.json` according to semantic versioning.
4. Generates Git release tag (e.g. `v1.0.0`) and GitHub Release notes.
5. Publishes `@mohdaman/ui` to NPM Registry.
6. Automatically triggers cross-repository upgrade PRs across registered consumer apps.

---

## 🤖 Cross-Repository Upgrade Automation

AmogaDS provides a fully controlled, automated cross-repository dependency upgrade pipeline to keep all consuming applications up to date with `@mohdaman/ui` releases without risk of accidental code overwrites or regressions.

```
@mohdaman/ui Release Published (e.g. v1.4.0)
  ↓
Discover Registered Apps in consumers-registry.json
  ↓
Authenticate via Ephemeral GitHub App Token (Zero PATs)
  ↓
Create Isolation Branch (chore/upgrade-amoga-ui-v1.4.0)
  ↓
Update package.json & Lockfile ONLY (Protected Code Guard)
  ↓
Run Consuming Application CI & Build Checks
  ↓
Generate Detailed PR (Changelog + Safety Checks + Rollback Guide)
  ↓
Application Owner Reviews & Merges Manually (No Auto-Merge)
```

---

### 1. Checking Version Status Across Applications

Run the central tracker from the `amogads/` directory:
```bash
npm run consumers:status
```

**Live Output Example**:
```text
===============================================================
  🌟 AmogaDS (@mohdaman/ui) Central Consumer Tracker
  📦 Current Design System Version: v1.0.0
===============================================================

┌─────────┬──────────────────────────────────┬──────────────────────────┬───────────┬──────────┬─────────────────┬────────────┬─────────────────────────┬───────────┐
│ (index) │ Repository                       │ App Name                 │ Installed │ Target   │ Status          │ Automation │ Team                    │ Active PR │
├─────────┼──────────────────────────────────┼──────────────────────────┼───────────┼──────────┼─────────────────┼────────────┼─────────────────────────┼───────────┤
│ 0       │ 'MohammadAmannn/shadcn-admin'    │ 'Shadcn Admin Pilot App' │ 'v1.0.0'  │ 'v1.0.0' │ '✅ up-to-date' │ 'enabled'  │ '@amoga-admin'          │ 'None'    │
│ 1       │ 'MohammadAmannn/amoga-analytics' │ 'Amoga Analytics Portal' │ 'v1.0.0'  │ 'v1.0.0' │ '✅ up-to-date' │ 'enabled'  │ '@amoga-analytics-team' │ 'None'    │
└─────────┴──────────────────────────────────┴──────────────────────────┴───────────┴──────────┴─────────────────┴────────────┴─────────────────────────┴───────────┘

📊 Summary: 2 registered apps | 2 up-to-date | 0 pending upgrade.
```

---

### 2. How to Register a New Consuming Application

To register a new Next.js application for automated `@mohdaman/ui` upgrades, add an entry to [`consumers-registry.json`](consumers-registry.json):

```json
{
  "id": "my-new-app",
  "name": "My Next.js Application",
  "repository": "OrganizationOrOwner/my-new-app",
  "defaultBranch": "main",
  "packagePath": "package.json",
  "currentVersion": "1.0.0",
  "targetVersion": "1.0.0",
  "updateStatus": "up-to-date",
  "automationStatus": "enabled",
  "team": "@my-app-team",
  "lastCheckedAt": "2026-08-24T11:00:00Z",
  "lastUpgradedAt": "2026-08-24T11:00:00Z",
  "activePrUrl": null
}
```

#### Field Reference:
* `repository`: GitHub repository in `owner/repo` format.
* `defaultBranch`: Target branch for PRs (usually `main`).
* `automationStatus`: Set to `"enabled"` to receive PRs, or `"paused"` / `"disabled"` to hold updates.
* `team`: Team handle or maintainer notified for PR review.

---

### 3. Application Code Protection & Security

The automation engine ([scripts/upgrade-consumers.mjs](scripts/upgrade-consumers.mjs)) enforces strict boundaries:
* **Zero Personal Access Tokens (PATs)**: Uses GitHub App installation tokens scoped with minimum required permissions (`contents: write`, `pull_requests: write`).
* **Protected File Zones**: `app/`, `features/`, `components/custom/`, `src/lib/`, `src/services/`, and state stores are **never modified**.
* **Strict Whitelist**: Automation is only allowed to touch `package.json` and lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`). Any unexpected file modification immediately aborts the pipeline.

---

### 4. Reviewing & Merging an Upgrade PR (Developer Guide)

When an automated upgrade PR is opened in your consuming application:

1. **Inspect Version Diff & Changelog**: Check whether the release is `PATCH`, `MINOR`, or `MAJOR` in the PR description.
2. **Verify CI Status**: Ensure all automated checks (`Lint`, `Typecheck`, `Build`, `Tests`) pass on the PR branch.
3. **Local Visual Verification (Optional)**:
   ```bash
   git fetch origin chore/upgrade-amoga-ui-vX.Y.Z
   git checkout chore/upgrade-amoga-ui-vX.Y.Z
   npm install
   npm run dev
   ```
   Check light/dark mode and key user flows (forms, tables, navigation).
4. **Manual Approval & Merge**: Approve and merge the PR. *(Auto-merging is intentionally disabled for safety).*

---

### 5. Rollback & Emergency Recovery

If an issue is discovered after merging an upgrade:

```bash
# 1. Revert to previous stable version
npm install @mohdaman/ui@<PREVIOUS_VERSION>

# 2. Re-build and verify
npm run build

# 3. Commit and push
git commit -am "fix: rollback @mohdaman/ui to v<PREVIOUS_VERSION>"
git push origin main
```

---

## 📚 UX & Architectural Documentation

Comprehensive documentation is available in the repository:

- [Developer How-To-Use Guide](HOW-TO-USE.md)
- [Cross-Repository Upgrade Automation Guide](ux/UPGRADE-AUTOMATION.md)
- [Design System Architecture & Boundaries](ux/DESIGN-SYSTEM.md)
- [UX Guidelines & Interaction Foundations](ux/UX-GUIDELINES.md)
- [Component Guidelines & Taxonomy](ux/COMPONENT-GUIDELINES.md)
- [Page Guidelines & Template Specifications](ux/PAGE-GUIDELINES.md)
- [AI Development Guidelines](ux/AI-DEVELOPMENT-GUIDELINES.md)
- [Design System Rules](ux/design-rules.md)
- [Token Specifications](ux/token-specifications.md)

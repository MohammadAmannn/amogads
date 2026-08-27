# AmogaDS — Central Design System (`@amogads/ui`)

Welcome to the **Amoga Design System (AmogaDS)** repository. This repository serves two unified purposes:
1. **Source of Truth for `@amogads/ui`**: A centralized, versioned design system package containing design tokens, atomic UI primitives, reusable business patterns, and page templates published directly to the public [NPM Registry](https://www.npmjs.com/package/@amogads/ui).
2. **Interactive Component Gallery**: A live Next.js documentation and preview application for exploring components, states, responsive viewports, and theme variants.

---

## 📦 Consuming `@amogads/ui` in Next.js Applications

### 1. Install Package
Install directly from NPM into any Next.js (or React) project:
```bash
npm install @amogads/ui
```

### 2. Import Theme & Styles
In your global stylesheet (`app/globals.css` or `src/styles/globals.css`):
```css
@import "tailwindcss";
@import "@amogads/ui/theme.css";

/* Tell Tailwind CSS v4 to scan compiled package classes */
@source "../node_modules/@amogads/ui/dist";
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
} from '@amogads/ui'

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
| **Tokens** | `@amogads/ui/tokens`<br/>`@amogads/ui/theme.css` | `SEMANTIC_TOKENS`, `CHART_TOKENS`, `SIDEBAR_TOKENS`, CSS custom properties |
| **Primitives** | `@amogads/ui` | `Button`, `Input`, `Card`, `Table`, `Tabs`, `Dialog`, `Sheet`, `Drawer`, `Select`, `Checkbox`, `RadioGroup`, `Slider`, `Switch`, `Badge`, `Avatar`, `Breadcrumb`, `DropdownMenu`, `Popover`, `Tooltip`, `Command`, `ContextMenu`, `Pagination`, `Progress`, `ScrollArea`, `Skeleton`, `Sonner`, `Toaster`, `Spinner`, `Textarea`, `Toggle`, `Kbd`, `Label`, `Empty`, `Field`, `Form`, `InputGroup`, `InputOTP` |
| **Business Components** | `@amogads/ui` | `PageHeader`, `DataTable`, `StatusBadge`, `FilterBar`, `FormSection`, `MetricCard`, `ConfirmDialog`, `PasswordInput`, `SignOutDialog`, `ThemeSwitch`, `ThemeSelector`, `SelectDropdown`, `LongText`, `Search`, `Stats01`, `DatePicker`, `QrCodeDisplay` |
| **Chat Components** | `@amogads/ui` | `ChatSidebar`, `ChatCardItem`, `ChatMessageList`, `ChatHeader`, `ChatBubble`, `ChatInput`, `TypingIndicator`, `ChatEmptyState`, `AiChatBubble` |
| **Page Templates** | `@amogads/ui` | `ListTemplate`, `DetailTemplate`, `FormTemplate`, `WizardTemplate`, `DashboardTemplate`, `WorkspaceTemplate` |

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

### 3. Build Distribution Package (`@amogads/ui`)
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
5. Publishes `@amogads/ui` to NPM Registry.
6. Automatically triggers cross-repository upgrade PRs across registered consumer apps.

---

## 🔄 Synchronization & Consuming App Workflow (`amogads` ↔ `amoganextapp`)

`amogads` is the central design system source of truth published to NPM as **`@amogads/ui`**. When you make changes to components, tokens, or templates in `amogads`, follow this standard manual branching workflow to synchronize and adopt changes into your consumer application (e.g. `amoganextapp`).

```
┌─────────────────────────────────────────────────────────────┐
│ Step 1: Update AmogaDS (Design System)                      │
│ - Edit components in amogads/src/design-system/...          │
│ - Run tests / build: npm run build:package                  │
│ - Bump version & publish to NPM: npm publish                │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 2: Create Branch on Consumer App (amoganextapp)        │
│ - git checkout -b chore/update-amogads-vX.Y.Z               │
│ - npm install @amogads/ui@latest                            │
│ - Verify app UI & build: npm run build                      │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Merge Branch with Main                              │
│ - Commit & merge branch into amoganextapp/main              │
│ - Push origin main                                          │
└─────────────────────────────────────────────────────────────┘
```

---

### 📖 Step-by-Step Synchronization Example

#### Scenario: Adding a new prop or style tweak to `Button` in `amogads` and adopting it in `amoganextapp`.

#### Step 1: Make Changes and Publish in `amogads`
Navigate to the `amogads` directory:
```bash
cd amogads

# 1. Edit component (e.g. src/design-system/components/ui/button.tsx)
# 2. Build the package distribution
npm run build:package

# 3. Bump version (patch / minor / major)
npm version patch

# 4. Publish the updated package to NPM
npm publish --access public
```
*(Example: `@amogads/ui` version is now `1.0.3` on NPM).*

#### Step 2: Create a Branch in `amoganextapp` & Update Dependency
Navigate back to your main application root (`amoganextapp`):
```bash
cd .. # (in amoganextapp root)

# 1. Create a dedicated branch for the design system update
git checkout -b chore/update-amogads-v1.0.3

# 2. Install the newly published version from NPM
npm install @amogads/ui@latest

# 3. Test and verify locally
npm run dev
npm run build
```

#### Step 3: Commit and Merge into `main`
```bash
# 1. Stage and commit updated package.json & package-lock.json
git add package.json package-lock.json
git commit -m "chore(deps): update @amogads/ui to v1.0.3"

# 2. Switch to main and merge your branch
git checkout main
git merge chore/update-amogads-v1.0.3

# 3. Push to GitHub
git push origin main
```

---

## 🤖 Cross-Repository Registry & Automation Controls

AmogaDS maintains a consumer registry in [`consumers-registry.json`](consumers-registry.json) to track connected applications:

```json
{
  "id": "amoganextapp",
  "name": "Amoga Next App",
  "repository": "MohammadAmannn/amoganextapp",
  "defaultBranch": "main",
  "packagePath": "package.json",
  "currentVersion": "1.0.2",
  "targetVersion": "1.0.2",
  "updateStatus": "up-to-date",
  "automationStatus": "disabled",
  "team": "@MohammadAmannn"
}
```

### Automation Modes:
* `"automationStatus": "disabled"` *(Default)*: Automated GitHub Action PR bot is disabled. Developers manage their own branch creation, local verification, and merge into `main`.
* `"automationStatus": "enabled"`: GitHub Actions will automatically clone the consumer, create a branch, and submit a PR via GitHub REST API whenever a release occurs.

### Check Status Across Consumers:
Run from the `amogads/` directory:
```bash
npm run consumers:status
```

---

### 5. Rollback & Emergency Recovery

If an issue is discovered after merging an upgrade:

```bash
# 1. Revert to previous stable version
npm install @amogads/ui@<PREVIOUS_VERSION>

# 2. Re-build and verify
npm run build

# 3. Commit and push
git commit -am "fix: rollback @amogads/ui to v<PREVIOUS_VERSION>"
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

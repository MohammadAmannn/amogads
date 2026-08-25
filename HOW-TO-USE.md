# Developer Integration & Usage Guide — `@amogads/ui`

Welcome to the developer guide for consuming **`@amogads/ui`** (Amoga Design System) in your Next.js and React applications.

---

## 📑 Table of Contents
1. [Installation & Setup](#1-installation--setup)
2. [Tailwind CSS v4 Configuration](#2-tailwind-css-v4-configuration)
3. [Dark Mode & Theme Setup](#3-dark-mode--theme-setup)
4. [Component Usage Examples](#4-component-usage-examples)
   - [Core UI Primitives](#41-core-ui-primitives)
   - [Reusable Business Components](#42-reusable-business-components)
   - [Architectural Page Templates](#43-architectural-page-templates)
5. [Design Tokens & Semantic Rules](#5-design-tokens--semantic-rules)
6. [Cross-Repository Upgrades & Registration](#6-cross-repository-upgrades--registration)

---

## 1. Installation & Setup

Install `@amogads/ui` into your Next.js application from the public NPM registry:

```bash
npm install @amogads/ui
# or
pnpm add @amogads/ui
# or
yarn add @amogads/ui
```

### Peer Dependencies
Ensure your project has the required peer dependencies installed:
```json
{
  "dependencies": {
    "@amogads/ui": "^1.0.1",
    "next": "^14.0.0 || ^15.0.0 || ^16.0.0",
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "tailwindcss": "^4.0.0",
    "lucide-react": "^1.33.0"
  }
}
```

---

## 2. Tailwind CSS v4 Configuration

In your project's global stylesheet (e.g. `app/globals.css` or `src/styles/globals.css`), import Tailwind v4, the theme tokens, and the `@source` directive:

```css
@import "tailwindcss";
@import "@amogads/ui/theme.css";

/* ⚡ CRITICAL: Tell Tailwind v4 to scan package distribution files for utility classes */
@source "../node_modules/@amogads/ui/dist";

/* Custom dark mode variant */
@custom-variant dark (&:is(.dark, .dark *));

/* Base layer & scrollbar defaults */
@layer base {
  * {
    @apply border-border outline-ring/50;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }
  body {
    @apply min-h-svh w-full bg-background text-foreground;
  }
  button:not(:disabled),
  [role='button']:not(:disabled) {
    cursor: pointer;
  }
}
```

> **Note on `@source` path:**
> * If `globals.css` is in `app/globals.css` -> `@source "../node_modules/@amogads/ui/dist";`
> * If `globals.css` is in `src/styles/globals.css` -> `@source "../../node_modules/@amogads/ui/dist";`

---

## 3. Dark Mode & Theme Setup

In your root layout (`app/layout.tsx`), configure `next-themes` and font variables:

```tsx
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'My Application',
  description: 'Built with @amogads/ui',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={openSans.variable}>
      <body className={openSans.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## 4. Component Usage Examples

All tokens, primitives, business components, and templates are available directly from the top-level barrel export:

```tsx
import { ... } from '@amogads/ui'
```

---

### 4.1 Core UI Primitives

#### Buttons & Badges
```tsx
import { Button, Badge } from '@amogads/ui'

export function ActionSection() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Badge variant="secondary">In Review</Badge>
    </div>
  )
}
```

#### Cards & Dialogs
```tsx
'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Input,
  Label,
} from '@amogads/ui'

export function UserSettingsCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>Manage your public personal details.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Click edit to modify your username.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your username and save changes.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="john_doe" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

---

### 4.2 Reusable Business Components

#### PageHeader & StatusBadge
```tsx
import { PageHeader, StatusBadge, Button } from '@amogads/ui'
import { Plus } from 'lucide-react'

export function OrdersHeader() {
  return (
    <PageHeader
      title="Customer Orders"
      description="View, filter, and process inbound orders."
      actions={
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Order
        </Button>
      }
    >
      <div className="flex items-center gap-2">
        <StatusBadge status="success" dot pulse>
          Live Gateway
        </StatusBadge>
      </div>
    </PageHeader>
  )
}
```

#### MetricCard Grid
```tsx
import { MetricCard } from '@amogads/ui'

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <MetricCard
        title="Total Revenue"
        value="$124,500.00"
        change="+14.2% from last month"
        trend="up"
      />
      <MetricCard
        title="Active Users"
        value="1,420"
        change="+5.1% this week"
        trend="up"
      />
      <MetricCard
        title="Bounce Rate"
        value="2.4%"
        change="-0.8% decrease"
        trend="down"
      />
    </div>
  )
}
```

---

### 4.3 Architectural Page Templates

#### `ListTemplate` + `DataTable`
```tsx
'use client'

import { ListTemplate, DataTable, StatusBadge, Button, type ColumnDef } from '@amogads/ui'

interface Customer {
  id: string
  name: string
  email: string
  tier: string
  status: 'active' | 'suspended'
}

const columns: ColumnDef<Customer>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'tier', header: 'Subscription' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <StatusBadge status={row.original.status === 'active' ? 'success' : 'destructive'} dot>
        {row.original.status}
      </StatusBadge>
    ),
  },
]

const customers: Customer[] = [
  { id: '1', name: 'Alice Cooper', email: 'alice@example.com', tier: 'Enterprise', status: 'active' },
  { id: '2', name: 'Bob Marley', email: 'bob@example.com', tier: 'Starter', status: 'suspended' },
]

export default function CustomersPage() {
  return (
    <ListTemplate
      title="Customers"
      description="Manage registered organization accounts."
      actions={<Button>Add Customer</Button>}
      searchPlaceholder="Search by name or email..."
      onSearchChange={(q) => console.log('Searching:', q)}
    >
      <DataTable columns={columns} data={customers} />
    </ListTemplate>
  )
}
```

---

## 5. Design Tokens & Semantic Rules

Never use hardcoded hex values (`#ffffff`, `#1e293b`). Always use semantic Tailwind utility classes:

| Token Class | Role / Purpose |
|---|---|
| `bg-background`, `text-foreground` | Page body canvas & default text |
| `bg-card`, `text-card-foreground` | Cards, popovers, elevated surfaces |
| `bg-primary`, `text-primary-foreground` | Main action buttons, active badges |
| `bg-secondary`, `text-secondary-foreground` | Secondary action buttons |
| `bg-muted`, `text-muted-foreground` | Subtle labels, captions, disabled states |
| `border-border`, `border-input` | Component dividers and form outlines |
| `bg-success`, `text-success-foreground` | Approvals, active status, success toast |
| `bg-warning`, `text-warning-foreground` | Non-blocking alerts, cautions |
| `bg-destructive`, `text-destructive-foreground` | Deletions, critical error alerts |

---

## 6. Synchronizing `@amogads/ui` Updates with Consuming Apps (`amoganextapp`)

When changes are made to `@amogads/ui` inside `amogads`, follow this 3-step manual workflow to synchronize updates into `amoganextapp` (or any other consumer):

### 🔄 The 3-Step Synchronization Cycle

```
Step 1: Update & Publish amogads
  └─► Edit UI/tokens in amogads -> npm run build:package -> npm version patch -> npm publish

Step 2: Create Branch on Consumer App (amoganextapp)
  └─► git checkout -b chore/update-amogads-vX.Y.Z -> npm install @amogads/ui@latest -> npm run build

Step 3: Merge with Main
  └─► git checkout main -> git merge chore/update-amogads-vX.Y.Z -> git push origin main
```

---

### 💻 Step-by-Step Code Example

#### 1. In `amogads/` (Make changes and publish):
```bash
cd amogads

# 1. Modify component or token (e.g., src/design-system/components/ui/card.tsx)
# 2. Build the package bundle
npm run build:package

# 3. Bump version (e.g. 1.0.2 -> 1.0.3)
npm version patch

# 4. Publish to NPM
npm publish --access public
```

#### 2. In `amoganextapp/` (Create branch and adopt changes):
```bash
# Return to root of amoganextapp
cd ..

# 1. Create a fresh branch for this upgrade
git checkout -b chore/update-amogads-v1.0.3

# 2. Install the new package version from NPM
npm install @amogads/ui@latest

# 3. Verify locally
npm run dev
npm run build
```

#### 3. Merge branch into `main`:
```bash
# 1. Commit updated package.json & lockfile
git add package.json package-lock.json
git commit -m "chore(deps): update @amogads/ui to v1.0.3"

# 2. Merge to main branch
git checkout main
git merge chore/update-amogads-v1.0.3

# 3. Push to remote
git push origin main
```

---

### 🛡 Consumer Registry & Automation Status

Consuming applications are tracked in [`consumers-registry.json`](consumers-registry.json):
* `"automationStatus": "disabled"` *(Current Default)*: Background GitHub Action PR bots are paused. You have full manual control over when branches are created and merged in `amoganextapp`.
* `"automationStatus": "enabled"`: GitHub Actions automatically pushes branches and opens PRs on every release.

To inspect consumer version status:
```bash
npm run consumers:status
```

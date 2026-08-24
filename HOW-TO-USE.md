# Developer Integration & Usage Guide — `@mohdaman/ui`

Welcome to the developer guide for consuming **`@mohdaman/ui`** (Amoga Design System) in your Next.js and React applications.

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

Install `@mohdaman/ui` into your Next.js application from the public NPM registry:

```bash
npm install @mohdaman/ui
# or
pnpm add @mohdaman/ui
# or
yarn add @mohdaman/ui
```

### Peer Dependencies
Ensure your project has the required peer dependencies installed:
```json
{
  "dependencies": {
    "@mohdaman/ui": "^1.0.1",
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
@import "@mohdaman/ui/theme.css";

/* ⚡ CRITICAL: Tell Tailwind v4 to scan package distribution files for utility classes */
@source "../node_modules/@mohdaman/ui/dist";

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
> * If `globals.css` is in `app/globals.css` -> `@source "../node_modules/@mohdaman/ui/dist";`
> * If `globals.css` is in `src/styles/globals.css` -> `@source "../../node_modules/@mohdaman/ui/dist";`

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
  description: 'Built with @mohdaman/ui',
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
import { ... } from '@mohdaman/ui'
```

---

### 4.1 Core UI Primitives

#### Buttons & Badges
```tsx
import { Button, Badge } from '@mohdaman/ui'

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
} from '@mohdaman/ui'

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
import { PageHeader, StatusBadge, Button } from '@mohdaman/ui'
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
import { MetricCard } from '@mohdaman/ui'

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

import { ListTemplate, DataTable, StatusBadge, Button, type ColumnDef } from '@mohdaman/ui'

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

## 6. Cross-Repository Upgrades & Registration

AmogaDS features automated cross-repository dependency upgrades.

### Registering Your Application (One-Time Setup):
To have your application automatically receive version upgrade Pull Requests, add your repository entry to [`consumers-registry.json`](consumers-registry.json) in `amogads`:

```json
{
  "id": "my-app",
  "name": "My Next.js Application",
  "repository": "OrganizationOrOwner/my-app",
  "defaultBranch": "main",
  "packagePath": "package.json",
  "currentVersion": "1.0.1",
  "targetVersion": "1.0.1",
  "updateStatus": "up-to-date",
  "automationStatus": "enabled",
  "team": "@my-team"
}
```

### Checking Tracker Status:
Run from the `amogads/` directory:
```bash
npm run consumers:status
```

### Automatic Upgrades:
When a new `@mohdaman/ui` release is published and version bumped in `package.json`, GitHub Actions automatically:
1. Creates branch `chore/upgrade-amoga-ui-vX.Y.Z` in your repository.
2. Updates `package.json` to the new version.
3. Opens a detailed Pull Request on GitHub with safety verification and rollback instructions.

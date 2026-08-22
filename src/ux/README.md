# Amoga Design System — UX Documentation

Welcome to the **Amoga Design System (AmogaDS)** documentation repository.

## Architecture Boundaries

```
src/
├── design-system/
│   ├── tokens/               ← Theme CSS vars, SCSS primitive variables, animation keyframes
│   ├── components/
│   │   ├── ui/               ← Atomic shadcn/ui primitive components (Button, Input, Card, etc.)
│   │   └── business/         ← Multi-app reusable business components (ConfirmDialog, PasswordInput, etc.)
│   ├── templates/            ← Reusable layout templates (AppSidebar, NavUser, Header, Main, etc.)
│   └── index.ts              ← Unified Design System barrel export (@/design-system)
│
├── ux/                       ← Design rules, token specs, and usage guidelines
│
├── components/               ← Application-specific & single-app components (DocumentViewer, scanner, etc.)
│
└── features/                 ← Feature areas, gallery, previews, auth, message, dashboard, etc.
```

## Quick References

- [Design System Rules](./design-rules.md)
- [Token Specifications](./token-specifications.md)
- [Component Guidelines](./component-guidelines.md)

# AmogaDS — Component Guidelines

## Classification Matrix

### 1. Core UI Primitives (`@/design-system/components/ui/`)
- Atomic elements: `Button`, `Input`, `Card`, `Badge`, `Checkbox`, `Switch`, `Dialog`, `Sidebar`, `Tabs`, `Table`, etc.
- Multi-application agnostic. Zero business logic.

### 2. Business Components (`@/design-system/components/business/`)
- Reusable domain patterns: `ConfirmDialog`, `PasswordInput`, `SignOutDialog`, `ThemeSelector`, `ThemeSwitch`, `SelectDropdown`, `LongText`, `Search`, `Stats01`, `DatePicker`, `QRCodeDisplay`.
- Configurable via props; no direct coupling to specific backend endpoints.

### 3. Page Templates (`@/design-system/templates/`)
- Structural page layouts: `AuthenticatedLayout`, `AppSidebar`, `AppHeader`, `NavGroup`, `NavUser`, `TeamSwitcher`, `TopNav`, `Header`, `Main`.

### 4. Application / Feature Components (`src/components/`, `src/features/`)
- Feature-bound components: `DocumentViewer`, `scanner`, `dynamic-form`, `doc-converter-dialog`, `image-converter-dialog`, `MessageComponentGallery`, `Message`, `ai-chat`, `vouchers`, `map`, `dashboard`, `auth`.

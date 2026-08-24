'use client';

// src/design-system/tokens/index.ts
var SEMANTIC_TOKENS = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  popover: "var(--popover)",
  popoverForeground: "var(--popover-foreground)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  destructive: "var(--destructive)",
  destructiveForeground: "var(--destructive-foreground)",
  success: "var(--success)",
  successForeground: "var(--success-foreground)",
  warning: "var(--warning)",
  warningForeground: "var(--warning-foreground)",
  info: "var(--info)",
  infoForeground: "var(--info-foreground)",
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  radius: "var(--radius)",
  radiusSm: "var(--radius-sm)",
  radiusMd: "var(--radius-md)",
  radiusLg: "var(--radius-lg)",
  radiusXl: "var(--radius-xl)"
};
var CHART_TOKENS = {
  chart1: "var(--chart-1)",
  chart2: "var(--chart-2)",
  chart3: "var(--chart-3)",
  chart4: "var(--chart-4)",
  chart5: "var(--chart-5)"
};
var SIDEBAR_TOKENS = {
  sidebar: "var(--sidebar)",
  sidebarForeground: "var(--sidebar-foreground)",
  sidebarPrimary: "var(--sidebar-primary)",
  sidebarPrimaryForeground: "var(--sidebar-primary-foreground)",
  sidebarAccent: "var(--sidebar-accent)",
  sidebarAccentForeground: "var(--sidebar-accent-foreground)",
  sidebarBorder: "var(--sidebar-border)",
  sidebarRing: "var(--sidebar-ring)"
};

// src/design-system/components/ui/accordion.tsx
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/design-system/components/ui/accordion.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/design-system/components/ui/alert-dialog.tsx
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";

// src/design-system/components/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/design-system/components/ui/alert-dialog.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxs2(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx3(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx3(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-size": size,
        className: cn(
          "group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      ),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      ),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function AlertDialogMedia({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: cn(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className
      ),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx3(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Action,
    {
      "data-slot": "alert-dialog-action",
      className: cn(className),
      ...props
    }
  ) });
}
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx3(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ) });
}

// src/design-system/components/ui/alert.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var alertVariants = cva2(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/aspect-ratio.tsx
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";
import { jsx as jsx5 } from "react/jsx-runtime";
function AspectRatio({
  ...props
}) {
  return /* @__PURE__ */ jsx5(AspectRatioPrimitive.Root, { "data-slot": "aspect-ratio", ...props });
}

// src/design-system/components/ui/avatar.tsx
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx6 } from "react/jsx-runtime";
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AvatarBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "span",
    {
      "data-slot": "avatar-badge",
      className: cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "avatar-group",
      className: cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      ),
      ...props
    }
  );
}
function AvatarGroupCount({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { Slot as Slot2 } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "span";
  return /* @__PURE__ */ jsx7(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/design-system/components/ui/breadcrumb.tsx
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot as Slot3 } from "radix-ui";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx8("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "a";
  return /* @__PURE__ */ jsx8(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx8(ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx8(MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ jsx8("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// src/design-system/components/ui/button-group.tsx
import { cva as cva4 } from "class-variance-authority";
import { Slot as Slot4 } from "radix-ui";

// src/design-system/components/ui/separator.tsx
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx9 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/button-group.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var buttonGroupVariants = cva4(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup({
  className,
  orientation,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(buttonGroupVariants({ orientation }), className),
      ...props
    }
  );
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot4.Root : "div";
  return /* @__PURE__ */ jsx10(
    Comp,
    {
      className: cn(
        "flex items-center gap-2 rounded-md border bg-muted px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    Separator,
    {
      "data-slot": "button-group-separator",
      orientation,
      className: cn(
        "relative m-0! self-stretch bg-input data-[orientation=vertical]:h-auto",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/calendar.tsx
import * as React from "react";
import {
  ChevronDownIcon as ChevronDownIcon2,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames
} from "react-day-picker";
import { jsx as jsx11 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx11(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx11(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx11(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx11(
              ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsx11(ChevronDownIcon2, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx11("td", { ...props2, children: /* @__PURE__ */ jsx11("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx11(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/card.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/design-system/components/ui/carousel.tsx
import * as React2 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
var CarouselContext = React2.createContext(null);
function useCarousel() {
  const context = React2.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React2.useState(false);
  const [canScrollNext, setCanScrollNext] = React2.useState(false);
  const onSelect = React2.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React2.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React2.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React2.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React2.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React2.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx13(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx13(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx13(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx13(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx13(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs4(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx13(ArrowLeft, {}),
        /* @__PURE__ */ jsx13("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs4(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx13(ArrowRight, {}),
        /* @__PURE__ */ jsx13("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}

// src/design-system/components/ui/chart.tsx
import * as React3 from "react";
import * as RechartsPrimitive from "recharts";
import { Fragment, jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
var THEMES = { light: "", dark: ".dark" };
var INITIAL_DIMENSION = { width: 320, height: 200 };
var ChartContext = React3.createContext(null);
function useChart() {
  const context = React3.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}) {
  const uniqueId = React3.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx14(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs5(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx14(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx14(
          RechartsPrimitive.ResponsiveContainer,
          {
            initialDimension,
            children
          }
        )
      ]
    }
  ) });
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme ?? config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] ?? itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React3.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label ?? label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx14("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx14("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx14("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color ?? item.payload?.fill ?? item.color;
          return /* @__PURE__ */ jsx14(
            "div",
            {
              className: cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs5(Fragment, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx14(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx14(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs5(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs5("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx14("span", { className: "text-muted-foreground", children: itemConfig?.label ?? item.name })
                      ] }),
                      item.value != null && /* @__PURE__ */ jsx14("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof item.value === "number" ? item.value.toLocaleString() : String(item.value) })
                    ]
                  }
                )
              ] })
            },
            index
          );
        }) })
      ]
    }
  );
}
var ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item, index) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs5(
          "div",
          {
            className: cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx14(itemConfig.icon, {}) : /* @__PURE__ */ jsx14(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          index
        );
      })
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// src/design-system/components/ui/chart-demos.tsx
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from "recharts";
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
var areaData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var lineData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" }
];
var chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))"
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))"
  }
};
var pieChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" }
};
function AreaChartDemo({ className }) {
  return /* @__PURE__ */ jsx15(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ jsxs6(
    AreaChart,
    {
      accessibilityLayer: true,
      data: areaData,
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ jsx15(CartesianGrid, { vertical: false }),
        /* @__PURE__ */ jsx15(
          XAxis,
          {
            dataKey: "month",
            tickLine: false,
            axisLine: false,
            tickMargin: 8,
            tickFormatter: (value) => value.slice(0, 3)
          }
        ),
        /* @__PURE__ */ jsx15(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsx15(ChartTooltipContent, {}) }),
        /* @__PURE__ */ jsx15(
          Area,
          {
            dataKey: "desktop",
            type: "natural",
            fill: "var(--color-desktop)",
            fillOpacity: 0.4,
            stroke: "var(--color-desktop)",
            stackId: "a"
          }
        ),
        /* @__PURE__ */ jsx15(
          Area,
          {
            dataKey: "mobile",
            type: "natural",
            fill: "var(--color-mobile)",
            fillOpacity: 0.4,
            stroke: "var(--color-mobile)",
            stackId: "a"
          }
        )
      ]
    }
  ) });
}
function BarChartDemo({ className }) {
  return /* @__PURE__ */ jsx15(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ jsxs6(BarChart, { accessibilityLayer: true, data: barData, children: [
    /* @__PURE__ */ jsx15(CartesianGrid, { vertical: false }),
    /* @__PURE__ */ jsx15(
      XAxis,
      {
        dataKey: "month",
        tickLine: false,
        tickMargin: 10,
        axisLine: false,
        tickFormatter: (value) => value.slice(0, 3)
      }
    ),
    /* @__PURE__ */ jsx15(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsx15(ChartTooltipContent, { indicator: "dashed" }) }),
    /* @__PURE__ */ jsx15(Bar, { dataKey: "desktop", fill: "var(--color-desktop)", radius: 4 }),
    /* @__PURE__ */ jsx15(Bar, { dataKey: "mobile", fill: "var(--color-mobile)", radius: 4 })
  ] }) });
}
function LineChartDemo({ className }) {
  return /* @__PURE__ */ jsx15(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ jsxs6(
    LineChart,
    {
      accessibilityLayer: true,
      data: lineData,
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ jsx15(CartesianGrid, { vertical: false }),
        /* @__PURE__ */ jsx15(
          XAxis,
          {
            dataKey: "month",
            tickLine: false,
            axisLine: false,
            tickMargin: 8,
            tickFormatter: (value) => value.slice(0, 3)
          }
        ),
        /* @__PURE__ */ jsx15(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsx15(ChartTooltipContent, {}) }),
        /* @__PURE__ */ jsx15(
          Line,
          {
            dataKey: "desktop",
            type: "monotone",
            stroke: "var(--color-desktop)",
            strokeWidth: 2,
            dot: false
          }
        ),
        /* @__PURE__ */ jsx15(
          Line,
          {
            dataKey: "mobile",
            type: "monotone",
            stroke: "var(--color-mobile)",
            strokeWidth: 2,
            dot: false
          }
        )
      ]
    }
  ) });
}
function PieChartDemo({ className }) {
  return /* @__PURE__ */ jsx15(ChartContainer, { config: pieChartConfig, className, children: /* @__PURE__ */ jsxs6(PieChart, { children: [
    /* @__PURE__ */ jsx15(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsx15(ChartTooltipContent, { hideLabel: true }) }),
    /* @__PURE__ */ jsx15(
      Pie,
      {
        data: pieData,
        dataKey: "visitors",
        nameKey: "browser",
        innerRadius: 60,
        strokeWidth: 5
      }
    )
  ] }) });
}

// src/design-system/components/ui/checkbox.tsx
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx16 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx16(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx16(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/design-system/components/ui/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx17 } from "react/jsx-runtime";
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx17(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// src/design-system/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/design-system/components/ui/dialog.tsx
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx18, jsxs as jsxs7 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx18(DialogOverlay, {}),
    /* @__PURE__ */ jsxs7(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs7(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx18(XIcon, {}),
                /* @__PURE__ */ jsx18("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx18(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx18(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/command.tsx
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive,
    {
      "data-slot": "command",
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs8(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx19(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx19(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx19(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx19(Command, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx19(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx19(
          CommandPrimitive.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive.Separator,
    {
      "data-slot": "command-separator",
      className: cn("-mx-1 h-px bg-border", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    CommandPrimitive.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/context-menu.tsx
import { CheckIcon as CheckIcon2, ChevronRightIcon as ChevronRightIcon2, CircleIcon } from "lucide-react";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    ContextMenuPrimitive.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx20(ChevronRightIcon2, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    ContextMenuPrimitive.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx20("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(CheckIcon2, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    ContextMenuPrimitive.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx20("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    ContextMenuPrimitive.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/date-picker.tsx
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

// src/design-system/components/ui/popover.tsx
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx21 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx21(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx21(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx21(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx21(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsx21(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-1 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      "data-slot": "popover-title",
      className: cn("font-medium", className),
      ...props
    }
  );
}
function PopoverDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/date-picker.tsx
import { forwardRef } from "react";
import { jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
var DatePicker = forwardRef(function DatePickerCmp({ date, setDate }, ref) {
  return /* @__PURE__ */ jsxs10(Popover, { children: [
    /* @__PURE__ */ jsx22(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs10(
      Button,
      {
        variant: "outline",
        className: cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx22(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          date ? format(date, "PPP") : /* @__PURE__ */ jsx22("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx22(PopoverContent, { className: "w-auto p-0", ref, children: /* @__PURE__ */ jsx22(
      Calendar,
      {
        mode: "single",
        selected: date,
        onSelect: setDate
      }
    ) })
  ] });
});

// src/design-system/components/ui/drawer.tsx
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx23(DrawerPrimitive.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx23(DrawerPrimitive.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx23(DrawerPrimitive.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx23(DrawerPrimitive.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    DrawerPrimitive.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs11(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx23(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs11(
      DrawerPrimitive.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx23("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx23(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx23(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    DrawerPrimitive.Title,
    {
      "data-slot": "drawer-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    DrawerPrimitive.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/dropdown-menu.tsx
import { CheckIcon as CheckIcon3, ChevronRightIcon as ChevronRightIcon3, CircleIcon as CircleIcon2 } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { jsx as jsx24, jsxs as jsxs12 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx24(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx24(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx24(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx24(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs12(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx24("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx24(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx24(CheckIcon3, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs12(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx24("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx24(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx24(CircleIcon2, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx24(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs12(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx24(ChevronRightIcon3, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/empty.tsx
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx25 } from "react/jsx-runtime";
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty-header",
      className: cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      ),
      ...props
    }
  );
}
var emptyMediaVariants = cva5(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      "data-slot": "empty-content",
      className: cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/field.tsx
import { useMemo as useMemo2 } from "react";
import { cva as cva6 } from "class-variance-authority";

// src/design-system/components/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx26 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/field.tsx
import { jsx as jsx27, jsxs as jsxs13 } from "react/jsx-runtime";
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      ),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      ),
      ...props
    }
  );
}
var fieldVariants = cva6(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "data-slot": "field-content",
      className: cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      ),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "data-slot": "field-label",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      ),
      ...props
    }
  );
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "p",
    {
      "data-slot": "field-description",
      className: cn(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx27(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ jsx27(
          "span",
          {
            className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
            "data-slot": "field-separator-content",
            children
          }
        )
      ]
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo2(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsx27("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsx27("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx27(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-sm font-normal text-destructive", className),
      ...props,
      children: content
    }
  );
}

// src/design-system/components/ui/form.tsx
import * as React4 from "react";
import { Slot as Slot5 } from "radix-ui";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";
import { jsx as jsx28 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React4.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx28(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx28(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React4.useContext(FormFieldContext);
  const itemContext = React4.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React4.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React4.useId();
  return /* @__PURE__ */ jsx28(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx28(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx28(
    Slot5.Root,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx28(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx28(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-sm text-destructive", className),
      ...props,
      children: body
    }
  );
}

// src/design-system/components/ui/hover-card.tsx
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx29 } from "react/jsx-runtime";
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ jsx29(HoverCardPrimitive.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx29(HoverCardPrimitive.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx29(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsx29(
    HoverCardPrimitive.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}

// src/design-system/components/ui/input.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx30(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/input-group.tsx
import { cva as cva7 } from "class-variance-authority";

// src/design-system/components/ui/textarea.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/input-group.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = cva7(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = cva7(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
    "span",
    {
      className: cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/input-otp.tsx
import * as React5 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs14 } from "react/jsx-runtime";
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx33(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React5.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx33("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx33("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx33("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ jsx33(MinusIcon, {}) });
}

// src/design-system/components/ui/item.tsx
import { cva as cva8 } from "class-variance-authority";
import { Slot as Slot6 } from "radix-ui";
import { jsx as jsx34 } from "react/jsx-runtime";
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: cn("group/item-group flex flex-col", className),
      ...props
    }
  );
}
function ItemSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34(
    Separator,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: cn("my-0", className),
      ...props
    }
  );
}
var itemVariants = cva8(
  "group/item flex flex-wrap items-center rounded-md border border-transparent text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-accent/50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "div";
  return /* @__PURE__ */ jsx34(
    Comp,
    {
      "data-slot": "item",
      "data-variant": variant,
      "data-size": size,
      className: cn(itemVariants({ variant, size, className })),
      ...props
    }
  );
}
var itemMediaVariants = cva8(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": variant,
      className: cn(itemMediaVariants({ variant, className })),
      ...props
    }
  );
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-content",
      className: cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      ),
      ...props
    }
  );
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-title",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      ),
      ...props
    }
  );
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "p",
    {
      "data-slot": "item-description",
      className: cn(
        "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-actions",
      className: cn("flex items-center gap-2", className),
      ...props
    }
  );
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-header",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props
    }
  );
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "item-footer",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/kbd.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "kbd",
    {
      "data-slot": "kbd",
      className: cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}

// src/design-system/components/ui/menubar.tsx
import { CheckIcon as CheckIcon4, ChevronRightIcon as ChevronRightIcon4, CircleIcon as CircleIcon3 } from "lucide-react";
import { Menubar as MenubarPrimitive } from "radix-ui";
import { jsx as jsx36, jsxs as jsxs15 } from "react/jsx-runtime";
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.Root,
    {
      "data-slot": "menubar",
      className: cn(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        className
      ),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPrimitive.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPrimitive.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPrimitive.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPrimitive.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: cn(
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPortal, { children: /* @__PURE__ */ jsx36(
    MenubarPrimitive.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    MenubarPrimitive.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx36("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx36(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx36(CheckIcon4, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    MenubarPrimitive.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx36("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx36(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx36(CircleIcon3, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.Separator,
    {
      "data-slot": "menubar-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsx36(MenubarPrimitive.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    MenubarPrimitive.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx36(ChevronRightIcon4, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    MenubarPrimitive.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/navigation-menu.tsx
import { cva as cva9 } from "class-variance-authority";
import { ChevronDownIcon as ChevronDownIcon3 } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { jsx as jsx37, jsxs as jsxs16 } from "react/jsx-runtime";
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx37(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = cva9(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx37(
          ChevronDownIcon3,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx37(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    NavigationMenuPrimitive.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx37("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}

// src/design-system/components/ui/pagination.tsx
import {
  ChevronLeftIcon as ChevronLeftIcon2,
  ChevronRightIcon as ChevronRightIcon5,
  MoreHorizontalIcon
} from "lucide-react";
import { jsx as jsx38, jsxs as jsxs17 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx38(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx38("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx38(ChevronLeftIcon2, {}),
        /* @__PURE__ */ jsx38("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function PaginationNext({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx38("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ jsx38(ChevronRightIcon5, {})
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx38(MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsx38("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}

// src/design-system/components/ui/progress.tsx
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx39 } from "react/jsx-runtime";
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx39(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx39(
        ProgressPrimitive.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}

// src/design-system/components/ui/radio-group.tsx
import { CircleIcon as CircleIcon4 } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx40 } from "react/jsx-runtime";
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx40(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx40(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx40(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx40(CircleIcon4, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
        }
      )
    }
  );
}

// src/design-system/components/ui/resizable.tsx
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { jsx as jsx41 } from "react/jsx-runtime";
function ResizablePanelGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    ResizablePrimitive.Group,
    {
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
}
function ResizablePanel({ ...props }) {
  return /* @__PURE__ */ jsx41(ResizablePrimitive.Panel, { "data-slot": "resizable-panel", ...props });
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    ResizablePrimitive.Separator,
    {
      "data-slot": "resizable-handle",
      className: cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      ),
      ...props,
      children: withHandle && /* @__PURE__ */ jsx41("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border", children: /* @__PURE__ */ jsx41(GripVerticalIcon, { className: "size-2.5" }) })
    }
  );
}

// src/design-system/components/ui/scroll-area.tsx
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx42, jsxs as jsxs18 } from "react/jsx-runtime";
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx42(
          ScrollAreaPrimitive.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx42(ScrollBar, {}),
        /* @__PURE__ */ jsx42(ScrollAreaPrimitive.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx42(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}

// src/design-system/components/ui/select.tsx
import { CheckIcon as CheckIcon5, ChevronDownIcon as ChevronDownIcon4, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx43, jsxs as jsxs19 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx43(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx43(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx43(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs19(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx43(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx43(ChevronDownIcon4, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx43(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs19(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx43(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx43(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx43(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 text-xs text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs19(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx43(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsx43(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx43(CheckIcon5, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ jsx43(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx43(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx43(ChevronDownIcon4, { className: "size-4" })
    }
  );
}

// src/design-system/components/ui/sheet.tsx
import { XIcon as XIcon2 } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { jsx as jsx44, jsxs as jsxs20 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx44(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx44(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx44(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx44(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs20(SheetPortal, { children: [
    /* @__PURE__ */ jsx44(SheetOverlay, {}),
    /* @__PURE__ */ jsxs20(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs20(SheetPrimitive.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsx44(XIcon2, { className: "size-4" }),
            /* @__PURE__ */ jsx44("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx44(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx44(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/sidebar.tsx
import * as React7 from "react";
import { cva as cva10 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { Slot as Slot7 } from "radix-ui";

// src/hooks/use-mobile.tsx
import * as React6 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React6.useState(void 0);
  React6.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/design-system/components/ui/skeleton.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-accent", className),
      ...props
    }
  );
}

// src/design-system/components/ui/tooltip.tsx
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx46, jsxs as jsxs21 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip2({
  ...props
}) {
  return /* @__PURE__ */ jsx46(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx46(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx46(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs21(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx46(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

// src/design-system/components/ui/sidebar.tsx
import { jsx as jsx47, jsxs as jsxs22 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "13rem";
var SIDEBAR_WIDTH_MOBILE = "15rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React7.createContext(null);
function useSidebar() {
  const context = React7.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React7.useState(false);
  const [_open, _setOpen] = React7.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React7.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React7.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React7.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React7.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx47(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx47(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx47(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx47(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs22(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs22(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx47(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx47(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx47("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx47(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx47(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx47(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs22(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx47(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx47(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("h-8 w-full bg-background shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot7.Root : "div";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot7.Root : "button";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = cva10(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot7.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs22(Tooltip2, { children: [
    /* @__PURE__ */ jsx47(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx47(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot7.Root : "button";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React7.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx47(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx47(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot7.Root : "a";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/slider.tsx
import * as React8 from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { jsx as jsx48, jsxs as jsxs23 } from "react/jsx-runtime";
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React8.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxs23(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx48(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsx48(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx48(
          SliderPrimitive.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}

// src/design-system/components/ui/sonner.tsx
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx49 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx49(
    Sonner,
    {
      theme,
      className: "toaster group",
      closeButton: true,
      toastOptions: {
        classNames: {
          closeButton: "!left-auto !right-2.5 !top-2.5 !transform-none !bg-transparent !border-none !shadow-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-0.5 rounded-xs hover:bg-muted/50"
        }
      },
      icons: {
        success: /* @__PURE__ */ jsx49(CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ jsx49(InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx49(TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ jsx49(OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx49(Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};

// src/design-system/components/ui/spinner.tsx
import { Loader2Icon as Loader2Icon2 } from "lucide-react";
import { jsx as jsx50 } from "react/jsx-runtime";
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx50(
    Loader2Icon2,
    {
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}

// src/design-system/components/ui/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx51 } from "react/jsx-runtime";
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx51(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx51(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}

// src/design-system/components/ui/table.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx52(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx52(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx52(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/tabs.tsx
import { cva as cva11 } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx53 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = cva11(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/design-system/components/ui/toggle.tsx
import { cva as cva12 } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx54 } from "react/jsx-runtime";
var toggleVariants = cva12(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    TogglePrimitive.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/design-system/components/ui/toggle-group.tsx
import * as React9 from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { jsx as jsx55 } from "react/jsx-runtime";
var ToggleGroupContext = React9.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ToggleGroupPrimitive.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      style: { "--gap": spacing },
      className: cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx55(ToggleGroupContext.Provider, { value: { variant, size, spacing }, children })
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React9.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx55(
    ToggleGroupPrimitive.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      "data-spacing": context.spacing,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      ),
      ...props,
      children
    }
  );
}

// src/design-system/components/business/page-header.tsx
import { jsx as jsx56, jsxs as jsxs24 } from "react/jsx-runtime";
function PageHeader({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 pb-4 md:pb-6",
        className
      ),
      ...props,
      children: [
        breadcrumbs && /* @__PURE__ */ jsx56("div", { className: "text-sm text-muted-foreground", children: breadcrumbs }),
        /* @__PURE__ */ jsxs24("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxs24("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsx56("h1", { className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: title }),
              badge && /* @__PURE__ */ jsx56("div", { children: badge })
            ] }),
            description && /* @__PURE__ */ jsx56("p", { className: "text-sm text-muted-foreground sm:text-base", children: description })
          ] }),
          actions && /* @__PURE__ */ jsx56("div", { className: "flex flex-wrap items-center gap-2 md:self-center", children: actions })
        ] }),
        children
      ]
    }
  );
}

// src/design-system/components/business/data-table.tsx
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx57, jsxs as jsxs25 } from "react/jsx-runtime";
function DataTable({
  columns,
  data: data2,
  isLoading = false,
  loadingRowCount = 5,
  emptyTitle = "No data found",
  emptyDescription = "There are no records matching your criteria.",
  emptyIcon,
  onRowClick,
  keyExtractor,
  pagination,
  className
}) {
  const totalPages = pagination ? Math.max(1, Math.ceil(pagination.totalCount / pagination.pageSize)) : 1;
  return /* @__PURE__ */ jsxs25("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsx57("div", { className: "rounded-md border bg-card", children: /* @__PURE__ */ jsxs25(Table, { children: [
      /* @__PURE__ */ jsx57(TableHeader, { children: /* @__PURE__ */ jsx57(TableRow, { children: columns.map((col) => /* @__PURE__ */ jsx57(TableHead, { className: col.headerClassName, children: col.header }, col.key)) }) }),
      /* @__PURE__ */ jsx57(TableBody, { children: isLoading ? Array.from({ length: loadingRowCount }).map((_, rIdx) => /* @__PURE__ */ jsx57(TableRow, { children: columns.map((col) => /* @__PURE__ */ jsx57(TableCell, { className: col.className, children: /* @__PURE__ */ jsx57(Skeleton, { className: "h-5 w-full max-w-[160px]" }) }, `loading-${rIdx}-${col.key}`)) }, `loading-${rIdx}`)) : data2.length === 0 ? /* @__PURE__ */ jsx57(TableRow, { children: /* @__PURE__ */ jsx57(TableCell, { colSpan: columns.length, className: "h-48 text-center", children: /* @__PURE__ */ jsx57(Empty, { className: "py-6", children: /* @__PURE__ */ jsxs25(EmptyHeader, { children: [
        emptyIcon && /* @__PURE__ */ jsx57(EmptyMedia, { children: emptyIcon }),
        /* @__PURE__ */ jsx57(EmptyTitle, { children: emptyTitle }),
        /* @__PURE__ */ jsx57(EmptyDescription, { children: emptyDescription })
      ] }) }) }) }) : data2.map((row, rIdx) => {
        const key = keyExtractor ? keyExtractor(row, rIdx) : rIdx;
        return /* @__PURE__ */ jsx57(
          TableRow,
          {
            onClick: onRowClick ? () => onRowClick(row) : void 0,
            className: cn(
              onRowClick && "cursor-pointer hover:bg-muted/50 transition-colors"
            ),
            children: columns.map((col) => /* @__PURE__ */ jsx57(TableCell, { className: col.className, children: col.cell ? col.cell(row, rIdx) : row[col.key] ?? "\u2014" }, `${key}-${col.key}`))
          },
          key
        );
      }) })
    ] }) }),
    pagination && /* @__PURE__ */ jsxs25("div", { className: "flex items-center justify-between px-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs25("div", { children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsx57("span", { className: "font-medium text-foreground", children: data2.length > 0 ? pagination.pageIndex * pagination.pageSize + 1 : 0 }),
        " ",
        "to",
        " ",
        /* @__PURE__ */ jsx57("span", { className: "font-medium text-foreground", children: Math.min(
          (pagination.pageIndex + 1) * pagination.pageSize,
          pagination.totalCount
        ) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ jsx57("span", { className: "font-medium text-foreground", children: pagination.totalCount }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ jsxs25("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs25(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: pagination.pageIndex <= 0 || isLoading,
            onClick: () => pagination.onPageChange(pagination.pageIndex - 1),
            children: [
              /* @__PURE__ */ jsx57(ChevronLeft, { className: "mr-1 h-4 w-4" }),
              "Previous"
            ]
          }
        ),
        /* @__PURE__ */ jsxs25("span", { className: "text-xs", children: [
          "Page ",
          pagination.pageIndex + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxs25(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: pagination.pageIndex + 1 >= totalPages || isLoading,
            onClick: () => pagination.onPageChange(pagination.pageIndex + 1),
            children: [
              "Next",
              /* @__PURE__ */ jsx57(ChevronRight2, { className: "ml-1 h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}

// src/design-system/components/business/status-badge.tsx
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx58, jsxs as jsxs26 } from "react/jsx-runtime";
var statusBadgeVariants = cva13(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      status: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-border",
        success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
        warning: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
        info: "bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30",
        destructive: "bg-destructive/15 text-destructive border border-destructive/30",
        outline: "text-foreground border border-border bg-transparent"
      },
      size: {
        sm: "px-2 py-0.25 text-[11px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      status: "default",
      size: "default"
    }
  }
);
var dotColorMap = {
  default: "bg-primary",
  secondary: "bg-secondary-foreground",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  info: "bg-sky-500",
  destructive: "bg-destructive",
  outline: "bg-foreground"
};
function StatusBadge({
  status = "default",
  size = "default",
  dot = false,
  pulse = false,
  icon,
  className,
  children,
  ...props
}) {
  const activeStatus = status || "default";
  return /* @__PURE__ */ jsxs26(
    "div",
    {
      className: cn(statusBadgeVariants({ status, size }), className),
      ...props,
      children: [
        dot && /* @__PURE__ */ jsxs26("span", { className: "relative flex h-2 w-2", children: [
          pulse && /* @__PURE__ */ jsx58(
            "span",
            {
              className: cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                dotColorMap[activeStatus] || "bg-primary"
              )
            }
          ),
          /* @__PURE__ */ jsx58(
            "span",
            {
              className: cn(
                "relative inline-flex h-2 w-2 rounded-full",
                dotColorMap[activeStatus] || "bg-primary"
              )
            }
          )
        ] }),
        icon && /* @__PURE__ */ jsx58("span", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ jsx58("span", { children })
      ]
    }
  );
}

// src/design-system/components/business/filter-bar.tsx
import { Search as SearchIcon2, X } from "lucide-react";
import { jsx as jsx59, jsxs as jsxs27 } from "react/jsx-runtime";
function FilterBar({
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  filters,
  activeFilters = [],
  onClearAll,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs27("div", { className: cn("flex flex-col gap-3", className), children: [
    /* @__PURE__ */ jsxs27("div", { className: "flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs27("div", { className: "flex flex-1 flex-wrap items-center gap-2", children: [
        onSearchChange && /* @__PURE__ */ jsxs27("div", { className: "relative w-full sm:w-64 md:w-80", children: [
          /* @__PURE__ */ jsx59(SearchIcon2, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx59(
            Input,
            {
              placeholder: searchPlaceholder,
              value: searchValue ?? "",
              onChange: (e) => onSearchChange(e.target.value),
              className: "pl-8"
            }
          )
        ] }),
        filters
      ] }),
      actions && /* @__PURE__ */ jsx59("div", { className: "flex items-center gap-2 shrink-0", children: actions })
    ] }),
    activeFilters.length > 0 && /* @__PURE__ */ jsxs27("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
      /* @__PURE__ */ jsx59("span", { className: "text-xs font-medium text-muted-foreground", children: "Active filters:" }),
      activeFilters.map((filter) => /* @__PURE__ */ jsxs27(
        Badge,
        {
          variant: "secondary",
          className: "gap-1 pr-1 text-xs",
          children: [
            /* @__PURE__ */ jsxs27("span", { children: [
              filter.label,
              ":"
            ] }),
            /* @__PURE__ */ jsx59("span", { className: "font-normal text-foreground", children: filter.value }),
            /* @__PURE__ */ jsx59(
              "button",
              {
                type: "button",
                onClick: filter.onRemove,
                className: "rounded-full p-0.5 hover:bg-muted-foreground/20",
                "aria-label": `Remove filter ${filter.label}`,
                children: /* @__PURE__ */ jsx59(X, { className: "h-3 w-3" })
              }
            )
          ]
        },
        filter.key
      )),
      onClearAll && /* @__PURE__ */ jsx59(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: onClearAll,
          className: "h-6 px-2 text-xs text-muted-foreground hover:text-foreground",
          children: "Clear all"
        }
      )
    ] })
  ] });
}

// src/design-system/components/business/form-section.tsx
import { jsx as jsx60, jsxs as jsxs28 } from "react/jsx-runtime";
function FormSection({
  title,
  description,
  actions,
  separator = true,
  columns = 1,
  className,
  children,
  ...props
}) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns];
  return /* @__PURE__ */ jsxs28("div", { className: cn("space-y-4 py-2", className), ...props, children: [
    /* @__PURE__ */ jsxs28("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs28("div", { children: [
        /* @__PURE__ */ jsx60("h2", { className: "text-base font-semibold text-foreground sm:text-lg", children: title }),
        description && /* @__PURE__ */ jsx60("p", { className: "text-xs text-muted-foreground sm:text-sm", children: description })
      ] }),
      actions && /* @__PURE__ */ jsx60("div", { className: "flex items-center gap-2 pt-2 sm:pt-0", children: actions })
    ] }),
    separator && /* @__PURE__ */ jsx60(Separator, {}),
    /* @__PURE__ */ jsx60("div", { className: cn("grid gap-4 sm:gap-6", gridColsClass), children })
  ] });
}

// src/design-system/components/business/metric-card.tsx
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { jsx as jsx61, jsxs as jsxs29 } from "react/jsx-runtime";
function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  change,
  footer,
  className,
  ...props
}) {
  const trendColor = change?.trend === "up" ? "text-emerald-600 dark:text-emerald-400" : change?.trend === "down" ? "text-rose-600 dark:text-rose-400" : "text-muted-foreground";
  return /* @__PURE__ */ jsxs29(Card, { className: cn("overflow-hidden shadow-xs transition-shadow hover:shadow-md", className), ...props, children: [
    /* @__PURE__ */ jsxs29(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ jsx61(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: title }),
      Icon && /* @__PURE__ */ jsx61("div", { className: "rounded-md bg-muted p-2 text-muted-foreground", children: typeof Icon === "function" ? /* @__PURE__ */ jsx61(Icon, { className: "h-4 w-4" }) : Icon })
    ] }),
    /* @__PURE__ */ jsxs29(CardContent, { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx61("div", { className: "text-2xl font-bold tracking-tight text-foreground", children: value }),
      (change || description) && /* @__PURE__ */ jsxs29("div", { className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground", children: [
        change && /* @__PURE__ */ jsxs29("span", { className: cn("inline-flex items-center font-medium", trendColor), children: [
          change.trend === "up" && /* @__PURE__ */ jsx61(ArrowUpRight, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.trend === "down" && /* @__PURE__ */ jsx61(ArrowDownRight, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.trend === "neutral" && /* @__PURE__ */ jsx61(Minus, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.value
        ] }),
        change?.label && /* @__PURE__ */ jsx61("span", { children: change.label }),
        !change && description && /* @__PURE__ */ jsx61("span", { children: description })
      ] }),
      footer && /* @__PURE__ */ jsx61("div", { className: "pt-2", children: footer })
    ] })
  ] });
}

// src/design-system/components/business/confirm-dialog.tsx
import { jsx as jsx62, jsxs as jsxs30 } from "react/jsx-runtime";
function ConfirmDialog(props) {
  const {
    title,
    desc,
    children,
    className,
    confirmText,
    cancelBtnText,
    destructive,
    isLoading,
    disabled = false,
    form,
    handleConfirm,
    ...actions
  } = props;
  return /* @__PURE__ */ jsx62(AlertDialog, { ...actions, children: /* @__PURE__ */ jsxs30(AlertDialogContent, { className: cn(className && className), children: [
    /* @__PURE__ */ jsxs30(AlertDialogHeader, { className: "text-start", children: [
      /* @__PURE__ */ jsx62(AlertDialogTitle, { children: title }),
      /* @__PURE__ */ jsx62(AlertDialogDescription, { asChild: true, children: /* @__PURE__ */ jsx62("div", { children: desc }) })
    ] }),
    children,
    /* @__PURE__ */ jsxs30(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsx62(AlertDialogCancel, { disabled: isLoading, children: cancelBtnText ?? "Cancel" }),
      /* @__PURE__ */ jsx62(
        Button,
        {
          type: form ? "submit" : "button",
          form,
          onClick: handleConfirm,
          variant: destructive ? "destructive" : "default",
          disabled: disabled || isLoading,
          children: confirmText ?? "Continue"
        }
      )
    ] })
  ] }) });
}

// src/design-system/components/business/password-input.tsx
import * as React10 from "react";
import { Eye, EyeOff } from "lucide-react";
import { jsx as jsx63, jsxs as jsxs31 } from "react/jsx-runtime";
function PasswordInput({
  className,
  disabled,
  ref,
  ...props
}) {
  const [showPassword, setShowPassword] = React10.useState(false);
  return /* @__PURE__ */ jsxs31("div", { className: cn("relative rounded-md", className), children: [
    /* @__PURE__ */ jsx63(
      "input",
      {
        type: showPassword ? "text" : "password",
        className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        ref,
        disabled,
        ...props
      }
    ),
    /* @__PURE__ */ jsxs31(
      Button,
      {
        type: "button",
        size: "icon",
        variant: "ghost",
        disabled,
        className: "absolute inset-e-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground",
        onClick: () => setShowPassword((prev) => !prev),
        children: [
          showPassword ? /* @__PURE__ */ jsx63(Eye, { size: 18 }) : /* @__PURE__ */ jsx63(EyeOff, { size: 18 }),
          /* @__PURE__ */ jsx63("span", { className: "sr-only", children: showPassword ? "Hide password" : "Show password" })
        ]
      }
    )
  ] });
}

// src/lib/client.ts
import { createBrowserClient } from "@supabase/ssr";
var clientSingleton = null;
function createClient() {
  if (typeof window === "undefined") {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  if (!clientSingleton) {
    clientSingleton = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  return clientSingleton;
}

// src/stores/auth-store.ts
import { create } from "zustand";

// src/lib/cookies.ts
var DEFAULT_MAX_AGE = 60 * 60 * 24 * 7;
function getCookie(name) {
  if (typeof document === "undefined") return void 0;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    return cookieValue;
  }
  return void 0;
}
function setCookie(name, value, maxAge = DEFAULT_MAX_AGE) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}
function removeCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

// src/stores/auth-store.ts
var ACCESS_TOKEN = "thisisjustarandomstring";
var USER_DATA = "auth_user_data";
var useAuthStore = create()((set) => {
  const cookieState = getCookie(ACCESS_TOKEN);
  let initToken = "";
  if (cookieState) {
    try {
      initToken = JSON.parse(cookieState);
    } catch {
      removeCookie(ACCESS_TOKEN);
    }
  }
  const userCookie = getCookie(USER_DATA);
  let initUser = null;
  if (userCookie) {
    try {
      const parsed = JSON.parse(decodeURIComponent(userCookie));
      if (parsed.exp && parsed.exp > Date.now()) {
        initUser = parsed;
      } else {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
      }
    } catch {
      initUser = null;
      removeCookie(USER_DATA);
    }
  }
  return {
    auth: {
      user: initUser,
      setUser: (user) => set((state) => {
        if (user) {
          setCookie(USER_DATA, encodeURIComponent(JSON.stringify(user)));
        } else {
          removeCookie(USER_DATA);
        }
        return { ...state, auth: { ...state.auth, user } };
      }),
      accessToken: initUser ? initToken : "",
      setAccessToken: (accessToken) => set((state) => {
        setCookie(ACCESS_TOKEN, JSON.stringify(accessToken));
        return { ...state, auth: { ...state.auth, accessToken } };
      }),
      resetAccessToken: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        return { ...state, auth: { ...state.auth, accessToken: "" } };
      }),
      reset: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
        return {
          ...state,
          auth: { ...state.auth, user: null, accessToken: "" }
        };
      })
    }
  };
});

// src/design-system/components/business/sign-out-dialog.tsx
import { signOut as nextAuthSignOut } from "next-auth/react";
import { jsx as jsx64 } from "react/jsx-runtime";
function SignOutDialog({ open, onOpenChange }) {
  const handleSignOut = async () => {
    try {
      useAuthStore.getState().auth.reset();
    } catch (err) {
    }
    try {
      await nextAuthSignOut({ redirect: false });
    } catch (err) {
    }
    try {
      const supabase = createClient();
      await supabase.auth.signOut({ scope: "global" }).catch(() => {
      });
    } catch (err) {
    }
    try {
      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
      }
    } catch (e) {
    }
    window.location.href = "/api/auth/mobile-logout";
  };
  return /* @__PURE__ */ jsx64(
    ConfirmDialog,
    {
      open,
      onOpenChange,
      title: "Sign out",
      desc: "Are you sure you want to sign out? You will need to sign in again to access your account.",
      confirmText: "Sign out",
      destructive: true,
      handleConfirm: handleSignOut,
      className: "sm:max-w-sm"
    }
  );
}

// src/design-system/components/business/theme-switch.tsx
import { useEffect as useEffect6 } from "react";
import { Check, Moon, Sun } from "lucide-react";

// src/context/theme-provider.tsx
import { createContext as createContext6, useContext as useContext7, useEffect as useEffect5, useState as useState5, useMemo as useMemo5 } from "react";
import { jsx as jsx65 } from "react/jsx-runtime";
var DEFAULT_THEME = "system";
var THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
var initialState = {
  defaultTheme: DEFAULT_THEME,
  resolvedTheme: "light",
  theme: DEFAULT_THEME,
  setTheme: () => null,
  resetTheme: () => null
};
var ThemeContext = createContext6(initialState);
var useTheme2 = () => {
  const context = useContext7(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// src/design-system/components/business/theme-switch.tsx
import { jsx as jsx66, jsxs as jsxs32 } from "react/jsx-runtime";
function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme2();
  useEffect6(() => {
    const themeColor = resolvedTheme === "dark" ? "#020817" : "#fff";
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) metaThemeColor.setAttribute("content", themeColor);
  }, [resolvedTheme]);
  return /* @__PURE__ */ jsxs32(DropdownMenu, { modal: false, children: [
    /* @__PURE__ */ jsx66(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs32(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "size-8 shrink-0 scale-95 rounded-full",
        children: [
          /* @__PURE__ */ jsx66(Sun, { className: "size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
          /* @__PURE__ */ jsx66(Moon, { className: "absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
          /* @__PURE__ */ jsx66("span", { className: "sr-only", children: "Toggle theme" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs32(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxs32(DropdownMenuItem, { onClick: () => setTheme("light"), children: [
        "Light",
        " ",
        /* @__PURE__ */ jsx66(
          Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "light" && "hidden")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs32(DropdownMenuItem, { onClick: () => setTheme("dark"), children: [
        "Dark",
        /* @__PURE__ */ jsx66(
          Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "dark" && "hidden")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs32(DropdownMenuItem, { onClick: () => setTheme("system"), children: [
        "System",
        /* @__PURE__ */ jsx66(
          Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "system" && "hidden")
          }
        )
      ] })
    ] })
  ] });
}

// src/design-system/components/business/theme-selector.tsx
import { Check as Check2, Palette } from "lucide-react";

// src/context/color-theme-provider.tsx
import { createContext as createContext7, useContext as useContext8, useEffect as useEffect7, useState as useState6, useMemo as useMemo6, useCallback as useCallback3 } from "react";
import { jsx as jsx67 } from "react/jsx-runtime";
var COLOR_THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
function simplePalette(lightPrimary, lightRing, darkPrimary, darkRing, charts) {
  return {
    light: {
      "--primary": lightPrimary,
      "--primary-foreground": "oklch(0.984 0.003 247.858)",
      "--ring": lightRing,
      "--chart-1": charts.light[0],
      "--chart-2": charts.light[1],
      "--chart-3": charts.light[2],
      "--chart-4": charts.light[3],
      "--chart-5": charts.light[4]
    },
    dark: {
      "--primary": darkPrimary,
      "--primary-foreground": "oklch(0.208 0.042 265.755)",
      "--ring": darkRing,
      "--chart-1": charts.dark[0],
      "--chart-2": charts.dark[1],
      "--chart-3": charts.dark[2],
      "--chart-4": charts.dark[3],
      "--chart-5": charts.dark[4]
    }
  };
}
var colorThemes = [
  // ─── Tweakcn & Custom Themes ─────────────────────────────────
  {
    name: "catppuccin",
    label: "Catppuccin",
    category: "tweakcn",
    preview: "#cba6f7",
    colors: ["#cba6f7", "#89b4fa", "#f38ba8", "#a6e3a1", "#1e1e2e"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.01 260)",
        "--foreground": "oklch(0.35 0.03 260)",
        "--card": "oklch(0.98 0.005 260)",
        "--card-foreground": "oklch(0.35 0.03 260)",
        "--popover": "oklch(0.98 0.005 260)",
        "--popover-foreground": "oklch(0.35 0.03 260)",
        "--primary": "oklch(0.53 0.24 290)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.9 0.02 260)",
        "--secondary-foreground": "oklch(0.35 0.03 260)",
        "--muted": "oklch(0.92 0.015 260)",
        "--muted-foreground": "oklch(0.52 0.03 260)",
        "--accent": "oklch(0.72 0.17 330)",
        "--accent-foreground": "oklch(0.99 0 0)",
        "--border": "oklch(0.85 0.02 260)",
        "--input": "oklch(0.85 0.02 260)",
        "--ring": "oklch(0.53 0.24 290)"
      },
      dark: {
        "--background": "oklch(0.18 0.03 260)",
        "--foreground": "oklch(0.88 0.03 260)",
        "--card": "oklch(0.15 0.03 260)",
        "--card-foreground": "oklch(0.88 0.03 260)",
        "--popover": "oklch(0.15 0.03 260)",
        "--popover-foreground": "oklch(0.88 0.03 260)",
        "--primary": "oklch(0.76 0.16 290)",
        "--primary-foreground": "oklch(0.15 0.03 260)",
        "--secondary": "oklch(0.24 0.03 260)",
        "--secondary-foreground": "oklch(0.88 0.03 260)",
        "--muted": "oklch(0.24 0.03 260)",
        "--muted-foreground": "oklch(0.68 0.03 260)",
        "--accent": "oklch(0.82 0.12 330)",
        "--accent-foreground": "oklch(0.15 0.03 260)",
        "--border": "oklch(0.32 0.03 260)",
        "--input": "oklch(0.32 0.03 260)",
        "--ring": "oklch(0.76 0.16 290)"
      }
    }
  },
  {
    name: "tokyo-night",
    label: "Tokyo Night",
    category: "tweakcn",
    preview: "#7aa2f7",
    colors: ["#7aa2f7", "#bb9af7", "#7dcfff", "#f7768e", "#1a1b26"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.02 260)",
        "--foreground": "oklch(0.35 0.12 260)",
        "--card": "oklch(0.97 0.015 260)",
        "--card-foreground": "oklch(0.35 0.12 260)",
        "--popover": "oklch(0.97 0.015 260)",
        "--popover-foreground": "oklch(0.35 0.12 260)",
        "--primary": "oklch(0.55 0.18 260)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.03 260)",
        "--secondary-foreground": "oklch(0.35 0.12 260)",
        "--muted": "oklch(0.9 0.02 260)",
        "--muted-foreground": "oklch(0.5 0.08 260)",
        "--border": "oklch(0.82 0.03 260)",
        "--input": "oklch(0.82 0.03 260)",
        "--ring": "oklch(0.55 0.18 260)"
      },
      dark: {
        "--background": "oklch(0.16 0.03 260)",
        "--foreground": "oklch(0.78 0.06 260)",
        "--card": "oklch(0.14 0.03 260)",
        "--card-foreground": "oklch(0.78 0.06 260)",
        "--popover": "oklch(0.14 0.03 260)",
        "--popover-foreground": "oklch(0.78 0.06 260)",
        "--primary": "oklch(0.72 0.14 260)",
        "--primary-foreground": "oklch(0.14 0.03 260)",
        "--secondary": "oklch(0.22 0.03 260)",
        "--secondary-foreground": "oklch(0.78 0.06 260)",
        "--muted": "oklch(0.22 0.03 260)",
        "--muted-foreground": "oklch(0.52 0.06 260)",
        "--border": "oklch(0.26 0.03 260)",
        "--input": "oklch(0.26 0.03 260)",
        "--ring": "oklch(0.72 0.14 260)"
      }
    }
  },
  {
    name: "dracula",
    label: "Dracula",
    category: "tweakcn",
    preview: "#bd93f9",
    colors: ["#bd93f9", "#ff79c6", "#8be9fd", "#50fa7b", "#282a36"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.01 280)",
        "--foreground": "oklch(0.22 0.04 280)",
        "--card": "oklch(0.98 0.005 280)",
        "--card-foreground": "oklch(0.22 0.04 280)",
        "--primary": "oklch(0.52 0.12 280)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.9 0.02 280)",
        "--secondary-foreground": "oklch(0.22 0.04 280)",
        "--muted": "oklch(0.92 0.01 280)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--border": "oklch(0.85 0.02 280)",
        "--input": "oklch(0.85 0.02 280)",
        "--ring": "oklch(0.52 0.12 280)"
      },
      dark: {
        "--background": "oklch(0.22 0.04 280)",
        "--foreground": "oklch(0.97 0.01 280)",
        "--card": "oklch(0.18 0.04 280)",
        "--card-foreground": "oklch(0.97 0.01 280)",
        "--popover": "oklch(0.18 0.04 280)",
        "--popover-foreground": "oklch(0.97 0.01 280)",
        "--primary": "oklch(0.72 0.16 295)",
        "--primary-foreground": "oklch(0.22 0.04 280)",
        "--secondary": "oklch(0.3 0.04 280)",
        "--secondary-foreground": "oklch(0.97 0.01 280)",
        "--muted": "oklch(0.3 0.04 280)",
        "--muted-foreground": "oklch(0.65 0.04 280)",
        "--border": "oklch(0.35 0.04 280)",
        "--input": "oklch(0.35 0.04 280)",
        "--ring": "oklch(0.72 0.16 295)"
      }
    }
  },
  {
    name: "nord",
    label: "Nord",
    category: "tweakcn",
    preview: "#88c0d0",
    colors: ["#88c0d0", "#81a1c1", "#5e81ac", "#bf616a", "#2e3440"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.01 230)",
        "--foreground": "oklch(0.26 0.03 230)",
        "--card": "oklch(0.97 0.005 230)",
        "--card-foreground": "oklch(0.26 0.03 230)",
        "--primary": "oklch(0.55 0.08 230)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.89 0.015 230)",
        "--secondary-foreground": "oklch(0.26 0.03 230)",
        "--muted": "oklch(0.89 0.015 230)",
        "--muted-foreground": "oklch(0.42 0.03 230)",
        "--border": "oklch(0.85 0.015 230)",
        "--input": "oklch(0.85 0.015 230)",
        "--ring": "oklch(0.55 0.08 230)"
      },
      dark: {
        "--background": "oklch(0.26 0.03 230)",
        "--foreground": "oklch(0.95 0.01 230)",
        "--card": "oklch(0.22 0.03 230)",
        "--card-foreground": "oklch(0.95 0.01 230)",
        "--popover": "oklch(0.22 0.03 230)",
        "--popover-foreground": "oklch(0.95 0.01 230)",
        "--primary": "oklch(0.76 0.08 210)",
        "--primary-foreground": "oklch(0.26 0.03 230)",
        "--secondary": "oklch(0.32 0.03 230)",
        "--secondary-foreground": "oklch(0.95 0.01 230)",
        "--muted": "oklch(0.32 0.03 230)",
        "--muted-foreground": "oklch(0.85 0.015 230)",
        "--border": "oklch(0.36 0.03 230)",
        "--input": "oklch(0.36 0.03 230)",
        "--ring": "oklch(0.76 0.08 210)"
      }
    }
  },
  {
    name: "gruvbox",
    label: "Gruvbox",
    category: "tweakcn",
    preview: "#fe8019",
    colors: ["#fe8019", "#fabd2f", "#b8bb26", "#83a598", "#282828"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.03 85)",
        "--foreground": "oklch(0.28 0.03 60)",
        "--card": "oklch(0.92 0.04 85)",
        "--card-foreground": "oklch(0.28 0.03 60)",
        "--primary": "oklch(0.55 0.16 45)",
        "--primary-foreground": "oklch(0.96 0.03 85)",
        "--secondary": "oklch(0.88 0.04 85)",
        "--secondary-foreground": "oklch(0.28 0.03 60)",
        "--muted": "oklch(0.88 0.04 85)",
        "--muted-foreground": "oklch(0.52 0.03 60)",
        "--border": "oklch(0.82 0.04 85)",
        "--input": "oklch(0.82 0.04 85)",
        "--ring": "oklch(0.55 0.16 45)"
      },
      dark: {
        "--background": "oklch(0.22 0.01 60)",
        "--foreground": "oklch(0.88 0.04 85)",
        "--card": "oklch(0.18 0.01 60)",
        "--card-foreground": "oklch(0.88 0.04 85)",
        "--popover": "oklch(0.18 0.01 60)",
        "--popover-foreground": "oklch(0.88 0.04 85)",
        "--primary": "oklch(0.68 0.18 55)",
        "--primary-foreground": "oklch(0.22 0.01 60)",
        "--secondary": "oklch(0.28 0.02 60)",
        "--secondary-foreground": "oklch(0.88 0.04 85)",
        "--muted": "oklch(0.28 0.02 60)",
        "--muted-foreground": "oklch(0.68 0.03 80)",
        "--border": "oklch(0.35 0.02 60)",
        "--input": "oklch(0.35 0.02 60)",
        "--ring": "oklch(0.68 0.18 55)"
      }
    }
  },
  {
    name: "supabase",
    label: "Supabase",
    category: "tweakcn",
    preview: "#3ecf8e",
    colors: ["#3ecf8e", "#10b981", "#047857", "#a7f3d0", "#121212"],
    tokens: {
      light: {
        "--background": "oklch(0.98 0.005 240)",
        "--foreground": "oklch(0.15 0.02 240)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.15 0.02 240)",
        "--primary": "oklch(0.55 0.15 160)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.92 0.01 240)",
        "--secondary-foreground": "oklch(0.15 0.02 240)",
        "--muted": "oklch(0.95 0.01 240)",
        "--muted-foreground": "oklch(0.48 0.02 240)",
        "--border": "oklch(0.9 0.01 240)",
        "--input": "oklch(0.9 0.01 240)",
        "--ring": "oklch(0.55 0.15 160)"
      },
      dark: {
        "--background": "oklch(0.14 0.005 240)",
        "--foreground": "oklch(0.94 0.005 240)",
        "--card": "oklch(0.16 0.005 240)",
        "--card-foreground": "oklch(0.94 0.005 240)",
        "--popover": "oklch(0.16 0.005 240)",
        "--popover-foreground": "oklch(0.94 0.005 240)",
        "--primary": "oklch(0.74 0.17 160)",
        "--primary-foreground": "oklch(0.14 0.005 240)",
        "--secondary": "oklch(0.22 0.005 240)",
        "--secondary-foreground": "oklch(0.94 0.005 240)",
        "--muted": "oklch(0.22 0.005 240)",
        "--muted-foreground": "oklch(0.68 0.005 240)",
        "--border": "oklch(0.24 0.005 240)",
        "--input": "oklch(0.24 0.005 240)",
        "--ring": "oklch(0.74 0.17 160)"
      }
    }
  },
  {
    name: "tweakcn-sunset",
    label: "Tweakcn Sunset",
    category: "tweakcn",
    preview: "#f97316",
    colors: ["#f97316", "#ec4899", "#8b5cf6", "#3b82f6", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 50)",
        "--foreground": "oklch(0.25 0.05 40)",
        "--card": "oklch(0.94 0.03 50)",
        "--card-foreground": "oklch(0.25 0.05 40)",
        "--primary": "oklch(0.62 0.22 45)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 50)",
        "--secondary-foreground": "oklch(0.25 0.05 40)",
        "--muted": "oklch(0.94 0.03 50)",
        "--muted-foreground": "oklch(0.55 0.08 40)",
        "--border": "oklch(0.85 0.06 50)",
        "--input": "oklch(0.85 0.06 50)",
        "--ring": "oklch(0.62 0.22 45)"
      },
      dark: {
        "--background": "oklch(0.12 0.02 50)",
        "--foreground": "oklch(0.94 0.01 50)",
        "--card": "oklch(0.16 0.02 50)",
        "--card-foreground": "oklch(0.94 0.01 50)",
        "--popover": "oklch(0.16 0.02 50)",
        "--popover-foreground": "oklch(0.94 0.01 50)",
        "--primary": "oklch(0.705 0.213 47.604)",
        "--primary-foreground": "oklch(0.12 0.02 50)",
        "--secondary": "oklch(0.22 0.02 50)",
        "--secondary-foreground": "oklch(0.94 0.01 50)",
        "--muted": "oklch(0.22 0.02 50)",
        "--muted-foreground": "oklch(0.68 0.02 50)",
        "--border": "oklch(0.3 0.02 50)",
        "--input": "oklch(0.3 0.02 50)",
        "--ring": "oklch(0.705 0.213 47.604)"
      }
    }
  },
  {
    name: "tweakcn-ocean",
    label: "Tweakcn Ocean",
    category: "tweakcn",
    preview: "#06b6d4",
    colors: ["#06b6d4", "#0284c7", "#3b82f6", "#10b981", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 200)",
        "--foreground": "oklch(0.22 0.06 200)",
        "--card": "oklch(0.94 0.03 200)",
        "--card-foreground": "oklch(0.22 0.06 200)",
        "--primary": "oklch(0.55 0.15 200)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 200)",
        "--secondary-foreground": "oklch(0.22 0.06 200)",
        "--muted": "oklch(0.94 0.03 200)",
        "--muted-foreground": "oklch(0.48 0.06 200)",
        "--border": "oklch(0.85 0.05 200)",
        "--input": "oklch(0.85 0.05 200)",
        "--ring": "oklch(0.55 0.15 200)"
      },
      dark: {
        "--background": "oklch(0.12 0.03 210)",
        "--foreground": "oklch(0.92 0.02 210)",
        "--card": "oklch(0.16 0.03 210)",
        "--card-foreground": "oklch(0.92 0.02 210)",
        "--popover": "oklch(0.16 0.03 210)",
        "--popover-foreground": "oklch(0.92 0.02 210)",
        "--primary": "oklch(0.68 0.15 200)",
        "--primary-foreground": "oklch(0.12 0.03 210)",
        "--secondary": "oklch(0.22 0.03 210)",
        "--secondary-foreground": "oklch(0.92 0.02 210)",
        "--muted": "oklch(0.22 0.03 210)",
        "--muted-foreground": "oklch(0.68 0.03 210)",
        "--border": "oklch(0.28 0.03 210)",
        "--input": "oklch(0.28 0.03 210)",
        "--ring": "oklch(0.68 0.15 200)"
      }
    }
  },
  {
    name: "tweakcn-midnight",
    label: "Tweakcn Midnight",
    category: "tweakcn",
    preview: "#8b5cf6",
    colors: ["#8b5cf6", "#d946ef", "#6366f1", "#ec4899", "#09090b"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.02 280)",
        "--foreground": "oklch(0.22 0.08 280)",
        "--card": "oklch(0.93 0.03 280)",
        "--card-foreground": "oklch(0.22 0.08 280)",
        "--primary": "oklch(0.55 0.22 280)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.04 280)",
        "--secondary-foreground": "oklch(0.22 0.08 280)",
        "--muted": "oklch(0.93 0.03 280)",
        "--muted-foreground": "oklch(0.48 0.08 280)",
        "--border": "oklch(0.84 0.04 280)",
        "--input": "oklch(0.84 0.04 280)",
        "--ring": "oklch(0.55 0.22 280)"
      },
      dark: {
        "--background": "oklch(0.1 0.03 280)",
        "--foreground": "oklch(0.93 0.02 280)",
        "--card": "oklch(0.14 0.03 280)",
        "--card-foreground": "oklch(0.93 0.02 280)",
        "--popover": "oklch(0.14 0.03 280)",
        "--popover-foreground": "oklch(0.93 0.02 280)",
        "--primary": "oklch(0.72 0.18 280)",
        "--primary-foreground": "oklch(0.1 0.03 280)",
        "--secondary": "oklch(0.2 0.03 280)",
        "--secondary-foreground": "oklch(0.93 0.02 280)",
        "--muted": "oklch(0.2 0.03 280)",
        "--muted-foreground": "oklch(0.68 0.03 280)",
        "--border": "oklch(0.26 0.03 280)",
        "--input": "oklch(0.26 0.03 280)",
        "--ring": "oklch(0.72 0.18 280)"
      }
    }
  },
  {
    name: "synthwave-84",
    label: "Synthwave '84",
    category: "tweakcn",
    preview: "#ff7edb",
    colors: ["#ff7edb", "#36f9f6", "#fe4450", "#72f1b8", "#262335"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 330)",
        "--foreground": "oklch(0.3 0.12 330)",
        "--card": "oklch(0.94 0.03 330)",
        "--card-foreground": "oklch(0.3 0.12 330)",
        "--primary": "oklch(0.6 0.25 330)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 330)",
        "--secondary-foreground": "oklch(0.3 0.12 330)",
        "--muted": "oklch(0.94 0.03 330)",
        "--muted-foreground": "oklch(0.5 0.1 330)",
        "--border": "oklch(0.84 0.06 330)",
        "--input": "oklch(0.84 0.06 330)",
        "--ring": "oklch(0.6 0.25 330)"
      },
      dark: {
        "--background": "oklch(0.16 0.04 300)",
        "--foreground": "oklch(0.95 0.02 330)",
        "--card": "oklch(0.19 0.04 300)",
        "--card-foreground": "oklch(0.95 0.02 330)",
        "--popover": "oklch(0.19 0.04 300)",
        "--popover-foreground": "oklch(0.95 0.02 330)",
        "--primary": "oklch(0.74 0.2 330)",
        "--primary-foreground": "oklch(0.16 0.04 300)",
        "--secondary": "oklch(0.26 0.04 300)",
        "--secondary-foreground": "oklch(0.95 0.02 330)",
        "--muted": "oklch(0.26 0.04 300)",
        "--muted-foreground": "oklch(0.75 0.12 190)",
        "--border": "oklch(0.32 0.04 300)",
        "--input": "oklch(0.32 0.04 300)",
        "--ring": "oklch(0.74 0.2 330)"
      }
    }
  },
  {
    name: "everforest",
    label: "Everforest",
    category: "tweakcn",
    preview: "#a7c080",
    colors: ["#a7c080", "#dbbc7f", "#e67e80", "#7fbbb3", "#2d353b"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.02 90)",
        "--foreground": "oklch(0.32 0.02 120)",
        "--card": "oklch(0.93 0.025 90)",
        "--card-foreground": "oklch(0.32 0.02 120)",
        "--primary": "oklch(0.55 0.12 120)",
        "--primary-foreground": "oklch(0.96 0.02 90)",
        "--secondary": "oklch(0.88 0.02 90)",
        "--secondary-foreground": "oklch(0.32 0.02 120)",
        "--muted": "oklch(0.88 0.02 90)",
        "--muted-foreground": "oklch(0.5 0.02 120)",
        "--border": "oklch(0.82 0.02 90)",
        "--input": "oklch(0.82 0.02 90)",
        "--ring": "oklch(0.55 0.12 120)"
      },
      dark: {
        "--background": "oklch(0.24 0.02 140)",
        "--foreground": "oklch(0.88 0.03 110)",
        "--card": "oklch(0.2 0.02 140)",
        "--card-foreground": "oklch(0.88 0.03 110)",
        "--popover": "oklch(0.2 0.02 140)",
        "--popover-foreground": "oklch(0.88 0.03 110)",
        "--primary": "oklch(0.74 0.11 125)",
        "--primary-foreground": "oklch(0.24 0.02 140)",
        "--secondary": "oklch(0.28 0.02 140)",
        "--secondary-foreground": "oklch(0.88 0.03 110)",
        "--muted": "oklch(0.28 0.02 140)",
        "--muted-foreground": "oklch(0.68 0.02 120)",
        "--border": "oklch(0.32 0.02 140)",
        "--input": "oklch(0.32 0.02 140)",
        "--ring": "oklch(0.74 0.11 125)"
      }
    }
  },
  {
    name: "rose-pine",
    label: "Ros\xE9 Pine",
    category: "tweakcn",
    preview: "#ebbcba",
    colors: ["#ebbcba", "#31748f", "#9ccfd8", "#c4a7e7", "#191724"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.01 60)",
        "--foreground": "oklch(0.32 0.04 280)",
        "--card": "oklch(0.93 0.015 60)",
        "--card-foreground": "oklch(0.32 0.04 280)",
        "--primary": "oklch(0.52 0.12 350)",
        "--primary-foreground": "oklch(0.97 0.01 60)",
        "--secondary": "oklch(0.88 0.015 60)",
        "--secondary-foreground": "oklch(0.32 0.04 280)",
        "--muted": "oklch(0.88 0.015 60)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--border": "oklch(0.82 0.015 60)",
        "--input": "oklch(0.82 0.015 60)",
        "--ring": "oklch(0.52 0.12 350)"
      },
      dark: {
        "--background": "oklch(0.18 0.03 280)",
        "--foreground": "oklch(0.9 0.02 280)",
        "--card": "oklch(0.15 0.03 280)",
        "--card-foreground": "oklch(0.9 0.02 280)",
        "--popover": "oklch(0.15 0.03 280)",
        "--popover-foreground": "oklch(0.9 0.02 280)",
        "--primary": "oklch(0.78 0.08 20)",
        "--primary-foreground": "oklch(0.18 0.03 280)",
        "--secondary": "oklch(0.24 0.03 280)",
        "--secondary-foreground": "oklch(0.9 0.02 280)",
        "--muted": "oklch(0.24 0.03 280)",
        "--muted-foreground": "oklch(0.65 0.02 280)",
        "--border": "oklch(0.28 0.03 280)",
        "--input": "oklch(0.28 0.03 280)",
        "--ring": "oklch(0.78 0.08 20)"
      }
    }
  },
  // ─── Simple accent themes ─────────────────────────────────────
  {
    name: "zinc",
    label: "Zinc",
    preview: "oklch(0.208 0.042 265.755)",
    colors: ["#71717a", "#fafafa", "#18181b", "#a1a1aa", "#d4d4d8"],
    tokens: {
      light: {
        "--primary": "oklch(0.208 0.042 265.755)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.704 0.04 256.788)",
        "--chart-1": "oklch(0.646 0.222 41.116)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.929 0.013 255.508)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.551 0.027 264.364)",
        "--chart-1": "oklch(0.488 0.243 264.376)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "blue",
    label: "Blue",
    preview: "oklch(0.546 0.245 262.881)",
    colors: ["#2563eb", "#3b82f6", "#93c5fd", "#bfdbfe", "#1e40af"],
    tokens: simplePalette(
      "oklch(0.546 0.245 262.881)",
      "oklch(0.546 0.245 262.881)",
      "oklch(0.623 0.214 259.815)",
      "oklch(0.623 0.214 259.815)",
      {
        light: ["oklch(0.546 0.245 262.881)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "rose",
    label: "Rose",
    preview: "oklch(0.585 0.22 3.717)",
    colors: ["#e11d48", "#f43f5e", "#fda4af", "#fecdd3", "#9f1239"],
    tokens: simplePalette(
      "oklch(0.585 0.22 3.717)",
      "oklch(0.585 0.22 3.717)",
      "oklch(0.645 0.246 16.439)",
      "oklch(0.645 0.246 16.439)",
      {
        light: ["oklch(0.585 0.22 3.717)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.645 0.246 16.439)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.488 0.243 264.376)"]
      }
    )
  },
  {
    name: "green",
    label: "Green",
    preview: "oklch(0.527 0.154 150.069)",
    colors: ["#16a34a", "#22c55e", "#86efac", "#bbf7d0", "#166534"],
    tokens: simplePalette(
      "oklch(0.527 0.154 150.069)",
      "oklch(0.527 0.154 150.069)",
      "oklch(0.696 0.17 162.48)",
      "oklch(0.696 0.17 162.48)",
      {
        light: ["oklch(0.527 0.154 150.069)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.696 0.17 162.48)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "orange",
    label: "Orange",
    preview: "oklch(0.705 0.213 47.604)",
    colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#c2410c"],
    tokens: {
      light: {
        "--primary": "oklch(0.705 0.213 47.604)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.705 0.213 47.604)",
        "--chart-1": "oklch(0.705 0.213 47.604)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.769 0.188 70.08)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.769 0.188 70.08)",
        "--chart-1": "oklch(0.769 0.188 70.08)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "violet",
    label: "Violet",
    preview: "oklch(0.541 0.281 293.009)",
    colors: ["#7c3aed", "#8b5cf6", "#c4b5fd", "#ddd6fe", "#5b21b6"],
    tokens: simplePalette(
      "oklch(0.541 0.281 293.009)",
      "oklch(0.541 0.281 293.009)",
      "oklch(0.627 0.265 303.9)",
      "oklch(0.627 0.265 303.9)",
      {
        light: ["oklch(0.541 0.281 293.009)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.627 0.265 303.9)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "amber",
    label: "Amber",
    preview: "oklch(0.769 0.172 70.67)",
    colors: ["#f59e0b", "#fbbf24", "#fcd34d", "#fde68a", "#92400e"],
    tokens: {
      light: {
        "--primary": "oklch(0.555 0.163 48.998)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.555 0.163 48.998)",
        "--chart-1": "oklch(0.769 0.172 70.67)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--primary": "oklch(0.769 0.172 70.67)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.769 0.172 70.67)",
        "--chart-1": "oklch(0.769 0.172 70.67)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "teal",
    label: "Teal",
    preview: "oklch(0.6 0.118 184.704)",
    colors: ["#14b8a6", "#2dd4bf", "#5eead4", "#99f6e4", "#115e59"],
    tokens: {
      light: {
        "--primary": "oklch(0.485 0.118 192.351)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.485 0.118 192.351)",
        "--chart-1": "oklch(0.6 0.118 184.704)",
        "--chart-2": "oklch(0.546 0.245 262.881)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.696 0.17 162.48)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.696 0.17 162.48)",
        "--chart-1": "oklch(0.696 0.17 162.48)",
        "--chart-2": "oklch(0.623 0.214 259.815)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  // New simple accent themes
  {
    name: "ruby",
    label: "Ruby",
    preview: "#b91c1c",
    colors: ["#b91c1c", "#ef4444", "#fca5a5", "#fee2e2", "#7f1d1d"],
    tokens: simplePalette(
      "oklch(0.505 0.213 27.325)",
      "oklch(0.505 0.213 27.325)",
      "oklch(0.637 0.237 25.331)",
      "oklch(0.637 0.237 25.331)",
      {
        light: ["oklch(0.505 0.213 27.325)", "oklch(0.546 0.245 262.881)", "oklch(0.527 0.154 150.069)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.637 0.237 25.331)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "emerald",
    label: "Emerald",
    preview: "#059669",
    colors: ["#059669", "#34d399", "#6ee7b7", "#a7f3d0", "#064e3b"],
    tokens: simplePalette(
      "oklch(0.596 0.145 163.225)",
      "oklch(0.596 0.145 163.225)",
      "oklch(0.696 0.17 162.48)",
      "oklch(0.696 0.17 162.48)",
      {
        light: ["oklch(0.596 0.145 163.225)", "oklch(0.546 0.245 262.881)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.696 0.17 162.48)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "sapphire",
    label: "Sapphire",
    preview: "#1d4ed8",
    colors: ["#1d4ed8", "#3b82f6", "#93c5fd", "#bfdbfe", "#1e3a8a"],
    tokens: simplePalette(
      "oklch(0.488 0.243 264.376)",
      "oklch(0.488 0.243 264.376)",
      "oklch(0.623 0.214 259.815)",
      "oklch(0.623 0.214 259.815)",
      {
        light: ["oklch(0.488 0.243 264.376)", "oklch(0.696 0.17 162.48)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "fuchsia",
    label: "Fuchsia",
    preview: "#c026d3",
    colors: ["#c026d3", "#e879f9", "#f5d0fe", "#fae8ff", "#86198f"],
    tokens: simplePalette(
      "oklch(0.591 0.293 322.896)",
      "oklch(0.591 0.293 322.896)",
      "oklch(0.667 0.295 322.15)",
      "oklch(0.667 0.295 322.15)",
      {
        light: ["oklch(0.591 0.293 322.896)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.667 0.295 322.15)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.696 0.17 162.48)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "cyan",
    label: "Cyan",
    preview: "#0891b2",
    colors: ["#0891b2", "#22d3ee", "#a5f3fc", "#cffafe", "#155e75"],
    tokens: simplePalette(
      "oklch(0.609 0.126 199.769)",
      "oklch(0.609 0.126 199.769)",
      "oklch(0.715 0.143 198.14)",
      "oklch(0.715 0.143 198.14)",
      {
        light: ["oklch(0.609 0.126 199.769)", "oklch(0.546 0.245 262.881)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.715 0.143 198.14)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "indigo",
    label: "Indigo",
    preview: "#4f46e5",
    colors: ["#4f46e5", "#818cf8", "#a5b4fc", "#c7d2fe", "#312e81"],
    tokens: simplePalette(
      "oklch(0.511 0.262 276.966)",
      "oklch(0.511 0.262 276.966)",
      "oklch(0.585 0.233 277.117)",
      "oklch(0.585 0.233 277.117)",
      {
        light: ["oklch(0.511 0.262 276.966)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.585 0.233 277.117)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.623 0.214 259.815)"]
      }
    )
  },
  {
    name: "pink",
    label: "Pink",
    preview: "#db2777",
    colors: ["#db2777", "#f472b6", "#f9a8d4", "#fbcfe8", "#831843"],
    tokens: simplePalette(
      "oklch(0.592 0.249 0.584)",
      "oklch(0.592 0.249 0.584)",
      "oklch(0.656 0.241 354.308)",
      "oklch(0.656 0.241 354.308)",
      {
        light: ["oklch(0.592 0.249 0.584)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.656 0.241 354.308)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "lime",
    label: "Lime",
    preview: "#65a30d",
    colors: ["#65a30d", "#84cc16", "#bef264", "#d9f99d", "#365314"],
    tokens: simplePalette(
      "oklch(0.627 0.168 131.589)",
      "oklch(0.627 0.168 131.589)",
      "oklch(0.768 0.233 130.85)",
      "oklch(0.768 0.233 130.85)",
      {
        light: ["oklch(0.627 0.168 131.589)", "oklch(0.546 0.245 262.881)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.768 0.233 130.85)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "sky",
    label: "Sky",
    preview: "#0284c7",
    colors: ["#0284c7", "#38bdf8", "#7dd3fc", "#bae6fd", "#0c4a6e"],
    tokens: simplePalette(
      "oklch(0.562 0.158 241.966)",
      "oklch(0.562 0.158 241.966)",
      "oklch(0.714 0.175 232.799)",
      "oklch(0.714 0.175 232.799)",
      {
        light: ["oklch(0.562 0.158 241.966)", "oklch(0.696 0.17 162.48)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.714 0.175 232.799)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.623 0.214 259.815)"]
      }
    )
  },
  {
    name: "slate",
    label: "Slate",
    preview: "#475569",
    colors: ["#475569", "#94a3b8", "#cbd5e1", "#e2e8f0", "#1e293b"],
    tokens: simplePalette(
      "oklch(0.446 0.043 257.281)",
      "oklch(0.446 0.043 257.281)",
      "oklch(0.869 0.022 252.894)",
      "oklch(0.551 0.027 264.364)",
      {
        light: ["oklch(0.446 0.043 257.281)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.869 0.022 252.894)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  // ─── Full palette themes ──────────────────────────────────────
  {
    name: "bold-tech",
    label: "Bold Tech",
    preview: "#6d28d9",
    colors: ["#6d28d9", "#818cf8", "#c4b5fd", "#a5b4fc", "#1e1b4b"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.025 280)",
        "--foreground": "oklch(0.15 0.05 280)",
        "--card": "oklch(0.97 0.018 280)",
        "--card-foreground": "oklch(0.15 0.05 280)",
        "--popover": "oklch(0.97 0.018 280)",
        "--popover-foreground": "oklch(0.15 0.05 280)",
        "--primary": "oklch(0.49 0.27 285)",
        "--primary-foreground": "oklch(0.98 0.005 280)",
        "--secondary": "oklch(0.88 0.04 280)",
        "--secondary-foreground": "oklch(0.25 0.05 280)",
        "--muted": "oklch(0.9 0.03 280)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--accent": "oklch(0.86 0.055 280)",
        "--accent-foreground": "oklch(0.25 0.05 280)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.04 280)",
        "--input": "oklch(0.84 0.04 280)",
        "--ring": "oklch(0.49 0.27 285)",
        "--chart-1": "oklch(0.49 0.27 285)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      },
      dark: {
        "--background": "oklch(0.12 0.04 280)",
        "--foreground": "oklch(0.93 0.01 280)",
        "--card": "oklch(0.15 0.04 278)",
        "--card-foreground": "oklch(0.93 0.01 280)",
        "--popover": "oklch(0.17 0.045 280)",
        "--popover-foreground": "oklch(0.93 0.01 280)",
        "--primary": "oklch(0.65 0.25 285)",
        "--primary-foreground": "oklch(0.12 0.04 280)",
        "--secondary": "oklch(0.22 0.04 278)",
        "--secondary-foreground": "oklch(0.93 0.01 280)",
        "--muted": "oklch(0.22 0.04 278)",
        "--muted-foreground": "oklch(0.65 0.04 280)",
        "--accent": "oklch(0.22 0.04 278)",
        "--accent-foreground": "oklch(0.93 0.01 280)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.25 285)",
        "--chart-1": "oklch(0.65 0.25 285)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "bubblegum",
    label: "Bubblegum",
    preview: "#ec4899",
    colors: ["#ec4899", "#f472b6", "#fce7f3", "#f9a8d4", "#831843"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.03 350)",
        "--foreground": "oklch(0.18 0.06 340)",
        "--card": "oklch(0.97 0.022 350)",
        "--card-foreground": "oklch(0.18 0.06 340)",
        "--popover": "oklch(0.97 0.022 350)",
        "--popover-foreground": "oklch(0.18 0.06 340)",
        "--primary": "oklch(0.656 0.241 354.308)",
        "--primary-foreground": "oklch(0.98 0.005 350)",
        "--secondary": "oklch(0.9 0.05 340)",
        "--secondary-foreground": "oklch(0.25 0.06 340)",
        "--muted": "oklch(0.91 0.04 340)",
        "--muted-foreground": "oklch(0.5 0.04 340)",
        "--accent": "oklch(0.88 0.06 340)",
        "--accent-foreground": "oklch(0.25 0.06 340)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.05 340)",
        "--input": "oklch(0.85 0.05 340)",
        "--ring": "oklch(0.656 0.241 354.308)",
        "--chart-1": "oklch(0.656 0.241 354.308)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.715 0.143 198.14)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.14 0.04 340)",
        "--foreground": "oklch(0.94 0.015 340)",
        "--card": "oklch(0.17 0.04 338)",
        "--card-foreground": "oklch(0.94 0.015 340)",
        "--popover": "oklch(0.19 0.045 340)",
        "--popover-foreground": "oklch(0.94 0.015 340)",
        "--primary": "oklch(0.72 0.22 350)",
        "--primary-foreground": "oklch(0.14 0.04 340)",
        "--secondary": "oklch(0.24 0.04 338)",
        "--secondary-foreground": "oklch(0.94 0.015 340)",
        "--muted": "oklch(0.24 0.04 338)",
        "--muted-foreground": "oklch(0.65 0.04 340)",
        "--accent": "oklch(0.24 0.04 338)",
        "--accent-foreground": "oklch(0.94 0.015 340)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.22 350)",
        "--chart-1": "oklch(0.72 0.22 350)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.715 0.143 198.14)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "caffeine",
    label: "Caffeine",
    preview: "#92400e",
    colors: ["#92400e", "#a16207", "#ca8a04", "#fbbf24", "#451a03"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.025 65)",
        "--foreground": "oklch(0.2 0.04 50)",
        "--card": "oklch(0.97 0.02 65)",
        "--card-foreground": "oklch(0.2 0.04 50)",
        "--popover": "oklch(0.97 0.02 65)",
        "--popover-foreground": "oklch(0.2 0.04 50)",
        "--primary": "oklch(0.47 0.12 55)",
        "--primary-foreground": "oklch(0.98 0.01 70)",
        "--secondary": "oklch(0.91 0.035 60)",
        "--secondary-foreground": "oklch(0.3 0.05 50)",
        "--muted": "oklch(0.92 0.028 60)",
        "--muted-foreground": "oklch(0.5 0.04 55)",
        "--accent": "oklch(0.89 0.04 60)",
        "--accent-foreground": "oklch(0.3 0.05 50)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.04 60)",
        "--input": "oklch(0.86 0.04 60)",
        "--ring": "oklch(0.55 0.12 55)",
        "--chart-1": "oklch(0.55 0.12 55)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.13 0.02 50)",
        "--foreground": "oklch(0.92 0.015 60)",
        "--card": "oklch(0.16 0.025 48)",
        "--card-foreground": "oklch(0.92 0.015 60)",
        "--popover": "oklch(0.18 0.03 50)",
        "--popover-foreground": "oklch(0.92 0.015 60)",
        "--primary": "oklch(0.72 0.15 65)",
        "--primary-foreground": "oklch(0.15 0.02 50)",
        "--secondary": "oklch(0.24 0.03 48)",
        "--secondary-foreground": "oklch(0.92 0.015 60)",
        "--muted": "oklch(0.24 0.03 48)",
        "--muted-foreground": "oklch(0.6 0.04 55)",
        "--accent": "oklch(0.24 0.03 48)",
        "--accent-foreground": "oklch(0.92 0.015 60)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.15 65)",
        "--chart-1": "oklch(0.72 0.15 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "candyland",
    label: "Candyland",
    preview: "#e11d48",
    colors: ["#e11d48", "#06b6d4", "#22c55e", "#f59e0b", "#fce7f3"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.018 15)",
        "--foreground": "oklch(0.18 0.04 340)",
        "--card": "oklch(0.975 0.013 15)",
        "--card-foreground": "oklch(0.18 0.04 340)",
        "--popover": "oklch(0.975 0.013 15)",
        "--popover-foreground": "oklch(0.18 0.04 340)",
        "--primary": "oklch(0.585 0.22 3.717)",
        "--primary-foreground": "oklch(0.98 0.005 340)",
        "--secondary": "oklch(0.91 0.028 15)",
        "--secondary-foreground": "oklch(0.3 0.04 340)",
        "--muted": "oklch(0.92 0.022 15)",
        "--muted-foreground": "oklch(0.5 0.04 340)",
        "--accent": "oklch(0.9 0.04 200)",
        "--accent-foreground": "oklch(0.25 0.04 200)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.87 0.035 15)",
        "--input": "oklch(0.87 0.035 15)",
        "--ring": "oklch(0.585 0.22 3.717)",
        "--chart-1": "oklch(0.585 0.22 3.717)",
        "--chart-2": "oklch(0.715 0.143 198.14)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.14 0.03 340)",
        "--foreground": "oklch(0.94 0.01 340)",
        "--card": "oklch(0.17 0.03 338)",
        "--card-foreground": "oklch(0.94 0.01 340)",
        "--popover": "oklch(0.19 0.035 340)",
        "--popover-foreground": "oklch(0.94 0.01 340)",
        "--primary": "oklch(0.65 0.24 5)",
        "--primary-foreground": "oklch(0.14 0.03 340)",
        "--secondary": "oklch(0.24 0.03 338)",
        "--secondary-foreground": "oklch(0.94 0.01 340)",
        "--muted": "oklch(0.24 0.03 338)",
        "--muted-foreground": "oklch(0.65 0.04 340)",
        "--accent": "oklch(0.24 0.035 200)",
        "--accent-foreground": "oklch(0.94 0.01 200)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.24 5)",
        "--chart-1": "oklch(0.65 0.24 5)",
        "--chart-2": "oklch(0.715 0.143 198.14)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "catppuccin",
    label: "Catppuccin",
    preview: "#cba6f7",
    colors: ["#cba6f7", "#f5c2e7", "#89b4fa", "#a6e3a1", "#1e1e2e"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.018 280)",
        "--foreground": "oklch(0.28 0.03 280)",
        "--card": "oklch(0.95 0.014 280)",
        "--card-foreground": "oklch(0.28 0.03 280)",
        "--popover": "oklch(0.95 0.014 280)",
        "--popover-foreground": "oklch(0.28 0.03 280)",
        "--primary": "oklch(0.57 0.18 295)",
        "--primary-foreground": "oklch(0.97 0.006 280)",
        "--secondary": "oklch(0.88 0.025 280)",
        "--secondary-foreground": "oklch(0.35 0.03 280)",
        "--muted": "oklch(0.89 0.022 280)",
        "--muted-foreground": "oklch(0.5 0.03 280)",
        "--accent": "oklch(0.87 0.03 280)",
        "--accent-foreground": "oklch(0.35 0.03 280)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.025 280)",
        "--input": "oklch(0.84 0.025 280)",
        "--ring": "oklch(0.57 0.18 295)",
        "--chart-1": "oklch(0.57 0.18 295)",
        "--chart-2": "oklch(0.72 0.14 350)",
        "--chart-3": "oklch(0.65 0.17 260)",
        "--chart-4": "oklch(0.78 0.17 145)",
        "--chart-5": "oklch(0.72 0.16 200)"
      },
      dark: {
        "--background": "oklch(0.16 0.015 280)",
        "--foreground": "oklch(0.9 0.01 280)",
        "--card": "oklch(0.19 0.018 278)",
        "--card-foreground": "oklch(0.9 0.01 280)",
        "--popover": "oklch(0.21 0.02 280)",
        "--popover-foreground": "oklch(0.9 0.01 280)",
        "--primary": "oklch(0.78 0.15 295)",
        "--primary-foreground": "oklch(0.16 0.015 280)",
        "--secondary": "oklch(0.25 0.02 278)",
        "--secondary-foreground": "oklch(0.9 0.01 280)",
        "--muted": "oklch(0.25 0.02 278)",
        "--muted-foreground": "oklch(0.65 0.03 280)",
        "--accent": "oklch(0.25 0.02 278)",
        "--accent-foreground": "oklch(0.9 0.01 280)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.3 0.018 280)",
        "--input": "oklch(0.3 0.018 280)",
        "--ring": "oklch(0.78 0.15 295)",
        "--chart-1": "oklch(0.78 0.15 295)",
        "--chart-2": "oklch(0.8 0.12 350)",
        "--chart-3": "oklch(0.72 0.14 260)",
        "--chart-4": "oklch(0.82 0.14 145)",
        "--chart-5": "oklch(0.75 0.13 200)"
      }
    }
  },
  {
    name: "claude",
    label: "Claude",
    preview: "#da7b3c",
    colors: ["#da7b3c", "#f5e6d3", "#c8956c", "#e8c5a0", "#2d2419"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.022 60)",
        "--foreground": "oklch(0.2 0.03 55)",
        "--card": "oklch(0.975 0.016 60)",
        "--card-foreground": "oklch(0.2 0.03 55)",
        "--popover": "oklch(0.975 0.016 60)",
        "--popover-foreground": "oklch(0.2 0.03 55)",
        "--primary": "oklch(0.62 0.16 50)",
        "--primary-foreground": "oklch(0.98 0.01 65)",
        "--secondary": "oklch(0.91 0.032 60)",
        "--secondary-foreground": "oklch(0.3 0.04 55)",
        "--muted": "oklch(0.92 0.026 60)",
        "--muted-foreground": "oklch(0.5 0.03 55)",
        "--accent": "oklch(0.9 0.038 60)",
        "--accent-foreground": "oklch(0.3 0.04 55)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.035 60)",
        "--input": "oklch(0.86 0.035 60)",
        "--ring": "oklch(0.62 0.16 50)",
        "--chart-1": "oklch(0.62 0.16 50)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.14 0.02 50)",
        "--foreground": "oklch(0.92 0.012 60)",
        "--card": "oklch(0.17 0.02 48)",
        "--card-foreground": "oklch(0.92 0.012 60)",
        "--popover": "oklch(0.19 0.025 50)",
        "--popover-foreground": "oklch(0.92 0.012 60)",
        "--primary": "oklch(0.73 0.14 52)",
        "--primary-foreground": "oklch(0.14 0.02 50)",
        "--secondary": "oklch(0.24 0.025 48)",
        "--secondary-foreground": "oklch(0.92 0.012 60)",
        "--muted": "oklch(0.24 0.025 48)",
        "--muted-foreground": "oklch(0.62 0.035 55)",
        "--accent": "oklch(0.24 0.025 48)",
        "--accent-foreground": "oklch(0.92 0.012 60)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.73 0.14 52)",
        "--chart-1": "oklch(0.73 0.14 52)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "claymorphism",
    label: "Claymorphism",
    preview: "#8b7355",
    colors: ["#8b7355", "#c4a97d", "#e8dfd5", "#d4c4b0", "#f5f0eb"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.02 75)",
        "--foreground": "oklch(0.25 0.03 60)",
        "--card": "oklch(0.965 0.015 75)",
        "--card-foreground": "oklch(0.25 0.03 60)",
        "--popover": "oklch(0.965 0.015 75)",
        "--popover-foreground": "oklch(0.25 0.03 60)",
        "--primary": "oklch(0.52 0.07 65)",
        "--primary-foreground": "oklch(0.97 0.008 75)",
        "--secondary": "oklch(0.9 0.028 70)",
        "--secondary-foreground": "oklch(0.35 0.03 60)",
        "--muted": "oklch(0.91 0.022 70)",
        "--muted-foreground": "oklch(0.5 0.03 65)",
        "--accent": "oklch(0.88 0.032 70)",
        "--accent-foreground": "oklch(0.35 0.03 60)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.03 70)",
        "--input": "oklch(0.85 0.03 70)",
        "--ring": "oklch(0.52 0.07 65)",
        "--chart-1": "oklch(0.52 0.07 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.15 0.015 60)",
        "--foreground": "oklch(0.92 0.01 70)",
        "--card": "oklch(0.18 0.015 58)",
        "--card-foreground": "oklch(0.92 0.01 70)",
        "--popover": "oklch(0.2 0.018 60)",
        "--popover-foreground": "oklch(0.92 0.01 70)",
        "--primary": "oklch(0.72 0.08 65)",
        "--primary-foreground": "oklch(0.15 0.015 60)",
        "--secondary": "oklch(0.25 0.018 58)",
        "--secondary-foreground": "oklch(0.92 0.01 70)",
        "--muted": "oklch(0.25 0.018 58)",
        "--muted-foreground": "oklch(0.62 0.03 65)",
        "--accent": "oklch(0.25 0.018 58)",
        "--accent-foreground": "oklch(0.92 0.01 70)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.3 0.015 60)",
        "--input": "oklch(0.3 0.015 60)",
        "--ring": "oklch(0.72 0.08 65)",
        "--chart-1": "oklch(0.72 0.08 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "clean-slate",
    label: "Clean Slate",
    preview: "#475569",
    colors: ["#475569", "#64748b", "#94a3b8", "#cbd5e1", "#f8fafc"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.01 250)",
        "--foreground": "oklch(0.2 0.04 260)",
        "--card": "oklch(0.965 0.007 250)",
        "--card-foreground": "oklch(0.2 0.04 260)",
        "--popover": "oklch(0.965 0.007 250)",
        "--popover-foreground": "oklch(0.2 0.04 260)",
        "--primary": "oklch(0.446 0.043 257.281)",
        "--primary-foreground": "oklch(0.99 0.002 250)",
        "--secondary": "oklch(0.9 0.014 250)",
        "--secondary-foreground": "oklch(0.3 0.04 260)",
        "--muted": "oklch(0.91 0.011 250)",
        "--muted-foreground": "oklch(0.554 0.046 257.417)",
        "--accent": "oklch(0.9 0.014 250)",
        "--accent-foreground": "oklch(0.3 0.04 260)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.016 250)",
        "--input": "oklch(0.86 0.016 250)",
        "--ring": "oklch(0.446 0.043 257.281)",
        "--chart-1": "oklch(0.446 0.043 257.281)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.13 0.02 260)",
        "--foreground": "oklch(0.93 0.008 250)",
        "--card": "oklch(0.16 0.02 258)",
        "--card-foreground": "oklch(0.93 0.008 250)",
        "--popover": "oklch(0.18 0.025 260)",
        "--popover-foreground": "oklch(0.93 0.008 250)",
        "--primary": "oklch(0.869 0.022 252.894)",
        "--primary-foreground": "oklch(0.13 0.02 260)",
        "--secondary": "oklch(0.24 0.02 258)",
        "--secondary-foreground": "oklch(0.93 0.008 250)",
        "--muted": "oklch(0.24 0.02 258)",
        "--muted-foreground": "oklch(0.704 0.04 256.788)",
        "--accent": "oklch(0.24 0.02 258)",
        "--accent-foreground": "oklch(0.93 0.008 250)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.869 0.022 252.894)",
        "--chart-1": "oklch(0.869 0.022 252.894)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "cosmic-night",
    label: "Cosmic Night",
    preview: "#6366f1",
    colors: ["#6366f1", "#818cf8", "#a78bfa", "#c7d2fe", "#0f0524"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.022 275)",
        "--foreground": "oklch(0.15 0.05 275)",
        "--card": "oklch(0.95 0.016 275)",
        "--card-foreground": "oklch(0.15 0.05 275)",
        "--popover": "oklch(0.95 0.016 275)",
        "--popover-foreground": "oklch(0.15 0.05 275)",
        "--primary": "oklch(0.55 0.24 278)",
        "--primary-foreground": "oklch(0.98 0.005 275)",
        "--secondary": "oklch(0.88 0.032 275)",
        "--secondary-foreground": "oklch(0.25 0.05 275)",
        "--muted": "oklch(0.89 0.026 275)",
        "--muted-foreground": "oklch(0.5 0.04 275)",
        "--accent": "oklch(0.87 0.038 275)",
        "--accent-foreground": "oklch(0.25 0.05 275)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.03 275)",
        "--input": "oklch(0.84 0.03 275)",
        "--ring": "oklch(0.55 0.24 278)",
        "--chart-1": "oklch(0.55 0.24 278)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      },
      dark: {
        "--background": "oklch(0.1 0.045 275)",
        "--foreground": "oklch(0.93 0.01 275)",
        "--card": "oklch(0.13 0.045 273)",
        "--card-foreground": "oklch(0.93 0.01 275)",
        "--popover": "oklch(0.15 0.05 275)",
        "--popover-foreground": "oklch(0.93 0.01 275)",
        "--primary": "oklch(0.68 0.2 278)",
        "--primary-foreground": "oklch(0.1 0.045 275)",
        "--secondary": "oklch(0.2 0.04 273)",
        "--secondary-foreground": "oklch(0.93 0.01 275)",
        "--muted": "oklch(0.2 0.04 273)",
        "--muted-foreground": "oklch(0.65 0.04 275)",
        "--accent": "oklch(0.2 0.04 273)",
        "--accent-foreground": "oklch(0.93 0.01 275)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.68 0.2 278)",
        "--chart-1": "oklch(0.68 0.2 278)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    preview: "#00ff88",
    colors: ["#00ff88", "#ff0080", "#00d4ff", "#ffff00", "#0a0a0a"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.015 160)",
        "--foreground": "oklch(0.12 0.02 180)",
        "--card": "oklch(0.945 0.012 160)",
        "--card-foreground": "oklch(0.12 0.02 180)",
        "--popover": "oklch(0.945 0.012 160)",
        "--popover-foreground": "oklch(0.12 0.02 180)",
        "--primary": "oklch(0.62 0.22 160)",
        "--primary-foreground": "oklch(0.12 0.02 180)",
        "--secondary": "oklch(0.88 0.025 160)",
        "--secondary-foreground": "oklch(0.2 0.02 180)",
        "--muted": "oklch(0.89 0.02 160)",
        "--muted-foreground": "oklch(0.45 0.03 180)",
        "--accent": "oklch(0.87 0.04 320)",
        "--accent-foreground": "oklch(0.2 0.03 320)",
        "--destructive": "oklch(0.65 0.28 340)",
        "--border": "oklch(0.84 0.025 160)",
        "--input": "oklch(0.84 0.025 160)",
        "--ring": "oklch(0.62 0.22 160)",
        "--chart-1": "oklch(0.87 0.3 155)",
        "--chart-2": "oklch(0.65 0.28 340)",
        "--chart-3": "oklch(0.75 0.17 220)",
        "--chart-4": "oklch(0.9 0.22 105)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.09 0.005 0)",
        "--foreground": "oklch(0.92 0.01 180)",
        "--card": "oklch(0.12 0.008 270)",
        "--card-foreground": "oklch(0.92 0.01 180)",
        "--popover": "oklch(0.14 0.01 270)",
        "--popover-foreground": "oklch(0.92 0.01 180)",
        "--primary": "oklch(0.87 0.3 155)",
        "--primary-foreground": "oklch(0.09 0.005 0)",
        "--secondary": "oklch(0.18 0.01 270)",
        "--secondary-foreground": "oklch(0.92 0.01 180)",
        "--muted": "oklch(0.18 0.01 270)",
        "--muted-foreground": "oklch(0.6 0.02 180)",
        "--accent": "oklch(0.18 0.015 320)",
        "--accent-foreground": "oklch(0.87 0.3 155)",
        "--destructive": "oklch(0.72 0.26 340)",
        "--border": "oklch(0.87 0.3 155 / 15%)",
        "--input": "oklch(0.87 0.3 155 / 20%)",
        "--ring": "oklch(0.87 0.3 155)",
        "--chart-1": "oklch(0.87 0.3 155)",
        "--chart-2": "oklch(0.72 0.26 340)",
        "--chart-3": "oklch(0.75 0.17 220)",
        "--chart-4": "oklch(0.9 0.22 105)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "darkmatter",
    label: "Darkmatter",
    preview: "#525252",
    colors: ["#404040", "#525252", "#737373", "#a3a3a3", "#0a0a0a"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.004 286)",
        "--foreground": "oklch(0.145 0.005 285)",
        "--card": "oklch(0.955 0.003 286)",
        "--card-foreground": "oklch(0.145 0.005 285)",
        "--popover": "oklch(0.955 0.003 286)",
        "--popover-foreground": "oklch(0.145 0.005 285)",
        "--primary": "oklch(0.27 0.006 286)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.89 0.005 286)",
        "--secondary-foreground": "oklch(0.27 0.006 286)",
        "--muted": "oklch(0.9 0.004 286)",
        "--muted-foreground": "oklch(0.55 0.013 286)",
        "--accent": "oklch(0.88 0.006 286)",
        "--accent-foreground": "oklch(0.27 0.006 286)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.007 286)",
        "--input": "oklch(0.85 0.007 286)",
        "--ring": "oklch(0.55 0.013 286)",
        "--chart-1": "oklch(0.37 0.013 286)",
        "--chart-2": "oklch(0.55 0.013 286)",
        "--chart-3": "oklch(0.705 0.015 286)",
        "--chart-4": "oklch(0.445 0.012 286)",
        "--chart-5": "oklch(0.63 0.014 286)"
      },
      dark: {
        "--background": "oklch(0.1 0.003 286)",
        "--foreground": "oklch(0.92 0.004 286)",
        "--card": "oklch(0.13 0.004 286)",
        "--card-foreground": "oklch(0.92 0.004 286)",
        "--popover": "oklch(0.15 0.004 286)",
        "--popover-foreground": "oklch(0.92 0.004 286)",
        "--primary": "oklch(0.87 0.006 286)",
        "--primary-foreground": "oklch(0.1 0.003 286)",
        "--secondary": "oklch(0.21 0.005 286)",
        "--secondary-foreground": "oklch(0.92 0.004 286)",
        "--muted": "oklch(0.21 0.005 286)",
        "--muted-foreground": "oklch(0.6 0.01 286)",
        "--accent": "oklch(0.21 0.005 286)",
        "--accent-foreground": "oklch(0.92 0.004 286)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.6 0.01 286)",
        "--chart-1": "oklch(0.5 0.01 286)",
        "--chart-2": "oklch(0.65 0.012 286)",
        "--chart-3": "oklch(0.8 0.008 286)",
        "--chart-4": "oklch(0.55 0.011 286)",
        "--chart-5": "oklch(0.72 0.01 286)"
      }
    }
  },
  {
    name: "doom-64",
    label: "Doom 64",
    preview: "#dc2626",
    colors: ["#dc2626", "#16a34a", "#ca8a04", "#71717a", "#1a0f0f"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.016 25)",
        "--foreground": "oklch(0.18 0.02 20)",
        "--card": "oklch(0.955 0.012 25)",
        "--card-foreground": "oklch(0.18 0.02 20)",
        "--popover": "oklch(0.955 0.012 25)",
        "--popover-foreground": "oklch(0.18 0.02 20)",
        "--primary": "oklch(0.577 0.245 27.325)",
        "--primary-foreground": "oklch(0.97 0.005 25)",
        "--secondary": "oklch(0.89 0.022 25)",
        "--secondary-foreground": "oklch(0.3 0.02 20)",
        "--muted": "oklch(0.9 0.018 25)",
        "--muted-foreground": "oklch(0.5 0.02 20)",
        "--accent": "oklch(0.88 0.025 25)",
        "--accent-foreground": "oklch(0.3 0.02 20)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.025 25)",
        "--input": "oklch(0.85 0.025 25)",
        "--ring": "oklch(0.577 0.245 27.325)",
        "--chart-1": "oklch(0.577 0.245 27.325)",
        "--chart-2": "oklch(0.527 0.154 150.069)",
        "--chart-3": "oklch(0.705 0.15 65)",
        "--chart-4": "oklch(0.55 0.013 286)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.015 20)",
        "--foreground": "oklch(0.88 0.01 25)",
        "--card": "oklch(0.15 0.018 18)",
        "--card-foreground": "oklch(0.88 0.01 25)",
        "--popover": "oklch(0.17 0.02 20)",
        "--popover-foreground": "oklch(0.88 0.01 25)",
        "--primary": "oklch(0.637 0.237 25.331)",
        "--primary-foreground": "oklch(0.12 0.015 20)",
        "--secondary": "oklch(0.22 0.018 18)",
        "--secondary-foreground": "oklch(0.88 0.01 25)",
        "--muted": "oklch(0.22 0.018 18)",
        "--muted-foreground": "oklch(0.6 0.02 20)",
        "--accent": "oklch(0.22 0.018 18)",
        "--accent-foreground": "oklch(0.88 0.01 25)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.637 0.237 25.331 / 15%)",
        "--input": "oklch(0.637 0.237 25.331 / 20%)",
        "--ring": "oklch(0.637 0.237 25.331)",
        "--chart-1": "oklch(0.637 0.237 25.331)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.6 0.01 286)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "elegant-luxury",
    label: "Elegant Luxury",
    preview: "#d4a853",
    colors: ["#d4a853", "#b8960c", "#a3a3a3", "#e5e5e5", "#0c0a09"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.018 80)",
        "--foreground": "oklch(0.15 0.01 60)",
        "--card": "oklch(0.97 0.013 80)",
        "--card-foreground": "oklch(0.15 0.01 60)",
        "--popover": "oklch(0.97 0.013 80)",
        "--popover-foreground": "oklch(0.15 0.01 60)",
        "--primary": "oklch(0.65 0.13 80)",
        "--primary-foreground": "oklch(0.15 0.01 60)",
        "--secondary": "oklch(0.91 0.022 80)",
        "--secondary-foreground": "oklch(0.25 0.01 60)",
        "--muted": "oklch(0.92 0.018 80)",
        "--muted-foreground": "oklch(0.5 0.015 70)",
        "--accent": "oklch(0.9 0.026 80)",
        "--accent-foreground": "oklch(0.25 0.01 60)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.87 0.022 80)",
        "--input": "oklch(0.87 0.022 80)",
        "--ring": "oklch(0.65 0.13 80)",
        "--chart-1": "oklch(0.65 0.13 80)",
        "--chart-2": "oklch(0.55 0.013 286)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.585 0.22 3.717)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.1 0.008 60)",
        "--foreground": "oklch(0.92 0.008 80)",
        "--card": "oklch(0.13 0.008 58)",
        "--card-foreground": "oklch(0.92 0.008 80)",
        "--popover": "oklch(0.15 0.01 60)",
        "--popover-foreground": "oklch(0.92 0.008 80)",
        "--primary": "oklch(0.78 0.14 80)",
        "--primary-foreground": "oklch(0.1 0.008 60)",
        "--secondary": "oklch(0.2 0.008 58)",
        "--secondary-foreground": "oklch(0.92 0.008 80)",
        "--muted": "oklch(0.2 0.008 58)",
        "--muted-foreground": "oklch(0.6 0.015 70)",
        "--accent": "oklch(0.2 0.008 58)",
        "--accent-foreground": "oklch(0.92 0.008 80)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.78 0.14 80 / 12%)",
        "--input": "oklch(0.78 0.14 80 / 18%)",
        "--ring": "oklch(0.78 0.14 80)",
        "--chart-1": "oklch(0.78 0.14 80)",
        "--chart-2": "oklch(0.6 0.01 286)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "frost",
    label: "Frost",
    preview: "#0ea5e9",
    colors: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#bae6fd", "#e0f2fe"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.025 220)",
        "--foreground": "oklch(0.18 0.04 230)",
        "--card": "oklch(0.955 0.019 220)",
        "--card-foreground": "oklch(0.18 0.04 230)",
        "--popover": "oklch(0.955 0.019 220)",
        "--popover-foreground": "oklch(0.18 0.04 230)",
        "--primary": "oklch(0.62 0.16 230)",
        "--primary-foreground": "oklch(0.99 0.005 220)",
        "--secondary": "oklch(0.89 0.035 220)",
        "--secondary-foreground": "oklch(0.28 0.04 230)",
        "--muted": "oklch(0.9 0.028 220)",
        "--muted-foreground": "oklch(0.5 0.03 230)",
        "--accent": "oklch(0.88 0.04 220)",
        "--accent-foreground": "oklch(0.28 0.04 230)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.035 220)",
        "--input": "oklch(0.85 0.035 220)",
        "--ring": "oklch(0.62 0.16 230)",
        "--chart-1": "oklch(0.62 0.16 230)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.13 0.025 230)",
        "--foreground": "oklch(0.94 0.01 220)",
        "--card": "oklch(0.16 0.025 228)",
        "--card-foreground": "oklch(0.94 0.01 220)",
        "--popover": "oklch(0.18 0.03 230)",
        "--popover-foreground": "oklch(0.94 0.01 220)",
        "--primary": "oklch(0.75 0.15 225)",
        "--primary-foreground": "oklch(0.13 0.025 230)",
        "--secondary": "oklch(0.23 0.025 228)",
        "--secondary-foreground": "oklch(0.94 0.01 220)",
        "--muted": "oklch(0.23 0.025 228)",
        "--muted-foreground": "oklch(0.65 0.03 225)",
        "--accent": "oklch(0.23 0.025 228)",
        "--accent-foreground": "oklch(0.94 0.01 220)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.75 0.15 225)",
        "--chart-1": "oklch(0.75 0.15 225)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "horizon",
    label: "Horizon",
    preview: "#f43f5e",
    colors: ["#f43f5e", "#fb923c", "#fbbf24", "#a78bfa", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.022 20)",
        "--foreground": "oklch(0.18 0.03 30)",
        "--card": "oklch(0.965 0.016 20)",
        "--card-foreground": "oklch(0.18 0.03 30)",
        "--popover": "oklch(0.965 0.016 20)",
        "--popover-foreground": "oklch(0.18 0.03 30)",
        "--primary": "oklch(0.585 0.22 3.717)",
        "--primary-foreground": "oklch(0.99 0.005 20)",
        "--secondary": "oklch(0.9 0.032 30)",
        "--secondary-foreground": "oklch(0.28 0.03 30)",
        "--muted": "oklch(0.91 0.026 30)",
        "--muted-foreground": "oklch(0.5 0.03 30)",
        "--accent": "oklch(0.89 0.038 50)",
        "--accent-foreground": "oklch(0.28 0.03 50)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.028 30)",
        "--input": "oklch(0.86 0.028 30)",
        "--ring": "oklch(0.585 0.22 3.717)",
        "--chart-1": "oklch(0.645 0.246 16.439)",
        "--chart-2": "oklch(0.705 0.213 47.604)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.025 260)",
        "--foreground": "oklch(0.94 0.01 30)",
        "--card": "oklch(0.15 0.025 258)",
        "--card-foreground": "oklch(0.94 0.01 30)",
        "--popover": "oklch(0.17 0.03 260)",
        "--popover-foreground": "oklch(0.94 0.01 30)",
        "--primary": "oklch(0.65 0.24 5)",
        "--primary-foreground": "oklch(0.12 0.025 260)",
        "--secondary": "oklch(0.22 0.025 258)",
        "--secondary-foreground": "oklch(0.94 0.01 30)",
        "--muted": "oklch(0.22 0.025 258)",
        "--muted-foreground": "oklch(0.65 0.03 30)",
        "--accent": "oklch(0.22 0.03 50)",
        "--accent-foreground": "oklch(0.94 0.01 30)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.24 5)",
        "--chart-1": "oklch(0.645 0.246 16.439)",
        "--chart-2": "oklch(0.769 0.188 70.08)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "lavender-dreams",
    label: "Lavender Dreams",
    preview: "#9333ea",
    colors: ["#9333ea", "#a855f7", "#c084fc", "#e9d5ff", "#faf5ff"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.022 300)",
        "--foreground": "oklch(0.18 0.04 300)",
        "--card": "oklch(0.955 0.016 300)",
        "--card-foreground": "oklch(0.18 0.04 300)",
        "--popover": "oklch(0.955 0.016 300)",
        "--popover-foreground": "oklch(0.18 0.04 300)",
        "--primary": "oklch(0.53 0.25 305)",
        "--primary-foreground": "oklch(0.99 0.005 300)",
        "--secondary": "oklch(0.89 0.034 300)",
        "--secondary-foreground": "oklch(0.28 0.04 300)",
        "--muted": "oklch(0.9 0.028 300)",
        "--muted-foreground": "oklch(0.5 0.03 300)",
        "--accent": "oklch(0.88 0.042 300)",
        "--accent-foreground": "oklch(0.28 0.04 300)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.032 300)",
        "--input": "oklch(0.85 0.032 300)",
        "--ring": "oklch(0.53 0.25 305)",
        "--chart-1": "oklch(0.53 0.25 305)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.13 0.03 300)",
        "--foreground": "oklch(0.94 0.01 300)",
        "--card": "oklch(0.16 0.03 298)",
        "--card-foreground": "oklch(0.94 0.01 300)",
        "--popover": "oklch(0.18 0.035 300)",
        "--popover-foreground": "oklch(0.94 0.01 300)",
        "--primary": "oklch(0.7 0.22 300)",
        "--primary-foreground": "oklch(0.13 0.03 300)",
        "--secondary": "oklch(0.23 0.03 298)",
        "--secondary-foreground": "oklch(0.94 0.01 300)",
        "--muted": "oklch(0.23 0.03 298)",
        "--muted-foreground": "oklch(0.65 0.03 300)",
        "--accent": "oklch(0.23 0.03 298)",
        "--accent-foreground": "oklch(0.94 0.01 300)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.7 0.22 300)",
        "--chart-1": "oklch(0.7 0.22 300)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "midnight",
    label: "Midnight",
    preview: "#3b82f6",
    colors: ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#020617"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.02 260)",
        "--foreground": "oklch(0.15 0.05 260)",
        "--card": "oklch(0.945 0.015 260)",
        "--card-foreground": "oklch(0.15 0.05 260)",
        "--popover": "oklch(0.945 0.015 260)",
        "--popover-foreground": "oklch(0.15 0.05 260)",
        "--primary": "oklch(0.546 0.245 262.881)",
        "--primary-foreground": "oklch(0.99 0.004 260)",
        "--secondary": "oklch(0.88 0.03 260)",
        "--secondary-foreground": "oklch(0.25 0.05 260)",
        "--muted": "oklch(0.89 0.024 260)",
        "--muted-foreground": "oklch(0.5 0.04 260)",
        "--accent": "oklch(0.87 0.034 260)",
        "--accent-foreground": "oklch(0.25 0.05 260)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.028 260)",
        "--input": "oklch(0.84 0.028 260)",
        "--ring": "oklch(0.546 0.245 262.881)",
        "--chart-1": "oklch(0.546 0.245 262.881)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.08 0.04 260)",
        "--foreground": "oklch(0.93 0.008 260)",
        "--card": "oklch(0.11 0.04 258)",
        "--card-foreground": "oklch(0.93 0.008 260)",
        "--popover": "oklch(0.13 0.045 260)",
        "--popover-foreground": "oklch(0.93 0.008 260)",
        "--primary": "oklch(0.623 0.214 259.815)",
        "--primary-foreground": "oklch(0.08 0.04 260)",
        "--secondary": "oklch(0.18 0.04 258)",
        "--secondary-foreground": "oklch(0.93 0.008 260)",
        "--muted": "oklch(0.18 0.04 258)",
        "--muted-foreground": "oklch(0.65 0.03 260)",
        "--accent": "oklch(0.18 0.04 258)",
        "--accent-foreground": "oklch(0.93 0.008 260)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.623 0.214 259.815)",
        "--chart-1": "oklch(0.623 0.214 259.815)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "nord",
    label: "Nord",
    preview: "#88c0d0",
    colors: ["#88c0d0", "#81a1c1", "#5e81ac", "#b48ead", "#2e3440"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.018 230)",
        "--foreground": "oklch(0.25 0.03 230)",
        "--card": "oklch(0.955 0.013 230)",
        "--card-foreground": "oklch(0.25 0.03 230)",
        "--popover": "oklch(0.955 0.013 230)",
        "--popover-foreground": "oklch(0.25 0.03 230)",
        "--primary": "oklch(0.55 0.09 215)",
        "--primary-foreground": "oklch(0.97 0.005 230)",
        "--secondary": "oklch(0.89 0.025 230)",
        "--secondary-foreground": "oklch(0.32 0.03 230)",
        "--muted": "oklch(0.9 0.02 230)",
        "--muted-foreground": "oklch(0.5 0.025 230)",
        "--accent": "oklch(0.88 0.028 230)",
        "--accent-foreground": "oklch(0.32 0.03 230)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.022 230)",
        "--input": "oklch(0.85 0.022 230)",
        "--ring": "oklch(0.55 0.09 215)",
        "--chart-1": "oklch(0.73 0.08 210)",
        "--chart-2": "oklch(0.63 0.07 240)",
        "--chart-3": "oklch(0.55 0.09 255)",
        "--chart-4": "oklch(0.68 0.1 330)",
        "--chart-5": "oklch(0.72 0.12 100)"
      },
      dark: {
        "--background": "oklch(0.22 0.02 230)",
        "--foreground": "oklch(0.92 0.008 225)",
        "--card": "oklch(0.25 0.02 228)",
        "--card-foreground": "oklch(0.92 0.008 225)",
        "--popover": "oklch(0.27 0.022 230)",
        "--popover-foreground": "oklch(0.92 0.008 225)",
        "--primary": "oklch(0.73 0.08 210)",
        "--primary-foreground": "oklch(0.22 0.02 230)",
        "--secondary": "oklch(0.3 0.02 228)",
        "--secondary-foreground": "oklch(0.92 0.008 225)",
        "--muted": "oklch(0.3 0.02 228)",
        "--muted-foreground": "oklch(0.65 0.025 230)",
        "--accent": "oklch(0.3 0.02 228)",
        "--accent-foreground": "oklch(0.92 0.008 225)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.35 0.018 228)",
        "--input": "oklch(0.35 0.018 228)",
        "--ring": "oklch(0.73 0.08 210)",
        "--chart-1": "oklch(0.73 0.08 210)",
        "--chart-2": "oklch(0.63 0.07 240)",
        "--chart-3": "oklch(0.55 0.09 255)",
        "--chart-4": "oklch(0.68 0.1 330)",
        "--chart-5": "oklch(0.72 0.12 100)"
      }
    }
  },
  {
    name: "sunset-vibes",
    label: "Sunset Vibes",
    preview: "#ea580c",
    colors: ["#ea580c", "#f97316", "#fb923c", "#fdba74", "#431407"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.028 40)",
        "--foreground": "oklch(0.18 0.03 35)",
        "--card": "oklch(0.965 0.022 40)",
        "--card-foreground": "oklch(0.18 0.03 35)",
        "--popover": "oklch(0.965 0.022 40)",
        "--popover-foreground": "oklch(0.18 0.03 35)",
        "--primary": "oklch(0.58 0.22 38)",
        "--primary-foreground": "oklch(0.99 0.005 40)",
        "--secondary": "oklch(0.9 0.038 40)",
        "--secondary-foreground": "oklch(0.28 0.03 35)",
        "--muted": "oklch(0.91 0.032 40)",
        "--muted-foreground": "oklch(0.5 0.03 38)",
        "--accent": "oklch(0.89 0.042 40)",
        "--accent-foreground": "oklch(0.28 0.03 35)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.036 40)",
        "--input": "oklch(0.86 0.036 40)",
        "--ring": "oklch(0.58 0.22 38)",
        "--chart-1": "oklch(0.58 0.22 38)",
        "--chart-2": "oklch(0.705 0.213 47.604)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.585 0.22 3.717)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.02 35)",
        "--foreground": "oklch(0.93 0.012 40)",
        "--card": "oklch(0.15 0.022 33)",
        "--card-foreground": "oklch(0.93 0.012 40)",
        "--popover": "oklch(0.17 0.025 35)",
        "--popover-foreground": "oklch(0.93 0.012 40)",
        "--primary": "oklch(0.72 0.2 42)",
        "--primary-foreground": "oklch(0.12 0.02 35)",
        "--secondary": "oklch(0.22 0.022 33)",
        "--secondary-foreground": "oklch(0.93 0.012 40)",
        "--muted": "oklch(0.22 0.022 33)",
        "--muted-foreground": "oklch(0.62 0.03 38)",
        "--accent": "oklch(0.22 0.022 33)",
        "--accent-foreground": "oklch(0.93 0.012 40)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.2 42)",
        "--chart-1": "oklch(0.72 0.2 42)",
        "--chart-2": "oklch(0.769 0.188 70.08)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "twilight",
    label: "Twilight",
    preview: "#a855f7",
    colors: ["#a855f7", "#c084fc", "#e879f9", "#7c3aed", "#1e1040"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.025 290)",
        "--foreground": "oklch(0.16 0.045 290)",
        "--card": "oklch(0.945 0.019 290)",
        "--card-foreground": "oklch(0.16 0.045 290)",
        "--popover": "oklch(0.945 0.019 290)",
        "--popover-foreground": "oklch(0.16 0.045 290)",
        "--primary": "oklch(0.6 0.25 295)",
        "--primary-foreground": "oklch(0.98 0.006 290)",
        "--secondary": "oklch(0.88 0.038 290)",
        "--secondary-foreground": "oklch(0.25 0.045 290)",
        "--muted": "oklch(0.89 0.032 290)",
        "--muted-foreground": "oklch(0.5 0.035 290)",
        "--accent": "oklch(0.87 0.045 300)",
        "--accent-foreground": "oklch(0.25 0.045 300)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.036 290)",
        "--input": "oklch(0.84 0.036 290)",
        "--ring": "oklch(0.6 0.25 295)",
        "--chart-1": "oklch(0.6 0.25 295)",
        "--chart-2": "oklch(0.667 0.295 322.15)",
        "--chart-3": "oklch(0.541 0.281 293.009)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      },
      dark: {
        "--background": "oklch(0.11 0.04 290)",
        "--foreground": "oklch(0.93 0.01 290)",
        "--card": "oklch(0.14 0.04 288)",
        "--card-foreground": "oklch(0.93 0.01 290)",
        "--popover": "oklch(0.16 0.045 290)",
        "--popover-foreground": "oklch(0.93 0.01 290)",
        "--primary": "oklch(0.72 0.2 295)",
        "--primary-foreground": "oklch(0.11 0.04 290)",
        "--secondary": "oklch(0.21 0.04 288)",
        "--secondary-foreground": "oklch(0.93 0.01 290)",
        "--muted": "oklch(0.21 0.04 288)",
        "--muted-foreground": "oklch(0.65 0.035 290)",
        "--accent": "oklch(0.21 0.04 310)",
        "--accent-foreground": "oklch(0.93 0.01 310)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.72 0.2 295)",
        "--chart-1": "oklch(0.72 0.2 295)",
        "--chart-2": "oklch(0.72 0.25 322)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      }
    }
  }
];
var DEFAULT_COLOR_THEME = "zinc";
var ColorThemeContext = createContext7({
  colorTheme: DEFAULT_COLOR_THEME,
  setColorTheme: () => null,
  resetColorTheme: () => null,
  currentTheme: colorThemes[0]
});
var useColorTheme = () => {
  const context = useContext8(ColorThemeContext);
  if (!context)
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  return context;
};

// src/design-system/components/business/theme-selector.tsx
import { jsx as jsx68, jsxs as jsxs33 } from "react/jsx-runtime";
function ThemeSelector() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const { theme, setTheme } = useTheme2();
  return /* @__PURE__ */ jsxs33(Popover, { children: [
    /* @__PURE__ */ jsx68(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs33(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "relative size-8 shrink-0 scale-95 rounded-full",
        "aria-label": "Select color theme",
        children: [
          /* @__PURE__ */ jsx68(Palette, { className: "size-[1.2rem]" }),
          /* @__PURE__ */ jsx68(
            "span",
            {
              className: "absolute -top-0.5 -right-0.5 size-2.5 rounded-full ring-2 ring-background",
              style: {
                backgroundColor: colorThemes.find((t) => t.name === colorTheme)?.preview ?? "currentColor"
              }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs33(
      PopoverContent,
      {
        align: "end",
        className: "w-[280px] p-3",
        children: [
          /* @__PURE__ */ jsxs33("div", { className: "mb-1", children: [
            /* @__PURE__ */ jsx68("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Appearance" }),
            /* @__PURE__ */ jsx68("div", { className: "grid grid-cols-3 gap-1.5", children: [
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "system", label: "System" }
            ].map((mode) => /* @__PURE__ */ jsx68(
              "button",
              {
                onClick: () => setTheme(mode.value),
                className: cn(
                  "flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                  "hover:bg-accent hover:text-accent-foreground",
                  theme === mode.value ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/50 text-muted-foreground"
                ),
                children: mode.label
              },
              mode.value
            )) })
          ] }),
          /* @__PURE__ */ jsx68(Separator, { className: "my-3" }),
          /* @__PURE__ */ jsxs33("div", { children: [
            /* @__PURE__ */ jsx68("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Color Theme" }),
            /* @__PURE__ */ jsx68("div", { className: "max-h-[280px] space-y-0.5 overflow-y-auto", children: colorThemes.map((ct) => /* @__PURE__ */ jsxs33(
              "button",
              {
                onClick: () => setColorTheme(ct.name),
                className: cn(
                  "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 transition-all",
                  colorTheme === ct.name ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                ),
                "aria-label": `Select ${ct.label} color theme`,
                children: [
                  /* @__PURE__ */ jsx68("div", { className: "flex gap-0.5", children: ct.colors.slice(0, 5).map((color, i) => /* @__PURE__ */ jsx68(
                    "span",
                    {
                      className: cn(
                        "size-2.5 rounded-full",
                        colorTheme === ct.name ? "ring-1 ring-primary-foreground/30" : "ring-1 ring-border/40"
                      ),
                      style: { backgroundColor: color }
                    },
                    i
                  )) }),
                  /* @__PURE__ */ jsx68("span", { className: "text-xs font-medium", children: ct.label }),
                  colorTheme === ct.name && /* @__PURE__ */ jsx68(Check2, { className: "ml-auto size-3.5", strokeWidth: 3 })
                ]
              },
              ct.name
            )) })
          ] })
        ]
      }
    )
  ] });
}

// src/design-system/components/business/select-dropdown.tsx
import { Loader } from "lucide-react";
import { jsx as jsx69, jsxs as jsxs34 } from "react/jsx-runtime";
function SelectDropdown({
  defaultValue,
  onValueChange,
  isPending,
  items,
  placeholder,
  disabled,
  className = "",
  isControlled = false
}) {
  const defaultState = isControlled ? { value: defaultValue, onValueChange } : { defaultValue, onValueChange };
  return /* @__PURE__ */ jsxs34(Select, { ...defaultState, children: [
    /* @__PURE__ */ jsx69(FormControl, { children: /* @__PURE__ */ jsx69(SelectTrigger, { disabled, className: cn(className), children: /* @__PURE__ */ jsx69(SelectValue, { placeholder: placeholder ?? "Select" }) }) }),
    /* @__PURE__ */ jsx69(SelectContent, { children: isPending ? /* @__PURE__ */ jsx69(SelectItem, { disabled: true, value: "loading", className: "h-14", children: /* @__PURE__ */ jsxs34("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx69(Loader, { className: "h-5 w-5 animate-spin" }),
      "  ",
      "Loading..."
    ] }) }) : items?.map(({ label, value }) => /* @__PURE__ */ jsx69(SelectItem, { value, children: label }, value)) })
  ] });
}

// src/design-system/components/business/long-text.tsx
import { useRef as useRef2, useState as useState7 } from "react";
import { Fragment as Fragment2, jsx as jsx70, jsxs as jsxs35 } from "react/jsx-runtime";
function LongText({
  children,
  className = "",
  contentClassName = ""
}) {
  const ref = useRef2(null);
  const [isOverflown, setIsOverflown] = useState7(false);
  const refCallback = (node) => {
    ref.current = node;
    if (node && checkOverflow(node)) {
      queueMicrotask(() => setIsOverflown(true));
    }
  };
  if (!isOverflown)
    return /* @__PURE__ */ jsx70("div", { ref: refCallback, className: cn("truncate", className), children });
  return /* @__PURE__ */ jsxs35(Fragment2, { children: [
    /* @__PURE__ */ jsx70("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx70(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs35(Tooltip2, { children: [
      /* @__PURE__ */ jsx70(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx70("div", { ref: refCallback, className: cn("truncate", className), children }) }),
      /* @__PURE__ */ jsx70(TooltipContent, { children: /* @__PURE__ */ jsx70("p", { className: contentClassName, children }) })
    ] }) }) }),
    /* @__PURE__ */ jsx70("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxs35(Popover, { children: [
      /* @__PURE__ */ jsx70(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx70("div", { ref: refCallback, className: cn("truncate", className), children }) }),
      /* @__PURE__ */ jsx70(PopoverContent, { className: cn("w-fit", contentClassName), children: /* @__PURE__ */ jsx70("p", { children }) })
    ] }) })
  ] });
}
var checkOverflow = (textContainer) => {
  if (textContainer) {
    return textContainer.offsetHeight < textContainer.scrollHeight || textContainer.offsetWidth < textContainer.scrollWidth;
  }
  return false;
};

// src/design-system/components/business/search.tsx
import { SearchIcon as SearchIcon3 } from "lucide-react";

// src/context/search-provider.tsx
import { createContext as createContext8, useContext as useContext9, useEffect as useEffect8, useState as useState8 } from "react";

// src/components/command-menu.tsx
import React11 from "react";
import { useRouter } from "next/navigation";
import { ArrowRight as ArrowRight2, ChevronRight as ChevronRight3, Laptop, Moon as Moon2, Sun as Sun2 } from "lucide-react";

// src/design-system/templates/data/sidebar-data.ts
import {
  LayoutGrid,
  Command as Command2
} from "lucide-react";
var sidebarData = {
  user: {
    name: "Amoga User",
    email: "user@amoga.io",
    avatar: "/avatars/shadcn.jpg"
  },
  teams: [
    {
      name: "Amoga App",
      logo: Command2,
      plan: "System Design"
    }
  ],
  navGroups: [
    {
      title: "Overview",
      items: [
        {
          title: "System Design",
          url: "/",
          icon: LayoutGrid
        }
      ]
    }
  ]
};

// src/components/command-menu.tsx
import { jsx as jsx71, jsxs as jsxs36 } from "react/jsx-runtime";
function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme2();
  const { open, setOpen } = useSearch();
  const runCommand = React11.useCallback(
    (command) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );
  return /* @__PURE__ */ jsxs36(CommandDialog, { modal: true, open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx71(CommandInput, { placeholder: "Type a command or search..." }),
    /* @__PURE__ */ jsx71(CommandList, { children: /* @__PURE__ */ jsxs36(ScrollArea, { type: "hover", className: "h-72 pe-1", children: [
      /* @__PURE__ */ jsx71(CommandEmpty, { children: "No results found." }),
      sidebarData.navGroups.map((group) => /* @__PURE__ */ jsx71(CommandGroup, { heading: group.title, children: group.items.map((navItem, i) => {
        if (navItem.url)
          return /* @__PURE__ */ jsxs36(
            CommandItem,
            {
              value: navItem.title,
              onSelect: () => {
                runCommand(() => router.push(navItem.url));
              },
              children: [
                /* @__PURE__ */ jsx71("div", { className: "flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx71(ArrowRight2, { className: "size-2 text-muted-foreground/80" }) }),
                navItem.title
              ]
            },
            `${navItem.url}-${i}`
          );
        return navItem.items?.map((subItem, i2) => /* @__PURE__ */ jsxs36(
          CommandItem,
          {
            value: `${navItem.title}-${subItem.url}`,
            onSelect: () => {
              runCommand(() => router.push(subItem.url));
            },
            children: [
              /* @__PURE__ */ jsx71("div", { className: "flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx71(ArrowRight2, { className: "size-2 text-muted-foreground/80" }) }),
              navItem.title,
              " ",
              /* @__PURE__ */ jsx71(ChevronRight3, {}),
              " ",
              subItem.title
            ]
          },
          `${navItem.title}-${subItem.url}-${i2}`
        ));
      }) }, group.title)),
      /* @__PURE__ */ jsx71(CommandSeparator, {}),
      /* @__PURE__ */ jsxs36(CommandGroup, { heading: "Theme", children: [
        /* @__PURE__ */ jsxs36(CommandItem, { onSelect: () => runCommand(() => setTheme("light")), children: [
          /* @__PURE__ */ jsx71(Sun2, {}),
          " ",
          /* @__PURE__ */ jsx71("span", { children: "Light" })
        ] }),
        /* @__PURE__ */ jsxs36(CommandItem, { onSelect: () => runCommand(() => setTheme("dark")), children: [
          /* @__PURE__ */ jsx71(Moon2, { className: "scale-90" }),
          /* @__PURE__ */ jsx71("span", { children: "Dark" })
        ] }),
        /* @__PURE__ */ jsxs36(CommandItem, { onSelect: () => runCommand(() => setTheme("system")), children: [
          /* @__PURE__ */ jsx71(Laptop, {}),
          /* @__PURE__ */ jsx71("span", { children: "System" })
        ] })
      ] })
    ] }) })
  ] });
}

// src/context/search-provider.tsx
import { jsx as jsx72, jsxs as jsxs37 } from "react/jsx-runtime";
var SearchContext = createContext8(null);
function SearchProvider({ children }) {
  const [open, setOpen] = useState8(false);
  useEffect8(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return /* @__PURE__ */ jsxs37(SearchContext, { value: { open, setOpen }, children: [
    children,
    /* @__PURE__ */ jsx72(CommandMenu, {})
  ] });
}
var useSearch = () => {
  const searchContext = useContext9(SearchContext);
  if (!searchContext) {
    throw new Error("useSearch has to be used within SearchProvider");
  }
  return searchContext;
};

// src/design-system/components/business/search.tsx
import { jsx as jsx73 } from "react/jsx-runtime";
function Search({
  className = "",
  placeholder = "Search",
  iconOnly = true,
  ...props
}) {
  const { setOpen } = useSearch();
  const openSearch = () => setOpen(true);
  return /* @__PURE__ */ jsx73(
    Button,
    {
      ...props,
      variant: "ghost",
      size: "icon",
      className: cn("size-8 shrink-0", className),
      "aria-label": "Search",
      "aria-keyshortcuts": "Meta+K Control+K",
      onClick: openSearch,
      children: /* @__PURE__ */ jsx73(SearchIcon3, { className: "size-5", "aria-hidden": "true" })
    }
  );
}

// src/design-system/components/business/stats-01.tsx
import { jsx as jsx74, jsxs as jsxs38 } from "react/jsx-runtime";
var data = [
  {
    name: "Profit",
    value: "$287,654.00",
    change: "+8.32%",
    changeType: "positive"
  },
  {
    name: "Late payments",
    value: "$9,435.00",
    change: "-12.64%",
    changeType: "negative"
  },
  {
    name: "Pending orders",
    value: "$173,229.00",
    change: "+2.87%",
    changeType: "positive"
  },
  {
    name: "Operating costs",
    value: "$52,891.00",
    change: "-5.73%",
    changeType: "negative"
  }
];
function Stats01() {
  return /* @__PURE__ */ jsx74("div", { className: "flex items-center justify-center p-10", children: /* @__PURE__ */ jsx74("div", { className: "mx-auto grid grid-cols-1 gap-px rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4", children: data.map((stat, index) => /* @__PURE__ */ jsx74(
    Card,
    {
      className: cn(
        "rounded-none border-0 shadow-none py-0",
        index === 0 && "rounded-l-xl",
        index === data.length - 1 && "rounded-r-xl"
      ),
      children: /* @__PURE__ */ jsxs38(CardContent, { className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6", children: [
        /* @__PURE__ */ jsx74("div", { className: "text-sm font-medium text-muted-foreground", children: stat.name }),
        /* @__PURE__ */ jsx74(
          "div",
          {
            className: cn(
              "tabular-nums text-xs font-medium",
              stat.changeType === "positive" ? "text-green-800 dark:text-green-400" : "text-red-800 dark:text-red-400"
            ),
            children: stat.change
          }
        ),
        /* @__PURE__ */ jsx74("div", { className: "tabular-nums w-full flex-none text-3xl font-medium tracking-tight text-foreground", children: stat.value })
      ] })
    },
    stat.name
  )) }) });
}

// src/design-system/components/business/date-picker.tsx
import { format as format2 } from "date-fns";
import { Calendar as CalendarIcon2 } from "lucide-react";
import { jsx as jsx75, jsxs as jsxs39 } from "react/jsx-runtime";
function DatePicker2({
  selected,
  onSelect,
  placeholder = "Pick a date"
}) {
  return /* @__PURE__ */ jsxs39(Popover, { children: [
    /* @__PURE__ */ jsx75(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs39(
      Button,
      {
        variant: "outline",
        "data-empty": !selected,
        className: "w-60 justify-start text-start font-normal data-[empty=true]:text-muted-foreground",
        children: [
          selected ? format2(selected, "MMM d, yyyy") : /* @__PURE__ */ jsx75("span", { children: placeholder }),
          /* @__PURE__ */ jsx75(CalendarIcon2, { className: "ms-auto h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx75(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsx75(
      Calendar,
      {
        mode: "single",
        captionLayout: "dropdown",
        selected,
        onSelect,
        disabled: (date) => date > /* @__PURE__ */ new Date() || date < /* @__PURE__ */ new Date("1900-01-01")
      }
    ) })
  ] });
}

// src/design-system/components/business/qr-code-display.tsx
import React12 from "react";
import QRCode from "react-qr-code";
import { toast } from "sonner";
import { jsx as jsx76 } from "react/jsx-runtime";
function QrCodeDisplay({ value, size = 140, className }) {
  if (!value) {
    return /* @__PURE__ */ jsx76(
      "div",
      {
        className: `flex items-center justify-center bg-muted/40 rounded text-xs text-muted-foreground ${className ?? ""}`,
        style: { width: size, height: size },
        children: "No URL"
      }
    );
  }
  return /* @__PURE__ */ jsx76("div", { className, style: { width: size, height: size }, children: /* @__PURE__ */ jsx76(
    QRCode,
    {
      value,
      size,
      level: value.length > 800 ? "L" : "M",
      bgColor: "#ffffff",
      fgColor: "#000000",
      style: { height: "auto", maxWidth: "100%", width: "100%" }
    }
  ) });
}
var QRCodeDisplay = QrCodeDisplay;
async function downloadQrCode(value, filename, size = 400) {
  if (!value) return;
  try {
    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.left = "-9999px";
    document.body.appendChild(wrapper);
    const { createRoot } = await import("react-dom/client");
    const root = createRoot(wrapper);
    root.render(
      React12.createElement(QRCode, {
        value,
        size,
        level: "M",
        bgColor: "#ffffff",
        fgColor: "#000000"
      })
    );
    await new Promise((r) => setTimeout(r, 100));
    const svgEl = wrapper.querySelector("svg");
    if (!svgEl) throw new Error("QR render failed");
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unavailable");
    const img = new Image();
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    await new Promise((resolve, reject) => {
      img.onload = () => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = reject;
      img.src = url;
    });
    root.unmount();
    document.body.removeChild(wrapper);
    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      const blobUrl = window.URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      toast.success("QR Code downloaded successfully!");
    }, "image/png");
  } catch {
    toast.error("Failed to download QR code.");
  }
}

// src/design-system/templates/list-template.tsx
import { jsx as jsx77, jsxs as jsxs40 } from "react/jsx-runtime";
function ListTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  filters,
  activeFilters,
  onClearAllFilters,
  filterActions,
  children,
  footer,
  className,
  ...props
}) {
  const hasFilterBar = Boolean(onSearchChange) || Boolean(filters) || activeFilters && activeFilters.length > 0 || Boolean(filterActions);
  return /* @__PURE__ */ jsxs40("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ jsx77(
      PageHeader,
      {
        title,
        description,
        badge,
        breadcrumbs,
        actions
      }
    ),
    hasFilterBar && /* @__PURE__ */ jsx77(
      FilterBar,
      {
        searchPlaceholder,
        searchValue,
        onSearchChange,
        filters,
        activeFilters,
        onClearAll: onClearAllFilters,
        actions: filterActions
      }
    ),
    /* @__PURE__ */ jsx77("div", { className: "flex-1", children }),
    footer && /* @__PURE__ */ jsx77("div", { className: "pt-2", children: footer })
  ] });
}

// src/design-system/templates/detail-template.tsx
import { ArrowLeft as ArrowLeft2 } from "lucide-react";
import { jsx as jsx78, jsxs as jsxs41 } from "react/jsx-runtime";
function DetailTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  onBack,
  backLabel = "Back",
  highlights,
  sidebar,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs41("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ jsxs41("div", { className: "flex flex-col gap-2", children: [
      onBack && /* @__PURE__ */ jsxs41(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: onBack,
          className: "w-fit gap-1.5 px-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx78(ArrowLeft2, { className: "h-3.5 w-3.5" }),
            backLabel
          ]
        }
      ),
      /* @__PURE__ */ jsx78(
        PageHeader,
        {
          title,
          description,
          badge,
          breadcrumbs,
          actions
        }
      )
    ] }),
    highlights && /* @__PURE__ */ jsx78("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: highlights }),
    /* @__PURE__ */ jsxs41(
      "div",
      {
        className: cn(
          "grid gap-6",
          sidebar ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
        ),
        children: [
          /* @__PURE__ */ jsx78("div", { className: cn(sidebar ? "lg:col-span-2 space-y-6" : "space-y-6"), children }),
          sidebar && /* @__PURE__ */ jsx78("aside", { className: "space-y-6 lg:col-span-1", children: sidebar })
        ]
      }
    )
  ] });
}

// src/design-system/templates/form-template.tsx
import { ArrowLeft as ArrowLeft3 } from "lucide-react";
import { jsx as jsx79, jsxs as jsxs42 } from "react/jsx-runtime";
function FormTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  onBack,
  backLabel = "Back",
  submitLabel = "Save changes",
  cancelLabel = "Cancel",
  onCancel,
  isSubmitting = false,
  stickyFooter = false,
  secondaryActions,
  children,
  className,
  onSubmit,
  ...props
}) {
  return /* @__PURE__ */ jsxs42("div", { className: "flex flex-col gap-6 p-4 sm:p-6 md:p-8", children: [
    /* @__PURE__ */ jsxs42("div", { className: "flex flex-col gap-2", children: [
      onBack && /* @__PURE__ */ jsxs42(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: onBack,
          className: "w-fit gap-1.5 px-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx79(ArrowLeft3, { className: "h-3.5 w-3.5" }),
            backLabel
          ]
        }
      ),
      /* @__PURE__ */ jsx79(
        PageHeader,
        {
          title,
          description,
          badge,
          breadcrumbs
        }
      )
    ] }),
    /* @__PURE__ */ jsxs42("form", { onSubmit, className: cn("space-y-8", className), ...props, children: [
      /* @__PURE__ */ jsx79("div", { className: "space-y-6", children }),
      /* @__PURE__ */ jsxs42(
        "div",
        {
          className: cn(
            "flex flex-wrap items-center justify-between gap-4 pt-6",
            stickyFooter && "sticky bottom-0 -mx-4 -mb-4 bg-background/95 p-4 backdrop-blur border-t sm:-mx-6 sm:-mb-6 sm:p-6 md:-mx-8 md:-mb-8 md:p-8"
          ),
          children: [
            /* @__PURE__ */ jsx79("div", { children: secondaryActions }),
            /* @__PURE__ */ jsxs42("div", { className: "flex items-center gap-3", children: [
              onCancel && /* @__PURE__ */ jsx79(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  disabled: isSubmitting,
                  onClick: onCancel,
                  children: cancelLabel
                }
              ),
              /* @__PURE__ */ jsx79(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Saving..." : submitLabel })
            ] })
          ]
        }
      )
    ] })
  ] });
}

// src/design-system/templates/wizard-template.tsx
import { Check as Check3, ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight4 } from "lucide-react";
import { jsx as jsx80, jsxs as jsxs43 } from "react/jsx-runtime";
function WizardTemplate({
  title,
  description,
  steps,
  currentStepIndex,
  onStepChange,
  onNext,
  onPrevious,
  onSubmit,
  nextLabel = "Next",
  previousLabel = "Previous",
  submitLabel = "Complete",
  isSubmitting = false,
  canProceed = true,
  children,
  className,
  ...props
}) {
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;
  return /* @__PURE__ */ jsxs43("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ jsx80(PageHeader, { title, description }),
    /* @__PURE__ */ jsx80("nav", { "aria-label": "Wizard Progress", className: "py-2", children: /* @__PURE__ */ jsx80("ol", { className: "flex items-center justify-between gap-2 overflow-x-auto pb-2", children: steps.map((step, idx) => {
      const isCompleted = idx < currentStepIndex;
      const isCurrent = idx === currentStepIndex;
      const isClickable = onStepChange && idx < currentStepIndex;
      return /* @__PURE__ */ jsxs43(
        "li",
        {
          className: "flex flex-1 items-center gap-2.5 min-w-[120px]",
          children: [
            /* @__PURE__ */ jsxs43(
              "button",
              {
                type: "button",
                disabled: !isClickable,
                onClick: isClickable ? () => onStepChange(idx) : void 0,
                className: cn(
                  "flex items-center gap-2 text-left transition-colors",
                  isClickable && "cursor-pointer hover:opacity-80"
                ),
                children: [
                  /* @__PURE__ */ jsx80(
                    "span",
                    {
                      className: cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        isCompleted && "bg-primary text-primary-foreground",
                        isCurrent && "border-2 border-primary bg-primary/10 text-primary font-bold",
                        !isCompleted && !isCurrent && "border border-border bg-muted text-muted-foreground"
                      ),
                      children: isCompleted ? /* @__PURE__ */ jsx80(Check3, { className: "h-4 w-4" }) : idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsx80("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx80(
                    "div",
                    {
                      className: cn(
                        "text-xs font-medium",
                        isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                      ),
                      children: step.title
                    }
                  ) })
                ]
              }
            ),
            idx < steps.length - 1 && /* @__PURE__ */ jsx80(
              "div",
              {
                className: cn(
                  "h-0.5 flex-1 rounded-full",
                  idx < currentStepIndex ? "bg-primary" : "bg-border"
                )
              }
            )
          ]
        },
        step.id
      );
    }) }) }),
    /* @__PURE__ */ jsx80("div", { className: "flex-1 rounded-lg border bg-card p-4 sm:p-6", children }),
    /* @__PURE__ */ jsxs43("div", { className: "flex items-center justify-between pt-2", children: [
      /* @__PURE__ */ jsxs43(
        Button,
        {
          type: "button",
          variant: "outline",
          disabled: isFirstStep || isSubmitting,
          onClick: onPrevious,
          children: [
            /* @__PURE__ */ jsx80(ChevronLeft2, { className: "mr-1 h-4 w-4" }),
            previousLabel
          ]
        }
      ),
      isLastStep ? /* @__PURE__ */ jsx80(
        Button,
        {
          type: "button",
          disabled: !canProceed || isSubmitting,
          onClick: onSubmit,
          children: isSubmitting ? "Submitting..." : submitLabel
        }
      ) : /* @__PURE__ */ jsxs43(
        Button,
        {
          type: "button",
          disabled: !canProceed || isSubmitting,
          onClick: onNext,
          children: [
            nextLabel,
            /* @__PURE__ */ jsx80(ChevronRight4, { className: "ml-1 h-4 w-4" })
          ]
        }
      )
    ] })
  ] });
}

// src/design-system/templates/dashboard-template.tsx
import { jsx as jsx81, jsxs as jsxs44 } from "react/jsx-runtime";
function DashboardTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  metrics,
  charts,
  activity,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs44("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ jsx81(
      PageHeader,
      {
        title,
        description,
        badge,
        breadcrumbs,
        actions
      }
    ),
    metrics && /* @__PURE__ */ jsx81("section", { "aria-label": "Key Metrics", className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: metrics }),
    charts && /* @__PURE__ */ jsx81("section", { "aria-label": "Charts and Visualizations", className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7", children: charts }),
    activity && /* @__PURE__ */ jsx81("section", { "aria-label": "Recent Activity", className: "space-y-4", children: activity }),
    children && /* @__PURE__ */ jsx81("div", { className: "space-y-6", children })
  ] });
}

// src/design-system/templates/workspace-template.tsx
import { jsx as jsx82, jsxs as jsxs45 } from "react/jsx-runtime";
function WorkspaceTemplate({
  header,
  leftSidebar,
  rightSidebar,
  footer,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs45(
    "div",
    {
      className: cn(
        "flex h-screen w-full flex-col overflow-hidden bg-background text-foreground",
        className
      ),
      ...props,
      children: [
        header && /* @__PURE__ */ jsx82("header", { className: "flex h-14 shrink-0 items-center border-b px-4 bg-background z-10", children: header }),
        /* @__PURE__ */ jsxs45("div", { className: "flex flex-1 overflow-hidden", children: [
          leftSidebar && /* @__PURE__ */ jsx82("aside", { className: "hidden md:flex w-64 shrink-0 flex-col border-r bg-sidebar p-3 overflow-y-auto", children: leftSidebar }),
          /* @__PURE__ */ jsx82("main", { className: "flex flex-1 flex-col overflow-y-auto p-4 sm:p-6 bg-muted/20", children }),
          rightSidebar && /* @__PURE__ */ jsx82("aside", { className: "hidden lg:flex w-80 shrink-0 flex-col border-l bg-background p-4 overflow-y-auto", children: rightSidebar })
        ] }),
        footer && /* @__PURE__ */ jsx82("footer", { className: "flex h-10 shrink-0 items-center border-t px-4 text-xs text-muted-foreground bg-background", children: footer })
      ]
    }
  );
}

// src/design-system/templates/app-header.tsx
import { useEffect as useEffect10 } from "react";
import { Bell } from "lucide-react";
import { useRouter as useRouter2 } from "next/navigation";

// src/design-system/templates/header.tsx
import { useEffect as useEffect9, useState as useState9 } from "react";

// src/design-system/templates/app-logo.tsx
import { jsx as jsx83 } from "react/jsx-runtime";
function AppLogo({ className }) {
  const { toggleSidebar } = useSidebar();
  const team = sidebarData.teams[0];
  const Logo = team.logo;
  return /* @__PURE__ */ jsx83(
    Button,
    {
      type: "button",
      variant: "ghost",
      onClick: toggleSidebar,
      className: cn(
        "size-8 shrink-0 p-0 hover:bg-transparent sm:size-9",
        className
      ),
      "aria-label": "Open sidebar menu",
      children: /* @__PURE__ */ jsx83("div", { className: "flex size-full items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx83(Logo, { className: "size-4" }) })
    }
  );
}

// src/design-system/templates/header.tsx
import { jsx as jsx84, jsxs as jsxs46 } from "react/jsx-runtime";
function Header({ className, fixed, children, ...props }) {
  const [offset, setOffset] = useState9(0);
  useEffect9(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // Page header container: fixed mode me top par sticky behavior deta hai.
    /* @__PURE__ */ jsx84(
      "header",
      {
        className: cn(
          "z-50 h-16 shrink-0",
          fixed && "header-fixed peer/header sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
          offset > 10 && fixed ? "shadow-sm" : "shadow-none",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxs46(
          "div",
          {
            className: cn(
              // Header ke andar left-to-right UI controls/content align karne ke liye row layout.
              "relative flex h-full min-w-0 flex-nowrap items-center gap-1.5 overflow-hidden px-2 py-2 sm:gap-3 sm:px-4 md:gap-4",
              offset > 10 && fixed && "after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg"
            ),
            children: [
              /* @__PURE__ */ jsx84(AppLogo, { className: "shrink-0 md:hidden" }),
              children
            ]
          }
        )
      }
    )
  );
}

// src/stores/notification-store.ts
import { create as create2 } from "zustand";

// src/lib/supabase/client.ts
import { createBrowserClient as createBrowserClient2 } from "@supabase/ssr";
var clientSingleton2 = null;
function createClient2() {
  if (typeof window === "undefined") {
    return createBrowserClient2(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  if (!clientSingleton2) {
    clientSingleton2 = createBrowserClient2(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  return clientSingleton2;
}

// src/stores/notification-store.ts
var activeChannel = null;
var useNotificationStore = create2((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  fetchNotifications: async (userId) => {
    set({ isLoading: true });
    const supabase = createClient2();
    try {
      const { data: data2, error } = await supabase.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false });
      if (error) throw error;
      const notifications = data2 || [];
      const unreadCount = notifications.filter((n) => !n.read).length;
      set({ notifications, unreadCount });
    } catch (e) {
      console.error("[NotificationStore] Failed to fetch notifications:", e);
    } finally {
      set({ isLoading: false });
    }
  },
  markAsRead: async (notificationId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map(
          (n) => n.id === notificationId ? { ...n, read: true } : n
        );
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark notification as read:", e);
    }
  },
  markAllAsRead: async (userId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("user_id", userId).eq("read", false);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map((n) => ({ ...n, read: true }));
        return { notifications: updated, unreadCount: 0 };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark all notifications as read:", e);
    }
  },
  deleteNotification: async (notificationId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").delete().eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.filter((n) => n.id !== notificationId);
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to delete notification:", e);
    }
  },
  subscribeToNotifications: (userId) => {
    if (activeChannel) {
      return;
    }
    const supabase = createClient2();
    activeChannel = supabase.channel(`notifications-user-${userId}`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "notifications",
        filter: `user_id=eq.${userId}`
      },
      (payload) => {
        const { eventType, new: newRecord, old: oldRecord } = payload;
        if (eventType === "INSERT") {
          const inserted = newRecord;
          set((state) => {
            if (state.notifications.some((n) => n.id === inserted.id)) {
              return {};
            }
            const updated = [inserted, ...state.notifications];
            const unreadCount = updated.filter((n) => !n.read).length;
            return { notifications: updated, unreadCount };
          });
        } else if (eventType === "UPDATE") {
          const updatedRecord = newRecord;
          set((state) => {
            const updated = state.notifications.map(
              (n) => n.id === updatedRecord.id ? updatedRecord : n
            );
            const unreadCount = updated.filter((n) => !n.read).length;
            return { notifications: updated, unreadCount };
          });
        } else if (eventType === "DELETE") {
          const deletedId = oldRecord.id;
          set((state) => {
            const updated = state.notifications.filter((n) => n.id !== deletedId);
            const unreadCount = updated.filter((n) => !n.read).length;
            return { notifications: updated, unreadCount };
          });
        }
      }
    ).subscribe();
  },
  unsubscribe: () => {
    if (activeChannel) {
      activeChannel.unsubscribe();
      activeChannel = null;
    }
  }
}));

// src/design-system/templates/app-header.tsx
import { Fragment as Fragment3, jsx as jsx85, jsxs as jsxs47 } from "react/jsx-runtime";
function AppHeader({
  title,
  fixed = true,
  iconsPosition = "right",
  children
}) {
  const router = useRouter2();
  const currentUser = useAuthStore((state) => state.auth.user);
  const { unreadCount, fetchNotifications, subscribeToNotifications, unsubscribe } = useNotificationStore();
  useEffect10(() => {
    if (currentUser) {
      fetchNotifications(currentUser.accountNo);
      subscribeToNotifications(currentUser.accountNo);
    }
    return () => {
      unsubscribe();
    };
  }, [currentUser, fetchNotifications, subscribeToNotifications, unsubscribe]);
  return /* @__PURE__ */ jsx85(Header, { fixed, className: "border-b bg-background", children: /* @__PURE__ */ jsx85("div", { className: "flex flex-1 items-center justify-between w-full", children: iconsPosition === "left" ? /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
    /* @__PURE__ */ jsx85("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ jsxs47("div", { className: "flex items-center gap-1 sm:gap-2 shrink-0 ml-1", children: [
      /* @__PURE__ */ jsx85(Search, { iconOnly: true }),
      children,
      /* @__PURE__ */ jsxs47(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ jsx85(Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ jsx85("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ jsxs47(Fragment3, { children: [
    /* @__PURE__ */ jsx85("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ jsxs47("div", { className: "ml-auto flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsx85(Search, { iconOnly: true }),
      children,
      /* @__PURE__ */ jsxs47(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ jsx85(Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ jsx85("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) }) });
}

// src/context/layout-provider.tsx
import { createContext as createContext9, useContext as useContext10, useState as useState10 } from "react";
import { jsx as jsx86 } from "react/jsx-runtime";
var LAYOUT_COLLAPSIBLE_COOKIE_NAME = "layout_collapsible";
var LAYOUT_VARIANT_COOKIE_NAME = "layout_variant";
var LAYOUT_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var DEFAULT_VARIANT = "inset";
var DEFAULT_COLLAPSIBLE = "icon";
var LayoutContext = createContext9(null);
function LayoutProvider({ children }) {
  const [collapsible, _setCollapsible] = useState10(() => {
    const saved = getCookie(LAYOUT_COLLAPSIBLE_COOKIE_NAME);
    return saved || DEFAULT_COLLAPSIBLE;
  });
  const [variant, _setVariant] = useState10(() => {
    const saved = getCookie(LAYOUT_VARIANT_COOKIE_NAME);
    return saved || DEFAULT_VARIANT;
  });
  const [showInlineNotFound, setShowInlineNotFound] = useState10(false);
  const setCollapsible = (newCollapsible) => {
    _setCollapsible(newCollapsible);
    setCookie(
      LAYOUT_COLLAPSIBLE_COOKIE_NAME,
      newCollapsible,
      LAYOUT_COOKIE_MAX_AGE
    );
  };
  const setVariant = (newVariant) => {
    _setVariant(newVariant);
    setCookie(LAYOUT_VARIANT_COOKIE_NAME, newVariant, LAYOUT_COOKIE_MAX_AGE);
  };
  const resetLayout = () => {
    setCollapsible(DEFAULT_COLLAPSIBLE);
    setVariant(DEFAULT_VARIANT);
  };
  const contextValue = {
    resetLayout,
    defaultCollapsible: DEFAULT_COLLAPSIBLE,
    collapsible,
    setCollapsible,
    defaultVariant: DEFAULT_VARIANT,
    variant,
    setVariant,
    showInlineNotFound,
    setShowInlineNotFound
  };
  return /* @__PURE__ */ jsx86(LayoutContext, { value: contextValue, children });
}
function useLayout() {
  const context = useContext10(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}

// src/design-system/templates/nav-group.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight as ChevronRight5, X as X2 } from "lucide-react";
import { jsx as jsx87, jsxs as jsxs48 } from "react/jsx-runtime";
function NavGroup({ title, items }) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  const href = usePathname();
  return /* @__PURE__ */ jsxs48(SidebarGroup, { className: cn(title === "Menu" && "pt-0"), children: [
    /* @__PURE__ */ jsxs48(
      SidebarGroupLabel,
      {
        className: cn(
          "flex items-center justify-between",
          title === "Menu" && state !== "collapsed" && "sticky top-0 z-20 bg-sidebar py-1.5"
        ),
        children: [
          /* @__PURE__ */ jsx87("span", { children: title }),
          title === "Menu" && !isMobile && /* @__PURE__ */ jsx87(
            SidebarTrigger,
            {
              variant: "ghost",
              className: "h-5 w-5",
              "aria-label": "Toggle sidebar"
            }
          ),
          title === "Menu" && isMobile && openMobile && /* @__PURE__ */ jsx87(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "size-6 shrink-0",
              "aria-label": "Close sidebar",
              onClick: () => setOpenMobile(false),
              children: /* @__PURE__ */ jsx87(X2, { className: "size-4", "aria-hidden": "true" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx87(SidebarMenu, { children: items.map((item) => {
      const key = `${item.title}-${item.url}`;
      if (!item.items)
        return /* @__PURE__ */ jsx87(SidebarMenuLink, { item, href }, key);
      if (item.title === "Settings" && item.items.length === 0)
        return /* @__PURE__ */ jsx87(SidebarMenuSettings, { item }, key);
      if (state === "collapsed" && !isMobile)
        return /* @__PURE__ */ jsx87(SidebarMenuCollapsedDropdown, { item, href }, key);
      return /* @__PURE__ */ jsx87(SidebarMenuCollapsible, { item, href }, key);
    }) })
  ] });
}
function NavBadge({ children }) {
  return /* @__PURE__ */ jsx87(Badge, { className: "rounded-full px-1 py-0 text-xs", children });
}
function SidebarMenuLink({ item, href }) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ jsx87(SidebarMenuItem, { children: /* @__PURE__ */ jsx87(
    SidebarMenuButton,
    {
      asChild: true,
      isActive: checkIsActive(href, item),
      tooltip: item.title,
      children: /* @__PURE__ */ jsxs48(
        Link,
        {
          href: item.url,
          onClick: () => {
            setShowInlineNotFound(false);
            setOpenMobile(false);
          },
          children: [
            item.icon && /* @__PURE__ */ jsx87(item.icon, {}),
            /* @__PURE__ */ jsx87("span", { children: item.title }),
            item.badge && /* @__PURE__ */ jsx87(NavBadge, { children: item.badge })
          ]
        }
      )
    }
  ) });
}
function SidebarMenuSettings({ item }) {
  const { setOpenMobile } = useSidebar();
  const { showInlineNotFound, setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ jsx87(SidebarMenuItem, { children: /* @__PURE__ */ jsxs48(
    SidebarMenuButton,
    {
      tooltip: item.title,
      isActive: showInlineNotFound,
      onClick: () => {
        setShowInlineNotFound(true);
        setOpenMobile(false);
      },
      children: [
        item.icon && /* @__PURE__ */ jsx87(item.icon, {}),
        /* @__PURE__ */ jsx87("span", { children: item.title })
      ]
    }
  ) });
}
function SidebarMenuCollapsible({
  item,
  href
}) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ jsx87(
    Collapsible,
    {
      asChild: true,
      defaultOpen: checkIsActive(href, item, true),
      className: "group/collapsible",
      children: /* @__PURE__ */ jsxs48(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx87(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs48(SidebarMenuButton, { tooltip: item.title, children: [
          item.icon && /* @__PURE__ */ jsx87(item.icon, {}),
          /* @__PURE__ */ jsx87("span", { children: item.title }),
          item.badge && /* @__PURE__ */ jsx87(NavBadge, { children: item.badge }),
          /* @__PURE__ */ jsx87(ChevronRight5, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" })
        ] }) }),
        /* @__PURE__ */ jsx87(CollapsibleContent, { className: "CollapsibleContent", children: /* @__PURE__ */ jsx87(SidebarMenuSub, { children: item.items.map((subItem) => /* @__PURE__ */ jsx87(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx87(
          SidebarMenuSubButton,
          {
            asChild: true,
            isActive: checkIsActive(href, subItem),
            children: /* @__PURE__ */ jsxs48(
              Link,
              {
                href: subItem.url,
                onClick: () => {
                  setShowInlineNotFound(false);
                  setOpenMobile(false);
                },
                children: [
                  subItem.icon && /* @__PURE__ */ jsx87(subItem.icon, {}),
                  /* @__PURE__ */ jsx87("span", { children: subItem.title }),
                  subItem.badge && /* @__PURE__ */ jsx87(NavBadge, { children: subItem.badge })
                ]
              }
            )
          }
        ) }, subItem.title)) }) })
      ] })
    }
  );
}
function SidebarMenuCollapsedDropdown({
  item,
  href
}) {
  return /* @__PURE__ */ jsx87(SidebarMenuItem, { children: /* @__PURE__ */ jsxs48(DropdownMenu, { children: [
    /* @__PURE__ */ jsx87(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs48(
      SidebarMenuButton,
      {
        tooltip: item.title,
        isActive: checkIsActive(href, item),
        children: [
          item.icon && /* @__PURE__ */ jsx87(item.icon, {}),
          /* @__PURE__ */ jsx87("span", { children: item.title }),
          item.badge && /* @__PURE__ */ jsx87(NavBadge, { children: item.badge }),
          /* @__PURE__ */ jsx87(ChevronRight5, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs48(DropdownMenuContent, { side: "right", align: "start", sideOffset: 4, children: [
      /* @__PURE__ */ jsxs48(DropdownMenuLabel, { children: [
        item.title,
        " ",
        item.badge ? `(${item.badge})` : ""
      ] }),
      /* @__PURE__ */ jsx87(DropdownMenuSeparator, {}),
      item.items.map((sub) => /* @__PURE__ */ jsx87(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs48(
        Link,
        {
          href: sub.url,
          className: `${checkIsActive(href, sub) ? "bg-secondary" : ""}`,
          children: [
            sub.icon && /* @__PURE__ */ jsx87(sub.icon, {}),
            /* @__PURE__ */ jsx87("span", { className: "max-w-52 text-wrap", children: sub.title }),
            sub.badge && /* @__PURE__ */ jsx87("span", { className: "ms-auto text-xs", children: sub.badge })
          ]
        }
      ) }, `${sub.title}-${sub.url}`))
    ] })
  ] }) });
}
function checkIsActive(href, item, mainNav = false) {
  return href === item.url || // /endpint?search=param
  href.split("?")[0] === item.url || // endpoint
  !!item?.items?.filter((i) => i.url === href).length || // if child nav is active
  mainNav && href.split("/")[1] !== "" && href.split("/")[1] === item?.url?.split("/")[1];
}

// src/design-system/templates/team-switcher.tsx
import { jsx as jsx88, jsxs as jsxs49 } from "react/jsx-runtime";
function TeamSwitcher({ teams }) {
  useSidebar();
  const activeTeam = teams[0];
  return /* @__PURE__ */ jsx88(SidebarMenu, { children: /* @__PURE__ */ jsx88(SidebarMenuItem, { children: /* @__PURE__ */ jsxs49(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
      children: [
        /* @__PURE__ */ jsx88("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ jsx88(activeTeam.logo, { className: "size-4" }) }),
        /* @__PURE__ */ jsxs49("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
          /* @__PURE__ */ jsx88("span", { className: "truncate font-semibold", children: activeTeam.name }),
          /* @__PURE__ */ jsx88("span", { className: "truncate text-xs", children: activeTeam.plan })
        ] })
      ]
    }
  ) }) });
}

// src/design-system/templates/nav-user.tsx
import {
  ChevronsUpDown,
  LogOut,
  Settings as Settings2,
  Palette as Palette2
} from "lucide-react";

// src/hooks/use-dialog-state.tsx
import { useState as useState11 } from "react";
function useDialogState(initialState2 = null) {
  const [open, _setOpen] = useState11(initialState2);
  const setOpen = (str) => _setOpen((prev) => prev === str ? null : str);
  return [open, setOpen];
}

// src/design-system/components/business/config-drawer.tsx
import { useState as useState12 } from "react";
import { Root as Radio, Item as Item2 } from "@radix-ui/react-radio-group";
import { Check as Check4, CircleCheck, RotateCcw, Search as Search2, Settings } from "lucide-react";

// src/assets/custom/icon-theme-dark.tsx
import { jsx as jsx89, jsxs as jsxs50 } from "react/jsx-runtime";
function IconThemeDark(props) {
  return /* @__PURE__ */ jsxs50(
    "svg",
    {
      "data-name": "icon-theme-dark",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      ...props,
      children: [
        /* @__PURE__ */ jsxs50("g", { fill: "#1d2b3f", children: [
          /* @__PURE__ */ jsx89("rect", { x: 0.53, y: 0.5, width: 78.83, height: 50.14, rx: 3.5, ry: 3.5 }),
          /* @__PURE__ */ jsx89("path", { d: "M75.86 1c1.65 0 3 1.35 3 3v43.14c0 1.65-1.35 3-3 3H4.03c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3h71.83m0-1H4.03c-2.21 0-4 1.79-4 4v43.14c0 2.21 1.79 4 4 4h71.83c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" })
        ] }),
        /* @__PURE__ */ jsx89(
          "path",
          {
            d: "M22.88 0h52.97c2.21 0 4 1.79 4 4v43.14c0 2.21-1.79 4-4 4H22.88V0z",
            fill: "#0d1628"
          }
        ),
        /* @__PURE__ */ jsx89("circle", { cx: 6.7, cy: 7.04, r: 3.54, fill: "#426187" }),
        /* @__PURE__ */ jsx89(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1zM18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05zM15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91zM16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#426187"
          }
        ),
        /* @__PURE__ */ jsxs50("g", { fill: "#2a62bc", children: [
          /* @__PURE__ */ jsx89(
            "rect",
            {
              x: 33.36,
              y: 19.73,
              width: 2.75,
              height: 3.42,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.32
            }
          ),
          /* @__PURE__ */ jsx89(
            "rect",
            {
              x: 29.64,
              y: 16.57,
              width: 2.75,
              height: 6.58,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.44
            }
          ),
          /* @__PURE__ */ jsx89(
            "rect",
            {
              x: 37.16,
              y: 14.44,
              width: 2.75,
              height: 8.7,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          ),
          /* @__PURE__ */ jsx89(
            "rect",
            {
              x: 41.19,
              y: 10.75,
              width: 2.75,
              height: 12.4,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          )
        ] }),
        /* @__PURE__ */ jsx89("circle", { cx: 62.74, cy: 16.32, r: 8, fill: "#2f5491", opacity: 0.5 }),
        /* @__PURE__ */ jsx89(
          "path",
          {
            d: "M62.74 16.32l4.1-6.87c1.19.71 2.18 1.72 2.86 2.92s1.04 2.57 1.04 3.95h-8z",
            fill: "#2f5491",
            opacity: 0.74
          }
        ),
        /* @__PURE__ */ jsx89(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            fill: "#17273f"
          }
        )
      ]
    }
  );
}

// src/assets/custom/icon-theme-light.tsx
import { jsx as jsx90, jsxs as jsxs51 } from "react/jsx-runtime";
function IconThemeLight(props) {
  return /* @__PURE__ */ jsxs51(
    "svg",
    {
      "data-name": "icon-theme-light",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      ...props,
      children: [
        /* @__PURE__ */ jsxs51("g", { fill: "#d9d9d9", children: [
          /* @__PURE__ */ jsx90("rect", { x: 0.53, y: 0.5, width: 78.83, height: 50.14, rx: 3.5, ry: 3.5 }),
          /* @__PURE__ */ jsx90("path", { d: "M75.86 1c1.65 0 3 1.35 3 3v43.14c0 1.65-1.35 3-3 3H4.03c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3h71.83m0-1H4.03c-2.21 0-4 1.79-4 4v43.14c0 2.21 1.79 4 4 4h71.83c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" })
        ] }),
        /* @__PURE__ */ jsx90(
          "path",
          {
            d: "M22.88 0h52.97c2.21 0 4 1.79 4 4v43.14c0 2.21-1.79 4-4 4H22.88V0z",
            fill: "#ecedef"
          }
        ),
        /* @__PURE__ */ jsx90("circle", { cx: 6.7, cy: 7.04, r: 3.54, fill: "#fff" }),
        /* @__PURE__ */ jsx90(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1zM18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05zM15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91zM16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#fff"
          }
        ),
        /* @__PURE__ */ jsxs51("g", { fill: "#c0c4c4", children: [
          /* @__PURE__ */ jsx90(
            "rect",
            {
              x: 33.36,
              y: 19.73,
              width: 2.75,
              height: 3.42,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.32
            }
          ),
          /* @__PURE__ */ jsx90(
            "rect",
            {
              x: 29.64,
              y: 16.57,
              width: 2.75,
              height: 6.58,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.44
            }
          ),
          /* @__PURE__ */ jsx90(
            "rect",
            {
              x: 37.16,
              y: 14.44,
              width: 2.75,
              height: 8.7,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          ),
          /* @__PURE__ */ jsx90(
            "rect",
            {
              x: 41.19,
              y: 10.75,
              width: 2.75,
              height: 12.4,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          )
        ] }),
        /* @__PURE__ */ jsx90("circle", { cx: 62.74, cy: 16.32, r: 8, fill: "#fff" }),
        /* @__PURE__ */ jsxs51("g", { fill: "#d9d9d9", children: [
          /* @__PURE__ */ jsx90("path", { d: "M63.62 15.82L67 10.15c.93.64 1.7 1.48 2.26 2.47.56.98.89 2.08.96 3.21h-6.6z" }),
          /* @__PURE__ */ jsx90("path", { d: "M67.14 10.88a6.977 6.977 0 012.52 4.44h-5.17l2.65-4.44m-.31-1.43l-4.1 6.87h8c0-1.39-.36-2.75-1.04-3.95s-1.67-2.21-2.86-2.92z" })
        ] }),
        /* @__PURE__ */ jsx90(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            fill: "#fff"
          }
        )
      ]
    }
  );
}

// src/assets/custom/icon-theme-system.tsx
import { jsx as jsx91, jsxs as jsxs52 } from "react/jsx-runtime";
function IconThemeSystem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs52(
    "svg",
    {
      "data-name": "icon-theme-system",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      className: cn(
        "overflow-hidden rounded-[6px]",
        "fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx91("path", { opacity: 0.2, d: "M0 0.03H22.88V51.17H0z" }),
        /* @__PURE__ */ jsx91(
          "circle",
          {
            cx: 6.7,
            cy: 7.04,
            r: 3.54,
            fill: "#fff",
            opacity: 0.8,
            stroke: "#fff",
            strokeLinecap: "round",
            strokeMiterlimit: 10
          }
        ),
        /* @__PURE__ */ jsx91(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.75
          }
        ),
        /* @__PURE__ */ jsx91(
          "path",
          {
            d: "M18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.72
          }
        ),
        /* @__PURE__ */ jsx91(
          "path",
          {
            d: "M15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.55
          }
        ),
        /* @__PURE__ */ jsx91(
          "path",
          {
            d: "M16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.67
          }
        ),
        /* @__PURE__ */ jsx91(
          "rect",
          {
            x: 33.36,
            y: 19.73,
            width: 2.75,
            height: 3.42,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.31,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsx91(
          "rect",
          {
            x: 29.64,
            y: 16.57,
            width: 2.75,
            height: 6.58,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.4,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsx91(
          "rect",
          {
            x: 37.16,
            y: 14.44,
            width: 2.75,
            height: 8.7,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.26,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsx91(
          "rect",
          {
            x: 41.19,
            y: 10.75,
            width: 2.75,
            height: 12.4,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.37,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsxs52("g", { children: [
          /* @__PURE__ */ jsx91("circle", { cx: 62.74, cy: 16.32, r: 8, opacity: 0.25 }),
          /* @__PURE__ */ jsx91(
            "path",
            {
              d: "M62.74 16.32l4.1-6.87c1.19.71 2.18 1.72 2.86 2.92s1.04 2.57 1.04 3.95h-8z",
              opacity: 0.45
            }
          )
        ] }),
        /* @__PURE__ */ jsx91(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            opacity: 0.3,
            stroke: "none",
            strokeLinecap: "round",
            strokeMiterlimit: 10
          }
        )
      ]
    }
  );
}

// src/design-system/components/business/config-drawer.tsx
import { jsx as jsx92, jsxs as jsxs53 } from "react/jsx-runtime";
function ConfigDrawer({
  trigger
}) {
  const { resetTheme } = useTheme2();
  const { resetColorTheme } = useColorTheme();
  const handleReset = () => {
    resetTheme();
    resetColorTheme();
  };
  return /* @__PURE__ */ jsxs53(Sheet, { children: [
    /* @__PURE__ */ jsx92(SheetTrigger, { asChild: true, children: trigger ?? /* @__PURE__ */ jsx92(
      Button,
      {
        size: "icon",
        variant: "ghost",
        "aria-label": "Open theme settings",
        className: "rounded-full",
        children: /* @__PURE__ */ jsx92(Settings, { "aria-hidden": "true" })
      }
    ) }),
    /* @__PURE__ */ jsxs53(SheetContent, { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs53(SheetHeader, { className: "pb-0 text-start", children: [
        /* @__PURE__ */ jsx92(SheetTitle, { children: "Theme Settings" }),
        /* @__PURE__ */ jsx92(SheetDescription, { children: "Customize the look and feel of your dashboard." })
      ] }),
      /* @__PURE__ */ jsxs53("div", { className: "flex flex-1 flex-col gap-6 overflow-hidden px-4", children: [
        /* @__PURE__ */ jsx92(ThemeConfig, {}),
        /* @__PURE__ */ jsx92(ThemeListSelector, {})
      ] }),
      /* @__PURE__ */ jsx92(SheetFooter, { className: "gap-2", children: /* @__PURE__ */ jsx92(
        Button,
        {
          variant: "destructive",
          onClick: handleReset,
          children: "Reset"
        }
      ) })
    ] })
  ] });
}
function SectionTitle({
  title,
  showReset = false,
  onReset,
  resetAriaLabel,
  className
}) {
  return /* @__PURE__ */ jsxs53(
    "div",
    {
      className: cn(
        "mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground",
        className
      ),
      children: [
        title,
        showReset && onReset && /* @__PURE__ */ jsx92(
          Button,
          {
            type: "button",
            size: "icon",
            variant: "secondary",
            className: "size-4 rounded-full",
            onClick: onReset,
            "aria-label": resetAriaLabel,
            children: /* @__PURE__ */ jsx92(RotateCcw, { className: "size-3" })
          }
        )
      ]
    }
  );
}
function RadioGroupItem2({
  item,
  isTheme = false
}) {
  return /* @__PURE__ */ jsxs53(
    Item2,
    {
      value: item.value,
      className: cn("group outline-none", "transition duration-200 ease-in"),
      "aria-label": `Select ${item.label.toLowerCase()}`,
      "aria-describedby": `${item.value}-description`,
      children: [
        /* @__PURE__ */ jsxs53(
          "div",
          {
            className: cn(
              "relative rounded-[6px] ring-[1px] ring-border",
              "group-data-[state=checked]:shadow-2xl group-data-[state=checked]:ring-primary",
              "group-focus-visible:ring-2"
            ),
            role: "img",
            "aria-hidden": "false",
            "aria-label": `${item.label} option preview`,
            children: [
              /* @__PURE__ */ jsx92(
                CircleCheck,
                {
                  className: cn(
                    "size-6 fill-primary stroke-white",
                    "group-data-[state=unchecked]:hidden",
                    "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                  ),
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx92(
                item.icon,
                {
                  className: cn(
                    !isTheme && "fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground"
                  ),
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx92(
          "div",
          {
            className: "mt-1 text-xs",
            id: `${item.value}-description`,
            "aria-live": "polite",
            children: item.label
          }
        )
      ]
    }
  );
}
function ThemeConfig() {
  const { defaultTheme, theme, setTheme } = useTheme2();
  return /* @__PURE__ */ jsxs53("div", { children: [
    /* @__PURE__ */ jsx92(
      SectionTitle,
      {
        title: "Theme",
        showReset: theme !== defaultTheme,
        onReset: () => setTheme(defaultTheme),
        resetAriaLabel: "Reset theme preference to default"
      }
    ),
    /* @__PURE__ */ jsx92(
      Radio,
      {
        value: theme,
        onValueChange: setTheme,
        className: "grid w-full max-w-md grid-cols-3 gap-4",
        "aria-label": "Select theme preference",
        "aria-describedby": "theme-description",
        children: [
          {
            value: "system",
            label: "System",
            icon: IconThemeSystem
          },
          {
            value: "light",
            label: "Light",
            icon: IconThemeLight
          },
          {
            value: "dark",
            label: "Dark",
            icon: IconThemeDark
          }
        ].map((item) => /* @__PURE__ */ jsx92(RadioGroupItem2, { item, isTheme: true }, item.value))
      }
    ),
    /* @__PURE__ */ jsx92("div", { id: "theme-description", className: "sr-only", children: "Choose between system preference, light mode, or dark mode" })
  ] });
}
function ThemeListSelector() {
  const [search, setSearch] = useState12("");
  const { colorTheme, setColorTheme } = useColorTheme();
  const filtered = colorThemes.filter(
    (t) => t.label.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ jsxs53("div", { className: "flex min-h-0 flex-1 flex-col", children: [
    /* @__PURE__ */ jsx92(
      SectionTitle,
      {
        title: "Color Theme",
        showReset: colorTheme !== DEFAULT_COLOR_THEME,
        onReset: () => setColorTheme(DEFAULT_COLOR_THEME),
        resetAriaLabel: "Reset color theme to default"
      }
    ),
    /* @__PURE__ */ jsxs53("div", { className: "relative mb-2.5", children: [
      /* @__PURE__ */ jsx92(Search2, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsx92(
        "input",
        {
          type: "text",
          placeholder: "Search themes...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: cn(
            "w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring",
            "transition-colors"
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs53("p", { className: "mb-2 text-xs text-muted-foreground font-medium", children: [
      filtered.length,
      " theme",
      filtered.length !== 1 ? "s" : "",
      " available"
    ] }),
    /* @__PURE__ */ jsxs53(
      "div",
      {
        className: "flex-1 space-y-1 overflow-y-auto rounded-lg pr-1",
        role: "radiogroup",
        "aria-label": "Select color theme",
        children: [
          filtered.length === 0 && /* @__PURE__ */ jsx92("p", { className: "py-8 text-center text-sm text-muted-foreground", children: "No themes found" }),
          filtered.map((ct) => /* @__PURE__ */ jsxs53(
            "button",
            {
              onClick: () => setColorTheme(ct.name),
              role: "radio",
              "aria-checked": colorTheme === ct.name,
              "aria-label": `Select ${ct.label} theme`,
              className: cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 cursor-pointer",
                colorTheme === ct.name ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-accent/80 hover:text-foreground border border-transparent hover:border-border/40"
              ),
              children: [
                /* @__PURE__ */ jsx92("div", { className: "flex gap-1.5 shrink-0", children: ct.colors.map((color, i) => /* @__PURE__ */ jsx92(
                  "span",
                  {
                    className: cn(
                      "size-3.5 rounded-full shadow-xs transition-transform hover:scale-110",
                      colorTheme === ct.name ? "ring-1 ring-primary-foreground/40" : "ring-1 ring-border/50"
                    ),
                    style: { backgroundColor: color }
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxs53("div", { className: "flex items-center gap-1.5 truncate", children: [
                  /* @__PURE__ */ jsx92("span", { className: "text-sm font-medium truncate", children: ct.label }),
                  ct.category === "tweakcn" && /* @__PURE__ */ jsx92(
                    "span",
                    {
                      className: cn(
                        "rounded px-1.5 py-0.2 text-[9px] font-semibold tracking-wider uppercase",
                        colorTheme === ct.name ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
                      )
                    }
                  )
                ] }),
                colorTheme === ct.name && /* @__PURE__ */ jsx92(Check4, { className: "ml-auto size-4 shrink-0", strokeWidth: 3 })
              ]
            },
            ct.name
          ))
        ]
      }
    )
  ] });
}

// src/design-system/templates/nav-user.tsx
import { Fragment as Fragment4, jsx as jsx93, jsxs as jsxs54 } from "react/jsx-runtime";
function NavUser({ user: fallbackUser }) {
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();
  const { auth } = useAuthStore();
  const userName = auth.user?.name || auth.user?.email?.split("@")[0] || fallbackUser.name;
  const userEmail = auth.user?.email || fallbackUser.email;
  const userAvatar = auth.user?.picture || fallbackUser.avatar;
  const userInitials = userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ jsxs54(Fragment4, { children: [
    /* @__PURE__ */ jsx93(SidebarMenu, { children: /* @__PURE__ */ jsx93(SidebarMenuItem, { children: /* @__PURE__ */ jsxs54(DropdownMenu, { modal: false, children: [
      /* @__PURE__ */ jsx93(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs54(
        SidebarMenuButton,
        {
          size: "lg",
          tooltip: userName,
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ jsxs54(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ jsx93(AvatarImage, { src: userAvatar, alt: userName }),
              /* @__PURE__ */ jsx93(AvatarFallback, { className: "rounded-lg", children: userInitials })
            ] }),
            /* @__PURE__ */ jsxs54("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
              /* @__PURE__ */ jsx93("span", { className: "truncate font-semibold", children: userName }),
              /* @__PURE__ */ jsx93("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
            ] }),
            /* @__PURE__ */ jsx93(ChevronsUpDown, { className: "ml-auto size-4 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs54(
        DropdownMenuContent,
        {
          className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
          side: isMobile ? "bottom" : "right",
          align: "end",
          sideOffset: 4,
          children: [
            /* @__PURE__ */ jsx93(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsxs54("div", { className: "flex items-center gap-2 px-1 py-1.5 text-start text-sm", children: [
              /* @__PURE__ */ jsxs54(Avatar, { className: "h-8 w-8 rounded-lg", children: [
                /* @__PURE__ */ jsx93(AvatarImage, { src: userAvatar, alt: userName }),
                /* @__PURE__ */ jsx93(AvatarFallback, { className: "rounded-lg", children: userInitials })
              ] }),
              /* @__PURE__ */ jsxs54("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
                /* @__PURE__ */ jsx93("span", { className: "truncate font-semibold", children: userName }),
                /* @__PURE__ */ jsx93("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx93(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx93(
              ConfigDrawer,
              {
                trigger: /* @__PURE__ */ jsxs54(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                  /* @__PURE__ */ jsx93(Palette2, { className: "mr-2 h-4 w-4" }),
                  "Theme"
                ] })
              }
            ),
            /* @__PURE__ */ jsx93(
              ConfigDrawer,
              {
                trigger: /* @__PURE__ */ jsxs54(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                  /* @__PURE__ */ jsx93(Settings2, { className: "mr-2 h-4 w-4" }),
                  "Setting"
                ] })
              }
            ),
            /* @__PURE__ */ jsx93(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsxs54(
              DropdownMenuItem,
              {
                variant: "destructive",
                onClick: () => setOpen(true),
                children: [
                  /* @__PURE__ */ jsx93(LogOut, { className: "mr-2 h-4 w-4" }),
                  "Sign out"
                ]
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx93(SignOutDialog, { open: !!open, onOpenChange: setOpen })
  ] });
}

// src/design-system/templates/app-sidebar.tsx
import { jsx as jsx94, jsxs as jsxs55 } from "react/jsx-runtime";
function AppSidebar() {
  const { collapsible } = useLayout();
  return /* @__PURE__ */ jsxs55(Sidebar, { collapsible, variant: "sidebar", children: [
    /* @__PURE__ */ jsxs55(SidebarHeader, { className: "p-2 pb-1", children: [
      /* @__PURE__ */ jsxs55("div", { className: "flex items-center justify-between gap-1", children: [
        /* @__PURE__ */ jsx94("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx94(TeamSwitcher, { teams: sidebarData.teams }) }),
        /* @__PURE__ */ jsx94("div", { className: "group-data-[collapsible=icon]:hidden shrink-0", children: /* @__PURE__ */ jsx94(
          SidebarTrigger,
          {
            variant: "ghost",
            className: "h-8 w-8 hover:bg-sidebar-accent text-sidebar-foreground",
            "aria-label": "Toggle sidebar"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx94("div", { className: "hidden group-data-[collapsible=icon]:flex justify-center pt-2 pb-1", children: /* @__PURE__ */ jsx94(
        SidebarTrigger,
        {
          variant: "ghost",
          className: "h-8 w-8 hover:bg-sidebar-accent text-sidebar-foreground",
          "aria-label": "Toggle sidebar"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx94(SidebarContent, { children: sidebarData.navGroups.map((props) => /* @__PURE__ */ jsx94(NavGroup, { ...props }, props.title)) }),
    /* @__PURE__ */ jsx94(SidebarFooter, { children: /* @__PURE__ */ jsx94(NavUser, { user: sidebarData.user }) })
  ] });
}

// src/design-system/templates/app-title.tsx
import Link2 from "next/link";
import { Menu, X as X3 } from "lucide-react";
import { jsx as jsx95, jsxs as jsxs56 } from "react/jsx-runtime";
function AppTitle() {
  const { setOpenMobile } = useSidebar();
  return /* @__PURE__ */ jsx95(SidebarMenu, { children: /* @__PURE__ */ jsx95(SidebarMenuItem, { children: /* @__PURE__ */ jsx95(
    SidebarMenuButton,
    {
      size: "lg",
      className: "gap-0 py-0 hover:bg-transparent active:bg-transparent",
      asChild: true,
      children: /* @__PURE__ */ jsxs56("div", { children: [
        /* @__PURE__ */ jsxs56(
          Link2,
          {
            href: "/",
            onClick: () => setOpenMobile(false),
            className: "grid flex-1 text-start text-sm leading-tight",
            children: [
              /* @__PURE__ */ jsx95("span", { className: "truncate font-bold", children: "Shadcn-Admin" }),
              /* @__PURE__ */ jsx95("span", { className: "truncate text-xs", children: "Vite + ShadcnUI" })
            ]
          }
        ),
        /* @__PURE__ */ jsx95(ToggleSidebar, {})
      ] })
    }
  ) }) });
}
function ToggleSidebar({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs56(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("aspect-square size-8 max-md:scale-125", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx95(X3, { className: "md:hidden" }),
        /* @__PURE__ */ jsx95(Menu, { className: "max-md:hidden" }),
        /* @__PURE__ */ jsx95("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}

// src/design-system/templates/authenticated-layout.tsx
import { useEffect as useEffect11, useState as useState13 } from "react";
import { usePathname as usePathname2 } from "next/navigation";

// src/components/skip-to-main.tsx
import { jsx as jsx96 } from "react/jsx-runtime";
function SkipToMain() {
  return /* @__PURE__ */ jsx96(
    "a",
    {
      className: `fixed inset-s-44 z-999 -translate-y-52 bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground opacity-95 shadow-sm transition hover:bg-primary/90 focus:translate-y-3 focus:transform focus-visible:ring-1 focus-visible:ring-ring`,
      href: "#content",
      children: "Skip to Main"
    }
  );
}

// src/features/errors/not-found-error.tsx
import { useRouter as useRouter3 } from "next/navigation";
import { jsx as jsx97, jsxs as jsxs57 } from "react/jsx-runtime";
function NotFoundError({
  className,
  embedded = false,
  onDismiss
}) {
  const router = useRouter3();
  const handleGoBack = () => {
    if (onDismiss) {
      onDismiss();
      return;
    }
    router.back();
  };
  const handleGoHome = () => {
    if (onDismiss) onDismiss();
    router.push("/");
  };
  return /* @__PURE__ */ jsx97("div", { className: cn(embedded ? "min-h-96 w-full py-8" : "h-svh", className), children: /* @__PURE__ */ jsxs57("div", { className: "m-auto flex h-full w-full flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsx97(
      "h1",
      {
        className: cn(
          "leading-tight font-bold",
          embedded ? "text-6xl" : "text-[7rem]"
        ),
        children: "404"
      }
    ),
    /* @__PURE__ */ jsx97("span", { className: "font-medium", children: "Oops! Page Not Found :-(!" }),
    /* @__PURE__ */ jsxs57("p", { className: "text-center text-muted-foreground", children: [
      "It seems like the page you're looking for ",
      /* @__PURE__ */ jsx97("br", {}),
      "does not exist or might have been removed."
    ] }),
    /* @__PURE__ */ jsxs57("div", { className: "mt-6 flex gap-4", children: [
      /* @__PURE__ */ jsx97(Button, { variant: "outline", onClick: handleGoBack, children: "Go Back" }),
      /* @__PURE__ */ jsx97(Button, { onClick: handleGoHome, children: "Back to Home" })
    ] })
  ] }) });
}

// src/design-system/templates/authenticated-layout.tsx
import { Fragment as Fragment5, jsx as jsx98, jsxs as jsxs58 } from "react/jsx-runtime";
function AuthenticatedLayoutContent({ children }) {
  const { showInlineNotFound, setShowInlineNotFound } = useLayout();
  const pathname = usePathname2();
  useEffect11(() => {
    setShowInlineNotFound(false);
  }, [pathname, setShowInlineNotFound]);
  return /* @__PURE__ */ jsxs58(Fragment5, { children: [
    /* @__PURE__ */ jsx98(SkipToMain, {}),
    /* @__PURE__ */ jsx98(AppSidebar, {}),
    /* @__PURE__ */ jsx98(
      SidebarInset,
      {
        className: cn(
          "@container/content flex min-h-svh flex-1 flex-col overflow-hidden",
          "has-[[data-layout=fixed]]:h-svh has-data-[layout=fixed]:h-svh",
          "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]"
        ),
        children: showInlineNotFound ? /* @__PURE__ */ jsx98(
          NotFoundError,
          {
            embedded: true,
            onDismiss: () => setShowInlineNotFound(false)
          }
        ) : children
      }
    )
  ] });
}
function AuthenticatedLayout({ children }) {
  const [defaultOpen, setDefaultOpen] = useState13(true);
  const [isMounted, setIsMounted] = useState13(false);
  useEffect11(() => {
    setDefaultOpen(getCookie("sidebar_state") !== "false");
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ jsx98(SearchProvider, { children: /* @__PURE__ */ jsx98(LayoutProvider, { children: /* @__PURE__ */ jsx98(SidebarProvider, { defaultOpen, children: /* @__PURE__ */ jsx98(AuthenticatedLayoutContent, { children }) }) }) });
}

// src/design-system/templates/main.tsx
import { jsx as jsx99 } from "react/jsx-runtime";
function Main({ fixed, className, fluid, ...props }) {
  return /* @__PURE__ */ jsx99(
    "main",
    {
      "data-layout": fixed ? "fixed" : "auto",
      className: cn(
        "px-4 py-6",
        // If layout is fixed, make the main container flex and grow
        fixed && "flex grow flex-col min-h-0 overflow-hidden",
        // Standard full width to avoid left-side offset/gap next to sidebar
        "w-full",
        className
      ),
      ...props
    }
  );
}

// src/design-system/templates/sidebar-search.tsx
import { SearchIcon as SearchIcon4 } from "lucide-react";
import { jsx as jsx100, jsxs as jsxs59 } from "react/jsx-runtime";
function SidebarSearch() {
  const { setOpen } = useSearch();
  return /* @__PURE__ */ jsx100(SidebarMenu, { children: /* @__PURE__ */ jsx100(SidebarMenuItem, { children: /* @__PURE__ */ jsxs59(
    SidebarMenuButton,
    {
      onClick: () => setOpen(true),
      tooltip: "Search (\u2318K)",
      className: "bg-sidebar-accent/50 hover:bg-sidebar-accent border border-sidebar-border/60 text-muted-foreground hover:text-foreground",
      children: [
        /* @__PURE__ */ jsx100(SearchIcon4, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ jsx100("span", { className: "flex-1 text-left text-xs font-normal group-data-[collapsible=icon]:hidden", children: "Search..." }),
        /* @__PURE__ */ jsxs59("kbd", { className: "pointer-events-none hidden h-4 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 group-data-[collapsible=icon]:hidden sm:flex", children: [
          /* @__PURE__ */ jsx100("span", { className: "text-[10px]", children: "\u2318" }),
          "K"
        ] })
      ]
    }
  ) }) });
}

// src/design-system/templates/top-nav.tsx
import Link3 from "next/link";
import { Menu as Menu2 } from "lucide-react";
import { Fragment as Fragment6, jsx as jsx101, jsxs as jsxs60 } from "react/jsx-runtime";
function TopNav({ className, links, ...props }) {
  const renderLink = ({
    title,
    href,
    isActive,
    disabled,
    onClick
  }) => {
    const className2 = `text-sm font-medium transition-colors hover:text-primary ${isActive ? "" : "text-muted-foreground"}`;
    if (onClick) {
      return /* @__PURE__ */ jsx101(
        "button",
        {
          type: "button",
          onClick,
          disabled,
          className: className2,
          children: title
        },
        title
      );
    }
    return /* @__PURE__ */ jsx101(
      Link3,
      {
        href,
        className: className2,
        style: disabled ? { pointerEvents: "none", opacity: 0.5 } : void 0,
        children: title
      },
      title
    );
  };
  return /* @__PURE__ */ jsxs60(Fragment6, { children: [
    /* @__PURE__ */ jsxs60(DropdownMenu, { modal: false, children: [
      /* @__PURE__ */ jsx101(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs60(
        Button,
        {
          size: "icon",
          variant: "outline",
          className: cn(
            "hidden size-8 shrink-0 md:inline-flex lg:hidden",
            className
          ),
          children: [
            /* @__PURE__ */ jsx101(Menu2, {}),
            /* @__PURE__ */ jsx101("span", { className: "sr-only", children: "Toggle navigation menu" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx101(DropdownMenuContent, { side: "bottom", align: "start", children: links.map((link) => /* @__PURE__ */ jsx101(
        DropdownMenuItem,
        {
          disabled: link.disabled,
          onClick: link.onClick,
          asChild: !link.onClick,
          children: link.onClick ? /* @__PURE__ */ jsx101("span", { className: !link.isActive ? "text-muted-foreground" : "", children: link.title }) : /* @__PURE__ */ jsx101(
            Link3,
            {
              href: link.href,
              className: !link.isActive ? "text-muted-foreground" : "",
              style: link.disabled ? { pointerEvents: "none", opacity: 0.5 } : void 0,
              children: link.title
            }
          )
        },
        link.title
      )) })
    ] }),
    /* @__PURE__ */ jsx101(
      "nav",
      {
        className: cn(
          "hidden items-center space-x-4 lg:flex lg:space-x-4 xl:space-x-6",
          className
        ),
        ...props,
        children: links.map((link) => renderLink(link))
      }
    )
  ] });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AppHeader,
  AppLogo,
  AppSidebar,
  AppTitle,
  AreaChartDemo,
  AspectRatio,
  AuthenticatedLayout,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  BarChartDemo,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  CHART_TOKENS,
  Calendar,
  CalendarDayButton,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ConfirmDialog,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DashboardTemplate,
  DataTable,
  DatePicker2 as DatePicker,
  DetailTemplate,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  FilterBar,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  FormTemplate,
  Header,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  Kbd,
  KbdGroup,
  Label,
  LineChartDemo,
  ListTemplate,
  LongText,
  Main,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MetricCard,
  NavGroup,
  NavUser,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PasswordInput,
  PieChartDemo,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Progress,
  QRCodeDisplay,
  QrCodeDisplay,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SEMANTIC_TOKENS,
  SIDEBAR_TOKENS,
  ScrollArea,
  ScrollBar,
  Search,
  Select,
  SelectContent,
  SelectDropdown,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSearch,
  SidebarSeparator,
  SidebarTrigger,
  SignOutDialog,
  Skeleton,
  Slider,
  Sonner,
  Spinner,
  Stats01,
  StatusBadge,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TeamSwitcher,
  Textarea,
  ThemeSelector,
  ThemeSwitch,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip2 as Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopNav,
  WizardTemplate,
  WorkspaceTemplate,
  badgeVariants,
  buttonGroupVariants,
  buttonVariants,
  downloadQrCode,
  navigationMenuTriggerStyle,
  sidebarData,
  statusBadgeVariants,
  tabsListVariants,
  toggleVariants,
  useFormField,
  useSidebar
};
//# sourceMappingURL=index.mjs.map
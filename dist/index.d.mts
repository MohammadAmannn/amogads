export { CHART_TOKENS, SEMANTIC_TOKENS, SIDEBAR_TOKENS } from './tokens.mjs';
import * as React$1 from 'react';
import React__default from 'react';
import { Accordion as Accordion$1, AlertDialog as AlertDialog$1, AspectRatio as AspectRatio$1, Avatar as Avatar$1, Separator as Separator$1, Checkbox as Checkbox$1, Collapsible as Collapsible$1, Dialog as Dialog$1, ContextMenu as ContextMenu$1, DropdownMenu as DropdownMenu$1, Label as Label$1, Slot, HoverCard as HoverCard$1, Menubar as Menubar$1, NavigationMenu as NavigationMenu$1, Popover as Popover$1, Progress as Progress$1, RadioGroup as RadioGroup$1, ScrollArea as ScrollArea$1, Select as Select$1, Tooltip as Tooltip$1, Slider as Slider$1, Switch as Switch$1, Tabs as Tabs$1, Toggle as Toggle$1, ToggleGroup as ToggleGroup$1 } from 'radix-ui';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { DayPicker, DayButton } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as RechartsPrimitive from 'recharts';
import { TooltipValueType } from 'recharts';
import { Command as Command$1 } from 'cmdk';
import { Drawer as Drawer$1 } from 'vaul';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { OTPInput } from 'input-otp';
import * as ResizablePrimitive from 'react-resizable-panels';
import { ToasterProps } from 'sonner';
export { Toaster as Sonner, ToasterProps } from 'sonner';

declare function Accordion({ ...props }: React$1.ComponentProps<typeof Accordion$1.Root>): React$1.JSX.Element;
declare function AccordionItem({ className, ...props }: React$1.ComponentProps<typeof Accordion$1.Item>): React$1.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React$1.ComponentProps<typeof Accordion$1.Trigger>): React$1.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React$1.ComponentProps<typeof Accordion$1.Content>): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Root>): React$1.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Trigger>): React$1.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Portal>): React$1.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Overlay>): React$1.JSX.Element;
declare function AlertDialogContent({ className, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Content> & {
    size?: "default" | "sm";
}): React$1.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Title>): React$1.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Description>): React$1.JSX.Element;
declare function AlertDialogMedia({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogAction({ className, variant, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Action> & Pick<React$1.ComponentProps<typeof Button>, "variant" | "size">): React$1.JSX.Element;
declare function AlertDialogCancel({ className, variant, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Cancel> & Pick<React$1.ComponentProps<typeof Button>, "variant" | "size">): React$1.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React$1.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatio$1.Root>): React$1.JSX.Element;

declare function Avatar({ className, size, ...props }: React$1.ComponentProps<typeof Avatar$1.Root> & {
    size?: "default" | "sm" | "lg";
}): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Fallback>): React$1.JSX.Element;
declare function AvatarBadge({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function AvatarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Breadcrumb({ ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React$1.ComponentProps<"ol">): React$1.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>): React$1.JSX.Element;
declare function ButtonGroupText({ className, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): React$1.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>["variant"];
}): React$1.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React$1.ComponentProps<typeof DayButton>): React$1.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React$1.ComponentProps<"div"> & CarouselProps): React$1.JSX.Element;
declare function CarouselContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CarouselPrevious({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function CarouselNext({ className, variant, size, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type TooltipNameType = number | string;
type ChartConfig = Record<string, {
    label?: React$1.ReactNode;
    icon?: React$1.ComponentType;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: Record<keyof typeof THEMES, string>;
})>;
declare function ChartContainer({ id, className, children, config, initialDimension, ...props }: React$1.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
    initialDimension?: {
        width: number;
        height: number;
    };
}): React$1.JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React$1.ComponentProps<typeof RechartsPrimitive.Tooltip> & React$1.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
} & Omit<RechartsPrimitive.DefaultTooltipContentProps<TooltipValueType, TooltipNameType>, "accessibilityLayer">): React$1.JSX.Element | null;
declare const ChartLegend: React$1.MemoExoticComponent<(outsideProps: RechartsPrimitive.LegendProps) => React$1.ReactPortal | null>;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React$1.ComponentProps<"div"> & {
    hideIcon?: boolean;
    nameKey?: string;
} & RechartsPrimitive.DefaultLegendContentProps): React$1.JSX.Element | null;

declare function AreaChartDemo({ className }: {
    className?: string;
}): React$1.JSX.Element;
declare function BarChartDemo({ className }: {
    className?: string;
}): React$1.JSX.Element;
declare function LineChartDemo({ className }: {
    className?: string;
}): React$1.JSX.Element;
declare function PieChartDemo({ className }: {
    className?: string;
}): React$1.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof Checkbox$1.Root>): React$1.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof Collapsible$1.Root>): React$1.JSX.Element;
declare function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof Collapsible$1.CollapsibleTrigger>): React$1.JSX.Element;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof Collapsible$1.CollapsibleContent>): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof Dialog$1.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React$1.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function Command({ className, ...props }: React$1.ComponentProps<typeof Command$1>): React$1.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function CommandInput({ className, ...props }: React$1.ComponentProps<typeof Command$1.Input>): React$1.JSX.Element;
declare function CommandList({ className, ...props }: React$1.ComponentProps<typeof Command$1.List>): React$1.JSX.Element;
declare function CommandEmpty({ ...props }: React$1.ComponentProps<typeof Command$1.Empty>): React$1.JSX.Element;
declare function CommandGroup({ className, ...props }: React$1.ComponentProps<typeof Command$1.Group>): React$1.JSX.Element;
declare function CommandSeparator({ className, ...props }: React$1.ComponentProps<typeof Command$1.Separator>): React$1.JSX.Element;
declare function CommandItem({ className, ...props }: React$1.ComponentProps<typeof Command$1.Item>): React$1.JSX.Element;
declare function CommandShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function ContextMenu({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Root>): React$1.JSX.Element;
declare function ContextMenuTrigger({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Trigger>): React$1.JSX.Element;
declare function ContextMenuGroup({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Group>): React$1.JSX.Element;
declare function ContextMenuPortal({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Portal>): React$1.JSX.Element;
declare function ContextMenuSub({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Sub>): React$1.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.RadioGroup>): React$1.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof ContextMenu$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.SubContent>): React$1.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Content>): React$1.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof ContextMenu$1.CheckboxItem>): React$1.JSX.Element;
declare function ContextMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof ContextMenu$1.RadioItem>): React$1.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Separator>): React$1.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Drawer({ ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): React$1.JSX.Element;
declare function DrawerTrigger({ ...props }: React$1.ComponentProps<typeof Drawer$1.Trigger>): React$1.JSX.Element;
declare function DrawerPortal({ ...props }: React$1.ComponentProps<typeof Drawer$1.Portal>): React$1.JSX.Element;
declare function DrawerClose({ ...props }: React$1.ComponentProps<typeof Drawer$1.Close>): React$1.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Overlay>): React$1.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React$1.ComponentProps<typeof Drawer$1.Content>): React$1.JSX.Element;
declare function DrawerHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerTitle({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Title>): React$1.JSX.Element;
declare function DrawerDescription({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.CheckboxItem>): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioItem>): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubContent>): React$1.JSX.Element;

declare function Empty({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyHeader({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>): React$1.JSX.Element;
declare function EmptyTitle({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyDescription({ className, ...props }: React.ComponentProps<"p">): React$1.JSX.Element;
declare function EmptyContent({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;

declare function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">): React$1.JSX.Element;
declare function FieldLegend({ className, variant, ...props }: React.ComponentProps<"legend"> & {
    variant?: "legend" | "label";
}): React$1.JSX.Element;
declare function FieldGroup({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Field({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>): React$1.JSX.Element;
declare function FieldContent({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): React$1.JSX.Element;
declare function FieldTitle({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldDescription({ className, ...props }: React.ComponentProps<"p">): React$1.JSX.Element;
declare function FieldSeparator({ children, className, ...props }: React.ComponentProps<"div"> & {
    children?: React.ReactNode;
}): React$1.JSX.Element;
declare function FieldError({ className, children, errors, ...props }: React.ComponentProps<"div"> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): React$1.JSX.Element | null;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>({ children, watch, getValues, getErrors, getFieldState, setError, clearErrors, setValue, setValues, trigger, formState, resetField, reset, resetDefaultValues, handleSubmit, unregister, control, register, setFocus, subscribe, }: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React$1.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FormLabel({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot.Root>): React$1.JSX.Element;
declare function FormDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element | null;

declare function HoverCard({ ...props }: React$1.ComponentProps<typeof HoverCard$1.Root>): React$1.JSX.Element;
declare function HoverCardTrigger({ ...props }: React$1.ComponentProps<typeof HoverCard$1.Trigger>): React$1.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof HoverCard$1.Content>): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function InputGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React$1.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React$1.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): React$1.JSX.Element;
declare function InputGroupText({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function InputGroupInput({ className, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): React$1.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): React$1.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function ItemGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare const itemVariants: (props?: ({
    variant?: "default" | "outline" | "muted" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Item({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare const itemMediaVariants: (props?: ({
    variant?: "image" | "default" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ItemMedia({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>): React$1.JSX.Element;
declare function ItemContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function ItemActions({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Kbd({ className, ...props }: React.ComponentProps<"kbd">): React$1.JSX.Element;
declare function KbdGroup({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Menubar({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Root>): React$1.JSX.Element;
declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof Menubar$1.Menu>): React$1.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof Menubar$1.Group>): React$1.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof Menubar$1.Portal>): React$1.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof Menubar$1.RadioGroup>): React$1.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Trigger>): React$1.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React$1.ComponentProps<typeof Menubar$1.Content>): React$1.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof Menubar$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof Menubar$1.CheckboxItem>): React$1.JSX.Element;
declare function MenubarRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof Menubar$1.RadioItem>): React$1.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React$1.ComponentProps<typeof Menubar$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Separator>): React$1.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof Menubar$1.Sub>): React$1.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof Menubar$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.SubContent>): React$1.JSX.Element;

declare function NavigationMenu({ className, children, viewport, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Root> & {
    viewport?: boolean;
}): React$1.JSX.Element;
declare function NavigationMenuList({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.List>): React$1.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Item>): React$1.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Trigger>): React$1.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Content>): React$1.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Viewport>): React$1.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Link>): React$1.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Indicator>): React$1.JSX.Element;

declare function Pagination({ className, ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function PaginationContent({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function PaginationItem({ ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React$1.ComponentProps<typeof Button>, "size"> & React$1.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): React$1.JSX.Element;
declare function PaginationPrevious({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
declare function PaginationNext({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof Popover$1.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof Popover$1.Trigger>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof Popover$1.Content>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof Popover$1.Anchor>): React$1.JSX.Element;
declare function PopoverHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function PopoverTitle({ className, ...props }: React$1.ComponentProps<"h2">): React$1.JSX.Element;
declare function PopoverDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;

declare function Progress({ className, value, ...props }: React$1.ComponentProps<typeof Progress$1.Root>): React$1.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Root>): React$1.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Item>): React$1.JSX.Element;

declare function ResizablePanelGroup({ className, ...props }: ResizablePrimitive.GroupProps): React$1.JSX.Element;
declare function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps): React$1.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: ResizablePrimitive.SeparatorProps & {
    withHandle?: boolean;
}): React$1.JSX.Element;

declare function ScrollArea({ className, children, ...props }: React$1.ComponentProps<typeof ScrollArea$1.Root>): React$1.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React$1.ComponentProps<typeof ScrollArea$1.ScrollAreaScrollbar>): React$1.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof Select$1.Root>): React$1.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof Select$1.Group>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof Select$1.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof Select$1.Trigger> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, align, ...props }: React$1.ComponentProps<typeof Select$1.Content>): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof Select$1.Label>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof Select$1.Item>): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof Select$1.Separator>): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollUpButton>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollDownButton>): React$1.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function SheetPortal({ ...props }: React$1.ComponentProps<typeof Dialog$1.Portal>): React$1.JSX.Element;
declare function SheetOverlay({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Overlay>): React$1.JSX.Element;
declare function SheetContent({ className, children, side, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    side?: "top" | "right" | "bottom" | "left";
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React$1.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): React$1.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function SidebarRail({ className, ...props }: React$1.ComponentProps<"button">): React$1.JSX.Element;
declare function SidebarInset({ className, ...props }: React$1.ComponentProps<"main">): React$1.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): React$1.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<"div"> & {
    showIcon?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React$1.ComponentProps<typeof Slider$1.Root>): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

declare function Spinner({ className, ...props }: React.ComponentProps<"svg">): React$1.JSX.Element;

declare function Switch({ className, size, ...props }: React$1.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({ className, ...props }: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({ className, ...props }: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({ className, ...props }: React$1.ComponentProps<"caption">): React$1.JSX.Element;

declare function Tabs({ className, orientation, ...props }: React$1.ComponentProps<typeof Tabs$1.Root>): React$1.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "line" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: React$1.ComponentProps<typeof Tabs$1.List> & VariantProps<typeof tabsListVariants>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Content>): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React$1.ComponentProps<typeof Toggle$1.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
}): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

interface PageHeaderProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    badge?: React$1.ReactNode;
    breadcrumbs?: React$1.ReactNode;
    actions?: React$1.ReactNode;
}
declare function PageHeader({ title, description, badge, breadcrumbs, actions, className, children, ...props }: PageHeaderProps): React$1.JSX.Element;

interface ColumnDef<T> {
    key: string;
    header: React$1.ReactNode;
    cell?: (row: T, index: number) => React$1.ReactNode;
    className?: string;
    headerClassName?: string;
}
interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    data: T[];
    isLoading?: boolean;
    loadingRowCount?: number;
    emptyTitle?: string;
    emptyDescription?: string;
    emptyIcon?: React$1.ReactNode;
    onRowClick?: (row: T) => void;
    keyExtractor?: (row: T, index: number) => string | number;
    pagination?: {
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        onPageChange: (page: number) => void;
    };
    className?: string;
}
declare function DataTable<T>({ columns, data, isLoading, loadingRowCount, emptyTitle, emptyDescription, emptyIcon, onRowClick, keyExtractor, pagination, className, }: DataTableProps<T>): React$1.JSX.Element;

declare const statusBadgeVariants: (props?: ({
    status?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "info" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatusBadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof statusBadgeVariants> {
    dot?: boolean;
    pulse?: boolean;
    icon?: React$1.ReactNode;
}
declare function StatusBadge({ status, size, dot, pulse, icon, className, children, ...props }: StatusBadgeProps): React$1.JSX.Element;

interface ActiveFilter {
    key: string;
    label: string;
    value: string;
    onRemove: () => void;
}
interface FilterBarProps {
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    filters?: React$1.ReactNode;
    activeFilters?: ActiveFilter[];
    onClearAll?: () => void;
    actions?: React$1.ReactNode;
    className?: string;
}
declare function FilterBar({ searchPlaceholder, searchValue, onSearchChange, filters, activeFilters, onClearAll, actions, className, }: FilterBarProps): React$1.JSX.Element;

interface FormSectionProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    separator?: boolean;
    columns?: 1 | 2 | 3 | 4;
}
declare function FormSection({ title, description, actions, separator, columns, className, children, ...props }: FormSectionProps): React$1.JSX.Element;

interface MetricCardProps extends React$1.HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string | number;
    description?: string;
    icon?: React$1.ComponentType<{
        className?: string;
    }> | React$1.ReactNode;
    change?: {
        value: string | number;
        trend?: 'up' | 'down' | 'neutral';
        label?: string;
    };
    footer?: React$1.ReactNode;
}
declare function MetricCard({ title, value, description, icon: Icon, change, footer, className, ...props }: MetricCardProps): React$1.JSX.Element;

type ConfirmDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: React.ReactNode;
    disabled?: boolean;
    desc: React.JSX.Element | string;
    cancelBtnText?: string;
    confirmText?: React.ReactNode;
    destructive?: boolean;
    isLoading?: boolean;
    className?: string;
    children?: React.ReactNode;
} & ({
    form: string;
    handleConfirm?: undefined;
} | {
    form?: undefined;
    handleConfirm: () => void;
});
declare function ConfirmDialog(props: ConfirmDialogProps): React$1.JSX.Element;

type PasswordInputProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    ref?: React$1.Ref<HTMLInputElement>;
};
declare function PasswordInput({ className, disabled, ref, ...props }: PasswordInputProps): React$1.JSX.Element;

interface SignOutDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
declare function SignOutDialog({ open, onOpenChange }: SignOutDialogProps): React$1.JSX.Element;

declare function ThemeSwitch(): React$1.JSX.Element;

declare function ThemeSelector(): React$1.JSX.Element;

type SelectDropdownProps = {
    onValueChange?: (value: string) => void;
    defaultValue: string | undefined;
    placeholder?: string;
    isPending?: boolean;
    items: {
        label: string;
        value: string;
    }[] | undefined;
    disabled?: boolean;
    className?: string;
    isControlled?: boolean;
};
declare function SelectDropdown({ defaultValue, onValueChange, isPending, items, placeholder, disabled, className, isControlled, }: SelectDropdownProps): React$1.JSX.Element;

type LongTextProps = {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
};
declare function LongText({ children, className, contentClassName, }: LongTextProps): React$1.JSX.Element;

declare function Search({ className, placeholder, iconOnly, ...props }: React.ComponentProps<'button'> & {
    placeholder?: string;
    iconOnly?: boolean;
}): React$1.JSX.Element;

declare function Stats01(): React$1.JSX.Element;

type DatePickerProps = {
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    placeholder?: string;
};
declare function DatePicker({ selected, onSelect, placeholder, }: DatePickerProps): React$1.JSX.Element;

interface QrCodeDisplayProps {
    value: string;
    size?: number;
    className?: string;
}
declare function QrCodeDisplay({ value, size, className }: QrCodeDisplayProps): React__default.JSX.Element;
declare const QRCodeDisplay: typeof QrCodeDisplay;

declare function downloadQrCode(value: string, filename: string, size?: number): Promise<void>;

interface ListTemplateProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    badge?: React$1.ReactNode;
    breadcrumbs?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (val: string) => void;
    filters?: React$1.ReactNode;
    activeFilters?: ActiveFilter[];
    onClearAllFilters?: () => void;
    filterActions?: React$1.ReactNode;
    children: React$1.ReactNode;
    footer?: React$1.ReactNode;
}
declare function ListTemplate({ title, description, badge, breadcrumbs, actions, searchPlaceholder, searchValue, onSearchChange, filters, activeFilters, onClearAllFilters, filterActions, children, footer, className, ...props }: ListTemplateProps): React$1.JSX.Element;

interface DetailTemplateProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    badge?: React$1.ReactNode;
    breadcrumbs?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    onBack?: () => void;
    backLabel?: string;
    highlights?: React$1.ReactNode;
    sidebar?: React$1.ReactNode;
    children: React$1.ReactNode;
}
declare function DetailTemplate({ title, description, badge, breadcrumbs, actions, onBack, backLabel, highlights, sidebar, children, className, ...props }: DetailTemplateProps): React$1.JSX.Element;

interface FormTemplateProps extends Omit<React$1.FormHTMLAttributes<HTMLFormElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    badge?: React$1.ReactNode;
    breadcrumbs?: React$1.ReactNode;
    onBack?: () => void;
    backLabel?: string;
    submitLabel?: string;
    cancelLabel?: string;
    onCancel?: () => void;
    isSubmitting?: boolean;
    stickyFooter?: boolean;
    secondaryActions?: React$1.ReactNode;
}
declare function FormTemplate({ title, description, badge, breadcrumbs, onBack, backLabel, submitLabel, cancelLabel, onCancel, isSubmitting, stickyFooter, secondaryActions, children, className, onSubmit, ...props }: FormTemplateProps): React$1.JSX.Element;

interface WizardStep {
    id: string | number;
    title: string;
    description?: string;
}
interface WizardTemplateProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    steps: WizardStep[];
    currentStepIndex: number;
    onStepChange?: (index: number) => void;
    onNext?: () => void;
    onPrevious?: () => void;
    onSubmit?: () => void;
    nextLabel?: string;
    previousLabel?: string;
    submitLabel?: string;
    isSubmitting?: boolean;
    canProceed?: boolean;
    children: React$1.ReactNode;
}
declare function WizardTemplate({ title, description, steps, currentStepIndex, onStepChange, onNext, onPrevious, onSubmit, nextLabel, previousLabel, submitLabel, isSubmitting, canProceed, children, className, ...props }: WizardTemplateProps): React$1.JSX.Element;

interface DashboardTemplateProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    badge?: React$1.ReactNode;
    breadcrumbs?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    metrics?: React$1.ReactNode;
    charts?: React$1.ReactNode;
    activity?: React$1.ReactNode;
    children?: React$1.ReactNode;
}
declare function DashboardTemplate({ title, description, badge, breadcrumbs, actions, metrics, charts, activity, children, className, ...props }: DashboardTemplateProps): React$1.JSX.Element;

interface WorkspaceTemplateProps extends React$1.HTMLAttributes<HTMLDivElement> {
    header?: React$1.ReactNode;
    leftSidebar?: React$1.ReactNode;
    rightSidebar?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    children: React$1.ReactNode;
}
declare function WorkspaceTemplate({ header, leftSidebar, rightSidebar, footer, children, className, ...props }: WorkspaceTemplateProps): React$1.JSX.Element;

type AppHeaderProps = {
    title: string;
    fixed?: boolean;
    iconsPosition?: 'left' | 'right';
    children?: React.ReactNode;
};
declare function AppHeader({ title, fixed, iconsPosition, children, }: AppHeaderProps): React$1.JSX.Element;

type AppLogoProps = {
    className?: string;
};
declare function AppLogo({ className }: AppLogoProps): React$1.JSX.Element;

declare function AppSidebar(): React$1.JSX.Element;

declare function AppTitle(): React$1.JSX.Element;

type AuthenticatedLayoutProps = {
    children?: React.ReactNode;
};
declare function AuthenticatedLayout({ children }: AuthenticatedLayoutProps): React$1.JSX.Element | null;

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
    fixed?: boolean;
    ref?: React.Ref<HTMLElement>;
};
declare function Header({ className, fixed, children, ...props }: HeaderProps): React$1.JSX.Element;

type MainProps = React.HTMLAttributes<HTMLElement> & {
    fixed?: boolean;
    fluid?: boolean;
    ref?: React.Ref<HTMLElement>;
};
declare function Main({ fixed, className, fluid, ...props }: MainProps): React$1.JSX.Element;

type User = {
    name: string;
    email: string;
    avatar: string;
};
type Team = {
    name: string;
    logo: React.ElementType;
    plan: string;
};
type BaseNavItem = {
    title: string;
    badge?: string;
    icon?: React.ElementType;
};
type NavLink = BaseNavItem & {
    url: string;
    items?: never;
};
type NavCollapsible = BaseNavItem & {
    items: (BaseNavItem & {
        url: string;
    })[];
    url?: never;
};
type NavItem = NavCollapsible | NavLink;
type NavGroup$1 = {
    title: string;
    items: NavItem[];
};
type SidebarData = {
    user: User;
    teams: Team[];
    navGroups: NavGroup$1[];
};

declare function NavGroup({ title, items }: NavGroup$1): React$1.JSX.Element;

type NavUserProps = {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
};
declare function NavUser({ user: fallbackUser }: NavUserProps): React$1.JSX.Element;

declare function SidebarSearch(): React$1.JSX.Element;

type TeamSwitcherProps = {
    teams: {
        name: string;
        logo: React$1.ElementType;
        plan: string;
    }[];
};
declare function TeamSwitcher({ teams }: TeamSwitcherProps): React$1.JSX.Element;

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
    links: {
        title: string;
        href?: string;
        isActive: boolean;
        disabled?: boolean;
        onClick?: () => void;
    }[];
};
declare function TopNav({ className, links, ...props }: TopNavProps): React$1.JSX.Element;

declare const sidebarData: SidebarData;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, type ActiveFilter, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AppHeader, AppLogo, AppSidebar, AppTitle, AreaChartDemo, AspectRatio, AuthenticatedLayout, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, BarChartDemo, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, type ColumnDef, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ConfirmDialog, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, DashboardTemplate, type DashboardTemplateProps, DataTable, type DataTableProps, DatePicker, DetailTemplate, type DetailTemplateProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, FilterBar, type FilterBarProps, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, FormSection, type FormSectionProps, FormTemplate, type FormTemplateProps, Header, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, LineChartDemo, ListTemplate, type ListTemplateProps, LongText, Main, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MetricCard, type MetricCardProps, NavGroup, type NavGroup$1 as NavGroupType, type NavItem, NavUser, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageHeader, type PageHeaderProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PasswordInput, PieChartDemo, Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger, Progress, QRCodeDisplay, type QrCodeDisplayProps as QRCodeDisplayProps, QrCodeDisplay, type QrCodeDisplayProps, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Search, Select, SelectContent, SelectDropdown, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, type SidebarData, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSearch, SidebarSeparator, SidebarTrigger, SignOutDialog, Skeleton, Slider, Spinner, Stats01, StatusBadge, type StatusBadgeProps, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, TeamSwitcher, Textarea, ThemeSelector, ThemeSwitch, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TopNav, type WizardStep, WizardTemplate, type WizardTemplateProps, WorkspaceTemplate, type WorkspaceTemplateProps, badgeVariants, buttonGroupVariants, buttonVariants, downloadQrCode, navigationMenuTriggerStyle, sidebarData, statusBadgeVariants, tabsListVariants, toggleVariants, useFormField, useSidebar };

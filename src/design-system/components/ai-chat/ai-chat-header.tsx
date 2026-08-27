import React from 'react'
import {
  Sparkles,
  Bot,
  ArrowLeft,
  Bell,
  Flag,
  MoreVertical,
  CornerUpLeft,
  CornerUpRight,
  Pin,
  Star,
  Heart,
  Archive,
  Trash2,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/design-system/components/ui/dropdown-menu'

export interface AiChatHeaderProps {
  title?: string
  subtitle?: string
  modelName?: string
  showSparkles?: boolean
  showDefaultActions?: boolean
  onBack?: () => void
  actions?: React.ReactNode
  onNotificationClick?: () => void
  onFlagClick?: () => void
  onReply?: () => void
  onForward?: () => void
  onPin?: () => void
  onStar?: () => void
  onFavorite?: () => void
  onArchive?: () => void
  onActionThis?: () => void
  onDelete?: () => void
  className?: string
}

export function AiChatHeader({
  title = 'AI Assistant',
  subtitle = 'Powered by AI • Ask anything',
  modelName,
  showSparkles = true,
  showDefaultActions = true,
  onBack,
  actions,
  onNotificationClick,
  onFlagClick,
  onReply,
  onForward,
  onPin,
  onStar,
  onFavorite,
  onArchive,
  onActionThis,
  onDelete,
  className,
}: AiChatHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 py-3 border-b border-border/80 bg-background/95 backdrop-blur-xs select-none',
        className
      )}
    >
      {/* Left Column: Avatar + Info */}
      <div className="flex items-center gap-3 min-w-0">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex h-8 w-8 items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            title="Back"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        )}

        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40 shrink-0 shadow-2xs">
          <Bot className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-bold text-foreground tracking-tight leading-snug">
              {title}
            </h3>
            {showSparkles && (
              <Sparkles className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
            )}
          </div>
          <p className="truncate text-xs text-muted-foreground">
            {subtitle ? subtitle : modelName ? `Powered by ${modelName}` : 'Powered by AI • Ask anything'}
          </p>
        </div>
      </div>

      {/* Right Column: Actions (Bell, Flag, 3-Dots Menu) */}
      <div className="flex items-center gap-1.5 shrink-0">
        {actions ? (
          actions
        ) : showDefaultActions ? (
          <div className="flex items-center gap-1">
            {/* Bell Icon in Orange / Amber */}
            <button
              type="button"
              onClick={onNotificationClick}
              className="flex h-8 w-8 items-center justify-center rounded-full text-amber-500 hover:bg-amber-500/10 transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="h-4 w-4 fill-amber-500/20 text-amber-500" />
            </button>

            {/* Flag Icon */}
            <button
              type="button"
              onClick={onFlagClick}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
              title="Flag"
            >
              <Flag className="h-4 w-4" />
            </button>

            {/* 3-Dot More Actions Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title="More actions"
                >
                  <MoreVertical className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={6}
                className="w-48 rounded-2xl p-1.5 shadow-2xl border border-border/80 bg-background text-foreground space-y-0.5"
              >
                <DropdownMenuItem
                  onClick={onReply}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <CornerUpLeft className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Reply</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onForward}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <CornerUpRight className="h-4 w-4 text-sky-500 shrink-0" />
                  <span>Forward</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onPin}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <Pin className="h-4 w-4 text-purple-600 shrink-0" />
                  <span>Pin Message</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onStar}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <Star className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Star</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onFavorite}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <Heart className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>Favorite</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onArchive}
                  className="gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <Archive className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span>Archive</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onActionThis}
                  className="flex items-center justify-between py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted"
                >
                  <div className="flex items-center gap-2.5">
                    <Bell className="h-4 w-4 text-orange-500 shrink-0" />
                    <span>Action This</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={onDelete}
                  className="flex items-center justify-between py-1.5 px-2 text-xs font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer rounded-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <Trash2 className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>Delete</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-rose-400" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : null}
      </div>
    </div>
  )
}

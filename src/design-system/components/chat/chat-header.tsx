import React from 'react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/design-system/components/ui/avatar'
import { StatusBadge } from '@/design-system/components/business/status-badge'

export interface ChatHeaderProps {
  title: string
  subtitle?: string
  avatarUrl?: string
  status?: 'online' | 'offline' | 'away' | 'busy'
  isGroup?: boolean
  memberCount?: number
  actions?: React.ReactNode
  onAvatarClick?: () => void
  className?: string
}

export function ChatHeader({
  title,
  subtitle,
  avatarUrl,
  status = 'offline',
  isGroup = false,
  memberCount,
  actions,
  onAvatarClick,
  className,
}: ChatHeaderProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-emerald-500'
      case 'away':
        return 'bg-amber-500'
      case 'busy':
        return 'bg-red-500'
      default:
        return 'bg-slate-400'
    }
  }

  return (
    <div className={cn('flex items-center justify-between border-b border-border/80 bg-background/95 px-4 py-3 backdrop-blur-sm', className)}>
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative cursor-pointer" onClick={onAvatarClick}>
          <Avatar className="h-10 w-10 border border-border/60 shadow-xs">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={title} />}
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {title.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {!isGroup && (
            <span
              className={cn(
                'absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-background',
                getStatusColor()
              )}
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold text-foreground tracking-tight">{title}</h2>
          <p className="truncate text-xs text-muted-foreground">
            {subtitle ? (
              subtitle
            ) : isGroup ? (
              `${memberCount || 0} members`
            ) : (
              <span className="capitalize">{status}</span>
            )}
          </p>
        </div>
      </div>

      {actions && <div className="flex items-center gap-1 shrink-0">{actions}</div>}
    </div>
  )
}

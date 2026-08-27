import React from 'react'
import { Pin, VolumeX, Check, CheckCheck, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/design-system/components/ui/avatar'
import { Badge } from '@/design-system/components/ui/badge'

export interface ChatCardItemProps {
  id: string
  title: string
  avatarUrl?: string
  lastMessage?: string
  time?: string | Date
  unreadCount?: number
  isActive?: boolean
  isOnline?: boolean
  isPinned?: boolean
  isMuted?: boolean
  isGroup?: boolean
  lastMessageStatus?: 'sending' | 'sent' | 'delivered' | 'read'
  isOwnLastMessage?: boolean
  onClick?: () => void
  className?: string
}

export function ChatCardItem({
  id,
  title,
  avatarUrl,
  lastMessage,
  time,
  unreadCount = 0,
  isActive = false,
  isOnline = false,
  isPinned = false,
  isMuted = false,
  isGroup = false,
  lastMessageStatus,
  isOwnLastMessage = false,
  onClick,
  className,
}: ChatCardItemProps) {
  const formattedTime = time instanceof Date ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : time

  const renderStatusIcon = () => {
    if (!isOwnLastMessage || !lastMessageStatus) return null
    switch (lastMessageStatus) {
      case 'sending':
        return <Clock className="h-3 w-3 text-muted-foreground shrink-0" />
      case 'sent':
        return <Check className="h-3 w-3 text-muted-foreground shrink-0" />
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-muted-foreground shrink-0" />
      case 'read':
        return <CheckCheck className="h-3 w-3 text-primary shrink-0" />
      default:
        return null
    }
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative flex items-center gap-3 rounded-xl p-3 cursor-pointer transition-all duration-150 select-none',
        isActive
          ? 'bg-primary/10 text-foreground font-medium shadow-2xs border border-primary/20'
          : 'hover:bg-muted/70 text-foreground/80 hover:text-foreground border border-transparent',
        className
      )}
    >
      {/* Avatar Container */}
      <div className="relative shrink-0">
        <Avatar className="h-11 w-11 border border-border/60">
          {avatarUrl && <AvatarImage src={avatarUrl} alt={title} />}
          <AvatarFallback className={cn('text-xs font-semibold', isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground')}>
            {title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        {!isGroup && isOnline && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background shadow-xs" />
        )}
      </div>

      {/* Center Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-1">
          <h4 className={cn('truncate text-sm tracking-tight', isActive ? 'font-semibold text-foreground' : 'font-medium')}>
            {title}
          </h4>
          {formattedTime && (
            <span className={cn('text-[11px] shrink-0', unreadCount > 0 ? 'text-primary font-medium' : 'text-muted-foreground')}>
              {formattedTime}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 min-w-0 flex-1 text-xs text-muted-foreground truncate">
            {renderStatusIcon()}
            <p className={cn('truncate text-xs', unreadCount > 0 && !isActive ? 'text-foreground font-medium' : 'text-muted-foreground')}>
              {lastMessage || 'No messages yet'}
            </p>
          </div>

          {/* Badges / Icons Row */}
          <div className="flex items-center gap-1.5 shrink-0">
            {isMuted && <VolumeX className="h-3.5 w-3.5 text-muted-foreground/70" />}
            {isPinned && <Pin className="h-3.5 w-3.5 text-primary rotate-45" />}
            {unreadCount > 0 && (
              <Badge className="h-5 min-w-5 rounded-full px-1.5 text-[10px] font-bold flex items-center justify-center bg-primary text-primary-foreground shadow-xs">
                {unreadCount > 99 ? '99+' : unreadCount}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

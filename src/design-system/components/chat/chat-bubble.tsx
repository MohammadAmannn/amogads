import React from 'react'
import { Check, CheckCheck, Clock, AlertCircle, Download, FileText, MapPin, Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/design-system/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/design-system/components/ui/tooltip'

export type ChatMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'failed'

export interface ChatAttachmentItem {
  id?: string
  name: string
  url?: string
  size?: number
  type?: 'image' | 'file' | 'audio' | 'video' | 'pdf' | string
  mimeType?: string
  duration?: number
}

export interface ChatLocationItem {
  latitude: number
  longitude: number
  address?: string
}

export interface ChatBubbleProps {
  id?: string
  content?: string
  isOwn?: boolean
  senderName?: string
  senderAvatar?: string
  time?: string | Date
  status?: ChatMessageStatus
  attachments?: ChatAttachmentItem[]
  location?: ChatLocationItem
  reactions?: Array<{ emoji: string; count: number; users?: string[] }>
  replyTo?: {
    senderName?: string
    content?: string
    id?: string
  }
  isHighlighted?: boolean
  className?: string
  bubbleClassName?: string
  onReply?: () => void
  onActionClick?: (action: string) => void
  onAttachmentClick?: (attachment: ChatAttachmentItem) => void
  onLocationClick?: (location: ChatLocationItem) => void
  children?: React.ReactNode
}

export function ChatBubble({
  id,
  content,
  isOwn = false,
  senderName,
  senderAvatar,
  time,
  status = 'sent',
  attachments = [],
  location,
  reactions = [],
  replyTo,
  isHighlighted = false,
  className,
  bubbleClassName,
  onReply,
  onActionClick,
  onAttachmentClick,
  onLocationClick,
  children,
}: ChatBubbleProps) {
  const formattedTime = time instanceof Date ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : time

  const renderStatusIcon = () => {
    switch (status) {
      case 'sending':
        return <Clock className="h-3 w-3 text-muted-foreground animate-spin" />
      case 'sent':
        return <Check className="h-3 w-3 text-muted-foreground" />
      case 'delivered':
        return <CheckCheck className="h-3 w-3 text-muted-foreground" />
      case 'read':
        return <CheckCheck className="h-3 w-3 text-primary" />
      case 'failed':
        return <AlertCircle className="h-3 w-3 text-destructive" />
      default:
        return null
    }
  }

  return (
    <div
      id={id ? `chat-bubble-${id}` : undefined}
      className={cn(
        'group relative flex w-full gap-2 py-1 transition-colors duration-200',
        isOwn ? 'flex-row-reverse justify-start' : 'flex-row justify-start',
        isHighlighted && 'bg-primary/5 rounded-lg px-2',
        className
      )}
    >
      {/* Avatar (for incoming messages) */}
      {!isOwn && (
        <Avatar className="h-8 w-8 flex-shrink-0 mt-0.5">
          {senderAvatar && <AvatarImage src={senderAvatar} alt={senderName || 'Avatar'} />}
          <AvatarFallback className="text-xs bg-muted text-foreground">
            {senderName ? senderName.slice(0, 2).toUpperCase() : 'U'}
          </AvatarFallback>
        </Avatar>
      )}

      {/* Main Bubble Column */}
      <div className={cn('flex flex-col max-w-[78%] sm:max-w-[70%]', isOwn ? 'items-end' : 'items-start')}>
        {/* Sender Name */}
        {!isOwn && senderName && (
          <span className="text-[11px] font-medium text-muted-foreground mb-0.5 px-1">
            {senderName}
          </span>
        )}

        {/* Reply Quote Banner */}
        {replyTo && (
          <div
            onClick={onReply}
            className={cn(
              'mb-1 cursor-pointer rounded-md border-l-2 p-1.5 text-xs transition-opacity hover:opacity-80',
              isOwn
                ? 'border-primary-foreground/40 bg-primary/20 text-primary-foreground/90'
                : 'border-primary bg-muted/60 text-muted-foreground'
            )}
          >
            <div className="font-medium text-[10px]">{replyTo.senderName || 'Replying to message'}</div>
            <div className="line-clamp-1 text-[11px]">{replyTo.content}</div>
          </div>
        )}

        {/* Message Container */}
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl px-3.5 py-2.5 text-sm shadow-xs break-words',
            isOwn
              ? 'bg-primary text-primary-foreground rounded-tr-xs'
              : 'bg-muted/80 text-foreground border border-border/50 rounded-tl-xs',
            bubbleClassName
          )}
        >
          {/* Custom Children Slot or Default Text Content */}
          {children ? (
            children
          ) : (
            <>
              {content && <p className="whitespace-pre-wrap leading-relaxed">{content}</p>}

              {/* Attachments Section */}
              {attachments.length > 0 && (
                <div className="mt-2 space-y-1.5">
                  {attachments.map((att, idx) => (
                    <div
                      key={att.id || idx}
                      onClick={() => onAttachmentClick?.(att)}
                      className={cn(
                        'flex items-center gap-2 rounded-lg p-2 transition cursor-pointer',
                        isOwn ? 'bg-primary-foreground/10 hover:bg-primary-foreground/20' : 'bg-background/80 hover:bg-background border border-border/40'
                      )}
                    >
                      <FileText className="h-4 w-4 shrink-0 text-current" />
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-xs font-medium">{att.name}</p>
                        {att.size && (
                          <span className="text-[10px] opacity-75">
                            {(att.size / 1024).toFixed(1)} KB
                          </span>
                        )}
                      </div>
                      <Download className="h-3.5 w-3.5 shrink-0 opacity-70 hover:opacity-100" />
                    </div>
                  ))}
                </div>
              )}

              {/* Location Preview Slot */}
              {location && (
                <div
                  onClick={() => onLocationClick?.(location)}
                  className={cn(
                    'mt-2 flex items-center gap-2 rounded-lg p-2 transition cursor-pointer',
                    isOwn ? 'bg-primary-foreground/10' : 'bg-background border border-border/40'
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-red-500" />
                  <div className="text-xs truncate">
                    <p className="font-medium">Location Shared</p>
                    <p className="text-[10px] opacity-75">{location.address || `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`}</p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Time & Status Row */}
          <div
            className={cn(
              'mt-1 flex items-center justify-end gap-1 text-[10px] select-none',
              isOwn ? 'text-primary-foreground/75' : 'text-muted-foreground'
            )}
          >
            {formattedTime && <span>{formattedTime}</span>}
            {isOwn && renderStatusIcon()}
          </div>
        </div>

        {/* Reactions List */}
        {reactions.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1 px-1">
            {reactions.map((react, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background px-1.5 py-0.5 text-[11px] shadow-xs cursor-pointer hover:bg-muted"
              >
                <span>{react.emoji}</span>
                <span className="font-medium text-[10px] text-muted-foreground">{react.count}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

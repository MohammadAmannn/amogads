import React, { useRef, useEffect } from 'react'
import { Send, Paperclip, Smile, Mic, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/design-system/components/ui/button'
import { Textarea } from '@/design-system/components/ui/textarea'

export interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  placeholder?: string
  disabled?: boolean
  isLoading?: boolean
  maxLength?: number
  minRows?: number
  maxRows?: number
  replyMessage?: {
    senderName?: string
    content?: string
    onClear?: () => void
  }
  showAttachments?: boolean
  showEmoji?: boolean
  showVoice?: boolean
  onAttachmentClick?: () => void
  onEmojiClick?: () => void
  onVoiceClick?: () => void
  customActions?: React.ReactNode
  className?: string
}

export function ChatInput({
  value,
  onChange,
  onSend,
  placeholder = 'Type a message...',
  disabled = false,
  isLoading = false,
  maxLength,
  replyMessage,
  showAttachments = true,
  showEmoji = true,
  showVoice = false,
  onAttachmentClick,
  onEmojiClick,
  onVoiceClick,
  customActions,
  className,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !disabled && !isLoading) {
        onSend()
      }
    }
  }

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`
    }
  }, [value])

  return (
    <div className={cn('relative rounded-xl border border-border/80 bg-background shadow-xs transition-all focus-within:border-ring/60 focus-within:ring-1 focus-within:ring-ring/40', className)}>
      {/* Replying Banner */}
      {replyMessage && (
        <div className="flex items-center justify-between border-b border-border/50 bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-medium text-foreground">Replying to {replyMessage.senderName || 'Message'}:</span>
            <span className="truncate">{replyMessage.content}</span>
          </div>
          {replyMessage.onClear && (
            <button
              onClick={replyMessage.onClear}
              className="ml-2 rounded-sm p-0.5 hover:bg-muted text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Textarea Row */}
      <div className="flex items-end gap-1.5 p-2">
        {/* Attachment Slot */}
        {showAttachments && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onAttachmentClick}
            disabled={disabled || isLoading}
            className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0 rounded-lg"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
        )}

        {/* Text Input Area */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          maxLength={maxLength}
          rows={1}
          className="max-h-40 min-h-[36px] w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />

        {/* Custom Actions / Emoji / Voice / Send Slot */}
        <div className="flex items-center gap-1 shrink-0">
          {customActions}

          {showEmoji && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onEmojiClick}
              disabled={disabled || isLoading}
              className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-lg"
            >
              <Smile className="h-4 w-4" />
            </Button>
          )}

          {showVoice && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onVoiceClick}
              disabled={disabled || isLoading}
              className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-lg"
            >
              <Mic className="h-4 w-4" />
            </Button>
          )}

          <Button
            type="button"
            size="icon"
            onClick={onSend}
            disabled={!value.trim() || disabled || isLoading}
            className="h-8 w-8 rounded-lg shrink-0 transition-transform active:scale-95"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

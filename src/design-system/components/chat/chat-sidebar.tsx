import React from 'react'
import { Search, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/design-system/components/ui/input'
import { Button } from '@/design-system/components/ui/button'

export interface ChatSidebarTab {
  id: string
  label: string
  count?: number
}

export interface ChatSidebarProps {
  title?: string
  searchValue?: string
  onSearchChange?: (query: string) => void
  searchPlaceholder?: string
  actions?: React.ReactNode
  onNewChat?: () => void
  tabs?: ChatSidebarTab[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function ChatSidebar({
  title = 'Chats',
  searchValue = '',
  onSearchChange,
  searchPlaceholder = 'Search conversations...',
  actions,
  onNewChat,
  tabs,
  activeTab,
  onTabChange,
  children,
  footer,
  className,
}: ChatSidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col h-full w-full md:w-80 lg:w-96 border-r border-border/80 bg-background/95 select-none',
        className
      )}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
        <h2 className="text-base font-semibold text-foreground tracking-tight">{title}</h2>
        <div className="flex items-center gap-1">
          {actions}
          {onNewChat && (
            <Button
              size="icon"
              variant="outline"
              onClick={onNewChat}
              className="h-8 w-8 rounded-lg shadow-2xs text-foreground hover:bg-muted"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      {onSearchChange && (
        <div className="p-3 border-b border-border/40">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="pl-8.5 h-9 text-xs rounded-lg bg-muted/40 border-border/60 focus-visible:bg-background"
            />
          </div>
        </div>
      )}

      {/* Tabs Filter Bar (e.g. All, Unread, Groups) */}
      {tabs && tabs.length > 0 && (
        <div className="flex items-center gap-1 px-3 py-2 border-b border-border/40 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0',
                  isSelected
                    ? 'bg-primary text-primary-foreground shadow-2xs'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                )}
              >
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && tab.count > 0 && (
                  <span
                    className={cn(
                      'px-1.5 py-0.2 rounded-full text-[10px] font-bold',
                      isSelected ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Conversations List Viewport */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {children}
      </div>

      {/* Optional Footer */}
      {footer && <div className="p-3 border-t border-border/60 bg-muted/20">{footer}</div>}
    </aside>
  )
}

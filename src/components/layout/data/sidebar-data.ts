import {
  LayoutGrid,
  Command,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Amoga User',
    email: 'user@amoga.io',
    avatar: '/avatars/shadcn.jpg',
  },

  teams: [
    {
      name: 'Amoga App',
      logo: Command,
      plan: 'System Design',
    },
  ],

  navGroups: [
    {
      title: 'Overview',
      items: [
        {
          title: 'System Design',
          url: '/',
          icon: LayoutGrid,
        },
      ],
    },
  ],
}

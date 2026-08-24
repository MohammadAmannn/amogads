import { defineConfig } from 'tsup'
import * as fs from 'fs'
import * as path from 'path'

export default defineConfig({
  entry: {
    index: 'src/design-system/index.ts',
    tokens: 'src/design-system/tokens/index.ts',
  },
  tsconfig: 'tsconfig.build.json',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,

  sourcemap: true,
  minify: false,
  splitting: false,
  outDir: 'dist',
  banner: {
    js: "'use client';",
  },
  external: [
    'react',
    'react-dom',
    'next',
    'lucide-react',
    'clsx',
    'tailwind-merge',
    'class-variance-authority',
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-collapsible',
    '@radix-ui/react-dialog',
    '@radix-ui/react-direction',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-icons',
    '@radix-ui/react-label',
    '@radix-ui/react-popover',
    '@radix-ui/react-progress',
    '@radix-ui/react-radio-group',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-separator',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-switch',
    '@radix-ui/react-tabs',
    '@radix-ui/react-tooltip',
    'sonner',
    'next-themes',
    'date-fns',
    'react-day-picker',
    'cmdk',
    'vaul',
    'recharts',
    'embla-carousel-react',
  ],
  onSuccess: async () => {
    // Copy central theme.css into dist root for consumers
    const srcTheme = path.resolve(__dirname, 'src/design-system/tokens/theme.css')
    const distTheme = path.resolve(__dirname, 'dist/theme.css')
    if (fs.existsSync(srcTheme)) {
      fs.copyFileSync(srcTheme, distTheme)
      console.log('✓ Successfully copied theme.css to dist/theme.css')
    }
  },
})

import type { Config } from 'vike/types'
import vikeReact from 'vike-react'

// Default configs (can be overridden by pages)
export default {
    title: 'My Hono + Vike + React App',
    description: 'Hono + Vike + React',
    ssr: true, // can be removed, this is the default anyway
    extends: vikeReact
} satisfies Config
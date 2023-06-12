interface ImportMetaEnv {
  readonly VITE_APP_CLERK_PUBLISHABLE_KEY: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

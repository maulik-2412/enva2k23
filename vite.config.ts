// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import envCompatible from 'vite-plugin-env-compatible'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    envPrefix: 'REACT_APP_',
    server: {
        port: 3000,
    },
    plugins: [react(), envCompatible(), tsconfigPaths(),],
})
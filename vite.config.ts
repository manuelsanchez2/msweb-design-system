import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    svelteTesting(),
  ],
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
  },
})

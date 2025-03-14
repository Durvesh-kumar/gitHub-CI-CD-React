import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    setupFiles: '__test__/index.test.tsx',
    environment: 'jsdom',
    exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/e2e/**'
      ],
  },
})


// // this code use when we use reatjs
// export default defineConfig({
//     plugins: [tsconfigPaths(), react()],
//     test: {
//       globals: false,
//       environment: 'jsdom',
//       setupFiles: './src/setupTest.test.ts', // Add this line if you have a setup file
//       exclude: [ ...configDefaults.exclude, 'e2e/*'] // Example of excluding certain file from test
//     },
//   })
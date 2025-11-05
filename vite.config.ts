import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    target: 'node22',
    ssr: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/bot.ts'),
      output: {
        entryFileNames: 'bot.js',
      },
    },
  },
  plugins: [
    // Copy static reply HTML files to dist/replies
    viteStaticCopy({
      targets: [
        {
          src: 'src/replies/*.html',
          dest: 'replies',
        },
      ],
    }),
  ],
});
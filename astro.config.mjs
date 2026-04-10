// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: '518irhg4', // <--- 注意：请把你在后端 sanity.cli.ts 里找到的那串字母填在这里，保留单引号！
      dataset: 'production',
      useCdn: false, // 设为 false，确保每次刷新都能看到最新传的图
      apiVersion: '2024-04-10', // 接口版本日期
    })
  ]
});
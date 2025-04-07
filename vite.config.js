import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动生成的类型声明文件路径
      dts: 'src/auto-imports.d.ts',
    }),
  ],
});

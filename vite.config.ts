import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path' // npm  install  path  --save
import vueJsx from '@vitejs/plugin-vue-jsx'
// ant-design-vue
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    ElementPlus({
      // options
    }),
  ],
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      '@': resolve(__dirname, './src'), // npm install --save-dev @types/node  不然找不到
    },
  },
})

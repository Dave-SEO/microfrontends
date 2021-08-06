import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
export default defineConfig({
  server: {
    open: false,
    host: '0.0.0.0',
    port: 3002,
    proxy: {
      // '/api': {
      //   target: 'http://ustbhuangyi.com/music-next/',
      //   changeOrigin: true
      // }
    }
  },
  resolve: {
    alias: [
      { find: '@',  replacement: '/src'}
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
         @import "@/assets/scss/variable.scss";
         @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/css`
        },
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
           return `element-plus/lib/theme-chalk/el-${name}.css`
            // return `@element-plus/icons/lib/${name}.js`;
          },
        }
      ],
    })
  ]
})

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import styleImport from 'vite-plugin-style-import';
const path = require('path')
export default defineConfig({
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, 'lib/main.js'),
    //   name: 'MyLib',
    //   // 把子应用打包成umd格式，commonjs 浏览器，node环境
    //   formats: ['umd']
    // },
    // rollupOptions: {
    //   output: {
    //     name: 'aa',
    //     globals: {
    //       vue: 'vue'
    //     }
    //   }
    // }
    rollupOptions: {
      output: {
        dir: 'bundle',
        file: 'bundle.js',
        format: 'umd',
        name: 'MyBundle'
      }
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3001,
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
          // 不加打包会报错
          ensureStyleFile: true,
          resolveStyle: (name) => `/ant-design-vue/es/${name}/style/css`
        },
        // {
        //   libraryName: 'element-plus',
        //   esModule: true,
        //   ensureStyleFile: true,
        //   resolveStyle: (name) => {
        //     return `element-plus/lib/theme-chalk/${name}.css`;
        //   },
        //   resolveComponent: (name) => {
        //     return `element-plus/lib/${name}`;
        //   },
        // },
        // {
        //   libraryName: 'element-plus',
        //   esModule: true,
        //   ensureStyleFile: true,
        //   resolveStyle: (name) => {
        //    return `element-plus/lib/theme-chalk/el-${name}.css`
        //     // return `@element-plus/icons/lib/${name}.js`;
        //   },
        // }
      ],
    })
  ]
})

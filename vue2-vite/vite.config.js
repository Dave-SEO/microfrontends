import styleImport from 'vite-plugin-style-import';
import { createVuePlugin } from "vite-plugin-vue2";
  
export default {
    server: {
      open: true,
      host: '0.0.0.0',
      port: 3002,
      proxy: {
        
      }
    },
    resolve: {
        alias: [
          { find: '@',  replacement: '/src'},
        ]
    },
    plugins: [
        createVuePlugin(/*options*/),
        styleImport({
          libs: [
            {
              libraryName: 'element-ui',
              esModule: true,
              // resolveStyle: (name) => `element-ui/lib/theme-chalk/${name}.css`
            }
          ],
        })
    ]  
}
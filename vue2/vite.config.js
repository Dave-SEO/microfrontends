import { createVuePlugin } from "vite-plugin-vue2";
import styleImport from 'vite-plugin-style-import';
  
export default {
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
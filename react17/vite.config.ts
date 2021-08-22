import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3003
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.css`
        }
      ]
    })
  ]
})

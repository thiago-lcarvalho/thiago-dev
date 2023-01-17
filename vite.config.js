import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    configureWebpack: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      });
    },
  },
})

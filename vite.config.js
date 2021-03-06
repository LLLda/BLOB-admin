
import vue from '@vitejs/plugin-vue'

export default {
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    },
    server:{
        proxy:{
          '/api': 'http://localhost:8001'
        }
      }
}
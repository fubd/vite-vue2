import vue from '@vitejs/plugin-vue2'

export default {
  plugins: [vue()],
  server: {
    port: 3000,
    host: '127.0.0.1'
  }
}

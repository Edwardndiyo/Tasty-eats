import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ✅ Use this instead of just "true"
    port: 5173,
    strictPort: true, // ✅ Ensures it always runs on 5173
    allowedHosts: ["bf3b-102-90-82-148.ngrok-free.app"], // ✅ Add ngrok URL
  },
})
import { config } from 'dotenv';

config({ path: 'build/.env' });

// const isProduction = process.env.ENV === 'production';

export default defineNuxtConfig({
  // srcDir: 'client/',
  serverDir: 'server/',

  dir: {
    public: 'static',
  },

  css: [
    '@/assets/scss/style.scss',
  ],

  devtools: {
    enabled: false
  },

  compatibilityDate: '2025-01-21'
});

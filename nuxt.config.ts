// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      // '@nuxtjs/supabase',
  ],
  runtimeConfig: {
    public: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        STRIPE_KEY: process.env.STRIPE_KEY,
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/', defer: true
        }
      ],
    }
  },
  devtools: { enabled: true }
})

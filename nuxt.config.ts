// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/i18n",
  ],

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
  },

  i18n: {
    skipSettingLocaleOnNavigate: true,
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "root",
      fallbackLocale: "en_US",
    },
    locales: [
      { code: "en_US", name: "English", file: "en_US.json" },
      { code: "ru_RU", name: "Русский (Russian)", file: "ru_RU.json" },
    ],
    langDir: "locales",
    defaultLocale: "en_US",
    lazy: true,
  },

  colorMode: {
    classSuffix: "",
  },

  veeValidate: {
    autoImports: true,
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  ssr: true,

  build: {
    transpile: ["vue-sonner"],
  },
});

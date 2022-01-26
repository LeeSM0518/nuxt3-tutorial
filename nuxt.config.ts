import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        ISSUES_SSE_URL: process.env.ISSUES_SSE_URL
    },
    buildModules: ["@vueuse/nuxt", "@unocss/nuxt"],
    unocss: {
        preflight: true, // 기본 설정 적용
        icons: true      // 아이콘 활성화
    }
})

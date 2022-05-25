import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
        runtimeConfig: {
            APP_NAME:process.env.APP_NAME,
            SHORT_NAME: process.env.SHORT_NAME,
            PORT: process.env.PORT
        },
        css: [
            "@/assets/styles/main.scss"
        ]
    }
)
import {defineNuxtConfig} from 'nuxt'
import {ConfigEnvObject} from "./types";

// Grab all required configurations
const CONFIG: ConfigEnvObject = {
    APP_NAME:process.env.APP_NAME,
    SHORT_NAME: process.env.SHORT_NAME,
    PORT: process.env.PORT,
}

export default defineNuxtConfig({
        runtimeConfig: {
            ...CONFIG,
           public: {
              ...CONFIG
           }
        },
        css: [
            "@/assets/styles/main.scss"
        ]
    }
)
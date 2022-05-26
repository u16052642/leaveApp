import {defineNuxtConfig} from 'nuxt'
import {ConfigEnvObject} from "./types/config-env-object";

// Grab all required configurations
const CONFIG: ConfigEnvObject = {
    APP_NAME: process.env.APP_NAME,
    SHORT_NAME: process.env.SHORT_NAME,
    PORT: process.env.PORT,
}

export default defineNuxtConfig({
        components: true,
        runtimeConfig: {
            ...CONFIG,
            public: {
                ...CONFIG
            }
        },
        css: [
            "@/assets/styles/main.scss"
        ],
    buildModules: [
        '@pinia/nuxt',
    ],
        build: {
            postcss: {
                postcssOptions: {
                    plugins: {
                        tailwindcss: {},
                        autoprefixer: {},
                    },
                },
            }
        },
    vite: {
        logLevel: "info"
    }
    }
)
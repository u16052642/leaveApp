/**
 * Initiates a global Plugin for the application. Any method defined here will be accessible globaly in components, pages, stores, plugins
 */
// @ts-ignore
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import {AppDetails} from "@/types";
export default defineNuxtPlugin(() => {
    // Access .env variables through runtime configuration options
    const config = useRuntimeConfig()
    return {
        provide: {
            // Get global data
            globalData: ():AppDetails => {
                console.log(config)
                return {
                    name: config.APP_NAME,
                    shortName: config.SHORT_NAME,
                }
            }
        }
    }
})
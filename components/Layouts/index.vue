<template src="./layouts.html"></template>
<style src="./layouts.scss"></style>
<script setup lang="ts">
import {NuxtLink} from '#components'

// create navigation interface
interface NavigationItems {
  name: string
  url: string

}
// initiate props - option for switching layouts
const props = defineProps({
  option: String,
})
// Mobile menu state
const open = ref(false)
// initialize Navigation items. this can be set and retrieved from pinia store as well
const navItems: NavigationItems[] = [{
  name: "home", url: '/',

}, {
  name: "Leave Requests", url: '/leave',
}]
</script>

# Sub Page for dynamic pages
<template>
  <NuxtLayout name="default">
    <section class="h-[80vh] flex justify-center items-center">
      <h1 class="text-3xl"> Page <span class="text-red-500 ">`{{$route.params.sub}}`</span> Not found</h1>
      <hr>
      <NuxtLink to="/">Home page</NuxtLink>
    </section>
  </NuxtLayout>
</template>
<script setup>
import {NuxtLink} from "#components";
</script>
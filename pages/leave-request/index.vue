<template>
  <pre>{{other}}</pre>
</template>
<script setup>
import {useLeaveStore} from "../../stores/leave-store";

const leaveStore = useLeaveStore()
const leaves = leaveStore.$state
const other = computed(()=> {
  return leaveStore.leaveData
})
console.log(other)
</script>
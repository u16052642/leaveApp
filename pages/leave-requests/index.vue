<template>
  <NuxtLayout>

<div class="md:m-8 md:p-6 m-2 p-2">
  <h4  v-if="other.length !==0"
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
  >
    Employee Leave Requests
  </h4>
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap" v-if="other.length !==0">
        <thead>
        <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
        >
          <th class="px-4 py-3">Employee</th>
          <th class="px-4 py-3">Type of Leave</th>
          <th class="px-4 py-3">Reason</th>
          <th class="px-4 py-3">Start Date</th>
          <th class="px-4 py-3">End Date</th>
        </tr>
        </thead>
        <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
        >
        <tr v-for="(e, index) in other" :key="index" class="text-gray-700 dark:text-gray-400">
          <td class="px-4 py-3">
            <div class="flex items-center text-sm">
              <!-- Avatar with inset shadow -->
              <div
                  class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                </svg>
                <div
                    class="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                ></div>
              </div>
              <div>
                <p class="font-semibold">{{ e.firstName }} {{e.lastName}}</p>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  {{ e.totalLeaveDays - e.Leave.length }} Leave Days Remaining
                </p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-sm">
            {{e.Leave[0].type }} Leave
          </td>
          <td class="px-4 py-3 text-sm">
            {{e.Leave[0].reason }}
          </td>
          <td class="px-4 py-3 text-xs">
                        <span
                            class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        >
                         {{e.Leave[0].leaveStartDate }}
                        </span>
          </td>
          <td class="px-4 py-3 text-sm">
            {{ e.Leave[0].leaveEndDate }}
          </td>
        </tr>

        </tbody>
      </table>
      <div class="flex justify-center items text-gray-300 text-3xl mx-4 center h-[80vh] p-2 md:p-8">
        There Are no Leave Request At Present
      </div>
    </div>
    <div
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
    >
                <span class="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
      <span class="col-span-2"></span>
      <!-- Pagination -->

    </div>
  </div>
</div>
  </NuxtLayout>
</template>
<script setup>
import {useLeaveStore} from "../../stores/leave-store";

const leaveStore = useLeaveStore()
const leaves = leaveStore.$state
const other = await leaveStore.leaveData
console.log(other)
</script>
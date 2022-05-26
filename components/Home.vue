<template>
  <section class="md:h-[80vh] w-screen md:w-full mx-4 px-2 mt-5 md:flex md:justify-center md:items-center">

    <div
        class="p-4 md:w-[40vw] bg-white rounded-lg border border-gray-200 shadow-md sm:p-2 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6 w-full">
        <h5 class="text-xl font-medium text-gray-900 mb-0 pb-0  dark:text-white"><span
            class="text-green-500">POC </span> | Leave Request Form</h5>
        <hr class="mt-0 pt-0">
        <div class="grid gap-2 md:grid-cols-2 grid-cols-1">
          <div>
            <label for="firstName" class="home-input-label">
              <span class="mb-2 pb-2">First Name(s)</span>
              <input id="firstName" type="text"
                     class="home-input-field  mt-2 focus:ring-blue-500 focus:border-blue-500 block"
                     v-model="leaveRequest.firstName" placeholder="Enter Your First Name" :required="true">
            </label>
          </div>
          <div>
            <label for="lastName" class="home-input-label">
              <span class="mb-2 pb-2">Surname</span>
              <input id="lastName" type="text"
                     class="home-input-field mt-2 focus:ring-blue-500 focus:border-blue-500 block"
                     v-model="leaveRequest.lastName" placeholder="Enter Your Surname" :required="true">
            </label>
          </div>
          <div class="md:col-span-2">
            <label for="leaveType" class="home-input-label">
              <span class="mb-2 pb-2">Type Of Leave</span>
              <select id="leaveType" type="text"
                      class="home-input-field mt-2 focus:ring-blue-500 focus:border-blue-500 block"
                      v-model="leaveRequest.leaveType" :required="true">
                <option value="none" selected disabled>Select Type Of Leave</option>
                <option v-for="(option,i) in leaveType" :key="i" :value="option">{{ option }}</option>
              </select>
            </label>
          </div>
          <div>
            <label class="home-input-label">
              <span class="mb-2 pb-2">Leave Start Date</span>
              <Datepicker id="startDate" class="mt-2" v-model="leaveRequest.leaveStartDate"></Datepicker>

            </label>
          </div>
          <div>
            <label class="home-input-label">
              <span class="mb-2 pb-2 w-full">Leave End Date</span>
              <Datepicker id="enddate" v-model="leaveRequest.leaveEndDate" class="mt-2"></Datepicker>
            </label>
          </div>

          <div class="md:col-span-2">
            <label for="reason" class="home-input-label">
              <span class="mb-1 ">Reason For taking Leave</span>
              <textarea id="reason" class="home-input-field focus:ring-blue-500 focus:border-blue-500 mt-2 block" rows="4"
                        placeholder="Enter Your Surname" :required="true" v-model="leaveRequest.reason"></textarea>
            </label>
          </div>
        </div>


        <div class="w-full text-center">
          <button type="submit" @click.prevent="leaveRequestFn()" class="bg-green-500 rounded-md p-2 text-white">Submit
            Leave Request
          </button>
        </div>

      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import {LeaveRequestData} from "../types/form-input-types";

const leaveType: string[] = ['Maternity', "Sick", "Annual", "Family Responsibility", "Study", "Quarantine", "Casual"]
const leaveRequest: LeaveRequestData = {
  firstName: '',
  lastName: '',
  leaveType: '',
  reason: '',
  leaveStartDate: ref(new Date()),
  leaveEndDate: ref(new Date()),
}

const leaveRequestFn = async () => {
 const saveLeave = await $fetch('/api/leave-request', {method:"post", body: {...leaveRequest}})
  console.log(saveLeave)
}
</script>
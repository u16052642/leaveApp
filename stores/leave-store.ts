// @ts-ignore
import {defineStore} from 'pinia'

interface LeaveState {
    leaveRequests: any[]
}
export const useLeaveStore = defineStore('useLeaveStore', {

    state: (): LeaveState=> {
        return {
            leaveRequests: []
        }
    },
    getters: {
       async  leaveData (){
           // @ts-ignore
           return await $fetch('/api/leave', {method: 'get'})
        }
        }
})
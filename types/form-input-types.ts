export interface LeaveRequestData {
    firstName: string
    lastName: string
    leaveType: string
    leaveDetails?: LeaveDetails
    reason: string
    leaveStartDate: Date | string
    leaveEndDate: Date | string

}

export interface LeaveDetails {
    leaveDays: number
    usedLeaveDays: number
}

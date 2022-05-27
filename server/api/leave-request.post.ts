// @ts-ignore
import {prisma} from "./leave";
import * as random from 'randomstring'
import { useCookie, setCookie } from 'h3'
// @ts-ignore
export default defineEventHandler(async (event) => {
    // @ts-ignore
    const body = await useBody(event)

    if (!body.employeeId) {
        body.employeeId = random.generate({length: 12, charset: 'alphanumeric'})
    }
    try {
        const save = await prisma.leave.create({
            data: {
                startDate: body.leaveStartDate,
                endDate: body.leaveEndDate,
                type: body.leaveType,
                reason: body.reason,
                owner: {
                    create: {
                        firstName: body.firstName,
                        lastName: body.lastName,
                        employeeId: body.employeeId,

                    }
                }
            }
        })
        setCookie(event.res, 'auth-cookie', body.employeeId)
        return {save}
    } catch (e) {
        return e.message
    }
})
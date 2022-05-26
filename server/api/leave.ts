// @ts-ignore
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prisma = new PrismaClient({
    log: ['query']
})

// @ts-ignore
export default defineEventHandler(async (event) => {
    return await prisma.user.findMany({include: {Leave: true}})
})
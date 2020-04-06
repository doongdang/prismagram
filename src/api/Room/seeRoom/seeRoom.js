import {
    prisma
} from "../../../../generated/prisma-client"


export default {
    Query: {
        seeRoom: async (_, args, {
            request,
            isAuthenticated
        }) => {
            isAuthenticated(request)
            const {
                id
            } = args
            const {
                user
            } = request
            const canSee = await prisma.$exists.room({
                participants_some: {
                    id: user.id
                }
            })
            if (canSee) {
                return await prisma.room({
                    id
                })

            } else {
                throw Error("You don`t have right to see this.")
            }
        }
    }
}
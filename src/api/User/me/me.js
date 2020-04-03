import {
    prisma
} from "../../../../generated/prisma-client"
import {
    USER_FRAGMENT
} from "../../../fragment"

export default {
    Query: {
        me: async (_, __, {
            request,
            isAuthenticated
        }) => {
            isAuthenticated(request)
            const {
                user
            } = request
            const useProfile = await prisma.user({
                id: user.id
            })
            const posts = await prisma.user({
                id: user.id
            }).posts()
            return {
                user: useProfile,
                posts
            }

        }
    }
}
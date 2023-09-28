import { apiSlice } from "../../app/api/apiSlice";
import { logout, setCredentials } from "./authSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credential => ({
                url : "/auth",
                method: "POST",
                body: { ...credential }
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }){
                try{
                    await queryFulfilled
                    dispatch(logout())
                    dispatch(apiSlice.util.resetApiState())
                } catch (err) {
                    console.log(err)
                }
            }
        
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try{
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data 
                    dispatch(setCredentials({accessToken}))
                } catch (err){
                    console.log(err)
                }
            }
        })
    })
})

export const {
    useLoginMutation,
    useRefreshMutation,
    useSendLogoutMutation
} = authApiSlice





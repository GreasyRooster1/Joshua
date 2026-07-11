import apiClient from "./client.js";


export const userService = {
    getPrivateProfile: ()=>apiClient.get("/users/get"),
}
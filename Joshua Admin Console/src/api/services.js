import api from "./client.js";


export const userService = {
    getPrivateProfile: ()=> api.get("/users/get_private_profile").then((res)=>res.data),
}
import api, {req} from "./client.js";


export const userService = {
    getPrivateProfile: ()=> req(api.get("/user/get_private_profile/")),
}
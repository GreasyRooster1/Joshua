import api, {req} from "./client.js";


export const userService = {
    getPrivateProfile: ()=> req(api.get("/users/get_private_profile")),
}
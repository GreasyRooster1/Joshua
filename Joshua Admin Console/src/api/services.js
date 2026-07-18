import api, {req} from "./client.js";
console.log('service instance ', api);

export const userService = {
    getPrivateProfile: ()=> req(api.get("/user/get_private_profile/")),
}
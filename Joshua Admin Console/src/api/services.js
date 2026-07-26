import api, {req} from "./client.js";
console.log('service instance ', api);

export const userService = {
    getPrivateProfile: ()=> api.get("/user/get_private_profile/").then(response=>response.data),
    getOrgName: ()=> api.get("/user/get_org_name/").then(response=>response.data),
}
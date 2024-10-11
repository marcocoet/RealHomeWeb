import api from "./api";

export default class RealHomeService {
    
    static createUser(data, __options) {
        return api.callApi('post', {
            ...__options,
            data: data,
            uri: '/users'
        })
    }
    static addProperty(data,__options) {
        return api.callApi('post', {
            ...__options,
            data: data,
            uri: '/realestate/add/'
        })
    }
}
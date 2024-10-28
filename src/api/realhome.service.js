import api from "./api";

export default class RealHomeService {
    
    static createUser(data, __options) {
        return api.callApi('post', {
            ...__options,
            data: data,
            uri: '/users/'
        })
    }
    static addProperty(data,__options) {
        return api.callApi('post', {
            ...__options,
            data: data,
            uri: '/add-real-estate/'
        })
    }
    static loginUser(data, __options) {
        return api.callApi('post', {
            ...__options,
            data: data,
            uri: '/token/'
        })
    }
    static listRealEstateTypes(__options) {
        return api.callApi('get', {
            ...__options,
            uri: '/realestatetype/list/'
        })
    }
}

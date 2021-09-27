
import { RequireParam, httpError } from '../helpers'




export default class RoomControllers{

    constructor(Facade = RequireParam('Facade'), req = {}){
        let _Facade = Facade
        let _httpRequest = {
            path: req.path,
            method: req.method,
            pathParams: req.params,
            queryParams: req.query,
            body: req.body
        }

        this.getFacade = () => _Facade
        this.setFacade = (Facade) => { _Facade = Facade }

        this.getHttpRequest = () => _httpRequest
        this.setHttpRequest = (httpRequest) => { _httpRequest = httpRequest }
        Object.freeze(this)
    }

    static requestAdapter(req = {}) {
        return Object.freeze({
          path: req.path,
          method: req.method,
          pathParams: req.params,
          queryParams: req.query,
          body: req.body
        })
    }

    add(){

    }
    delete(){

    }
    update(){

    }
    getAll(){

    }
    getById(){

    }
    getByUserId(){

    }
}
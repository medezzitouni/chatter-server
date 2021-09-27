
import { RequireParam, httpError } from '../helpers'



export default class MessageControllers{

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

    // async handle (httpRequest) {
    //         switch (httpRequest.method) {
    //             case 'POST':
    //                 return this.post()
            
    //             case 'GET':
    //                 if(httpRequest.params)
    //                 return this.get()
    //             case 'DELETE':
    //                 return this.delete()
    //             case 'PUT':
    //                 return this.put()
    //           default:
    //             return HttpError({
    //               statusCode: 405,
    //               errorMessage: `${httpRequest.method} method not allowed.`
    //             })
    //         }   
    // }

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
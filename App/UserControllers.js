
import { RequireParam, httpResponse, empty } from '../helpers'
import { handleKnownErrors } from '../helpers/errors'


export default function createUserControllers({ 
    sanitize= RequireParam('sanitize'),
    tokenGenerator= RequireParm('hash') 
}){
    return class UserControllers{

        constructor(Facade = RequireParam('Facade'), req = {}){
    
            let _Facade = Facade
            let _httpRequest = {
                path: req.path,
                method: req.method,
                pathParams: req.params,
                queryParams: req.query,
                body: req.body
            }
            
            //! getters
            this.Facade = () => _Facade
            this.httpRequest = () => _httpRequest
            
            //! setters
            this.setFacade = (Facade) => { _Facade = Facade }
            this.setHttpRequest = (httpRequest) => { 
                
                // this just to secure our app
                const keys = ['path', 'method', 'pathParams', 'queryParams', 'body']
                Object.keys(httpRequest).forEach(key => {
                    if(!keys.includes(key))
                        throw new Error(`the ${key} doesn't exist in the request object`)
                })
                
                _httpRequest = httpRequest 
            
            }
            
            Object.freeze(this)
        }
    
        requestAdapter(req = RequireParam('Request')) {
            this.setHttpRequest({
                path: req.path,
                method: req.method,
                pathParams: req.params,
                queryParams: req.query,
                body: req.body
              })
        }
            
    
        async login(){

            try {
                const body = sanitize(this.httpRequest().body)
                empty(body)
                const userModel = await this.Facade().getByUsername(body.username)
                if(await this.Facade()
                    .verifyPassword({userId: userModel.id, inPassword: body.password})){
                        let token = tokenGenerator.sign({userId: userModel.id})
                        return httpResponse({
                            statusCode: 200,
                            data: {
                                userId : userModel.id,
                                success : true,
                                token
                            },
                        })
                }


            } catch (e) {
                const resultat = handleKnownErrors(e)
                if(resultat) return resultat

                // if there is any other error, just throw it
                throw e
            }
        }
        
        async registration(){
            
            try {
                const body = sanitize(this.httpRequest().body)
                empty(body)
                const userModel = await this.Facade().add(body)
                
                return httpResponse({
                    statusCode: 201, // created
                    data: {
                        success: true,
                        userModel, 
                        message: 'account has been created.'
                    }
                })
                // console.log('-> ', req)
            } catch (e) {
                const http_response = handleKnownErrors(e)
                if(http_response) return http_response
                
                // if there is any other error, just throw it
                throw e
            }   
        }
        delete(){
            return Promise.reject(new Error('not implemented'));
    
        }
    
        update(){
            return Promise.reject(new Error('not implemented'));
    
        }
    
        getByEmail() {
            return Promise.reject(new Error('not implemented'));
        }
    
        getAll() {
            return Promise.reject(new Error('not implemented'));
        }
    
        addRoom() {
            return Promise.reject(new Error('not implemented'));
        }
    
    }
}
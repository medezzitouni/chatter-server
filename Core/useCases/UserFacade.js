import { IUserFacade  } from '../Ports/in/Facade'
import { User } from '../Entities'
import { RequireParam} from '../../helpers'
import { InvalidPropertyError } from '../../helpers/errors'


export default function createUserFacade({
    crypt= RequireParam('crypt (Hash)')
}){
    return class UserFacade extends IUserFacade{ 
    
        constructor(userRepository){
    
            super()
            let _userRepository = userRepository
            this.userRepository = () => _userRepository
            this.setUserRepository = (userRepository) => { _userRepository = userRepository }
     
            Object.freeze(this)
        }
    
        async add(body) {
            
            body.password = await crypt.hash(body.password)
            let userIns = await this.userRepository().add(new User(body))
            return userIns.model();
        }
    
        update(userInstance) {
            return Promise.reject(new Error('not implemented'));
        }
    
        delete(userId) {
            return Promise.reject(new Error('not implemented'));
        }
    
        async getById(userId) {
            const userInstance = await this.userRepository().getById(userId)
            return userInstance.model(); 
            
        }
    
        getByEmail(email) {
            return Promise.reject(new Error('not implemented'));
        }
        
        async getByUsername(username) {
            const userInstance = await this.userRepository().getByUsername(username)
            return userInstance.model();
        }
        
        find(inputs){
    
            // ! implement it after we've done everything
            // if(Object.keys(inputs).length == 0) this.getAll()
            // if(Object.keys(inputs).length == 1) 
            return Promise.reject(new Error('not implemented'));
        }
        
        getAll() {
            return Promise.reject(new Error('not implemented'));
        }

        async verifyPassword({userId, inPassword}){
            const userInstance = await this.userRepository().getById(userId)
            const valid = await crypt.compare(inPassword, userInstance.password())
            
            if(valid)
                return true
            else 
                throw new InvalidPropertyError("The password that you've entered is incorrect. ", 'password')
                        
        }
        
        addRoom(userInstance, room) {
            return Promise.reject(new Error('not implemented'));
        }
    }
}
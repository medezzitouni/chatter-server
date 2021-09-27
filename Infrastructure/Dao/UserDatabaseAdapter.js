import { UserRepository } from '../../Core/Ports/out/DatabaseService'
import { User } from '../../Core/Entities'
import { NotExistError, UniqueConstraintError } from '../../helpers/errors'

export default class UserDatabaseAdapter extends UserRepository{    
    
    constructor(db){
        super()
       let _db = db
       let _collection = _db.collection('users') 
       
       this.db = () => _db
       this.setDB = (db) => {_db = db}

       this.collection = () => _collection
       this.setCollection = (collection) => { _collection = collection }

        Object.freeze(this)
    }

    add(userInstance){
        return new Promise( async (resolve, reject) => {

            try {
                const user = await this.getByUsername(userInstance.username())
                if(user.id())
                    reject(new UniqueConstraintError(userInstance.username(), 'username'))
                // const user = await this.getByEmail(userInstance.email())
                // if(user.id())
                //     reject(new UniqueConstraintError(userInstance.email(), 'email'))
                
            } catch (err) {
                if(err instanceof NotExistError){
                    try {
                        console.log(userInstance.entity())
                        const userRef = await this.collection().add(userInstance.entity())
                        const userIns = await this.getById(userRef.id)
                        resolve(userIns)   
                    } catch (error) {
                        reject(error)                   
                    }
                }else reject(err)
            }
        })
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId) {
        // repo.find({username: '', passworod: ''})
        return new Promise( async (resolve, reject) => {
            try {
                const userRef = await this.collection().doc(userId)
                const user = await userRef.get()
                if(!user.data()) throw new Error(`problem in DB getting this id ${userId}`) 
                resolve(new User({... user.data(), id: user.id}))
            } catch (error) {
                console.log(error)
                return reject(new NotExistError('User', 'User'))
            }
            
        });
    }

    getByEmail(email) {
        return Promise.reject(new Error('not implemented'));
    }
    getByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                if(! typeof username == 'string') 
                    return reject(new Error('username should be a string'))
            
                const snapshot = await this.collection().where('username', '==', username).get()
                
                if(snapshot.empty) 
                    return reject(new NotExistError(username, 'username'))
                
                const docs = snapshot._docs()
                if(docs.length > 1) 
                    return reject(new Error("this username is used by more than one account, we are sorry we can't let you access"))
                
                const doc = await docs[0]._ref.get()
                return resolve(new User({id: doc.id, ... doc.data()}))
            } catch (err){
                reject(err)
            }
            
        })

        // return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }
    find(inputs){

        // ! implement it after we've done everything
        // if(Object.keys(inputs).length == 0) this.getAll()
        // if(Object.keys(inputs).length == 1) 
        return Promise.reject(new Error('not implemented'));
    }
    addRoom(userInstance, room) {
        return Promise.reject(new Error('not implemented'));
    }
}
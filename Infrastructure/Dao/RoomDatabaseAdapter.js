import { RoomRepository } from '../../Core/Ports/out/DatabaseService'


export default class RoomDatabaseAdapter extends RoomRepository{    
    
    constructor(db){
        super()
        let _db = db

        this.db = () => _db
        this.setDB = (db) => {_db = db}
        
        Object.freeze(this)

    }

    add(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(roomInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(roomId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addUser(userInstance, user) {
        return Promise.reject(new Error('not implemented'));
    }

}



import { MessageRepository } from '../../Core/Ports/out/DatabaseService'

export default class MesssageDatabaseAdapter extends MessageRepository{    
    
    constructor(db){
        super()
        let _db = db

        this.db = () => _db
        this.setDB = (db) => {_db = db}

        Object.freeze(this)
    }
    
    add(messageInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(messageInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(messageInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(messageId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByUserId(userId){
        return Promise.reject(new Error('not implemented'));
    }
    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    // addRoom(messageInstance, room) {
    //     return Promise.reject(new Error('not implemented'));
    // }

}
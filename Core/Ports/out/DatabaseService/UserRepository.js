


// this class gonna be extended by the Dao layer
export default class UserRepository{
    
    add(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId) {
        // repo.find({username: '', passworod: ''})
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(email) {
        return Promise.reject(new Error('not implemented'));
    }
    getByUsername(username) {
        return Promise.reject(new Error('not implemented'));
    }
    
    find(inputs){
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addRoom(userInstance, room) {
        return Promise.reject(new Error('not implemented'));
    }

}
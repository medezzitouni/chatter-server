



// this class gon' be extended by the Dao layer
export default class MessageRepository{

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
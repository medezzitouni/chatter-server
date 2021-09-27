import { IMessageFacade } from '../Ports/in/Facade'


export default class MessageFacade extends IMessageFacade{ 
    
    constructor(messageRepository){
        super()
        let _messageRepository = messageRepository

        this.messageRepository = () => _messageRepository
        this.setMessageRepository = (messageRepository) => { _messageRepository = messageRepository }
 
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
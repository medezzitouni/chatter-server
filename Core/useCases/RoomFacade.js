import { IRoomFacade } from '../Ports/in/Facade'


export default class RoomFacade extends IRoomFacade{ 
    constructor(roomRepository){
        super()
        let _roomRepository = roomRepository

        this.roomRepository = () => _roomRepository
        this.setRoomRepository = (roomRepository) => { _roomRepository = roomRepository }
 
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
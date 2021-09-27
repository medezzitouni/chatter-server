

export default class Room{

    constructor({id, creationDate, roomChatters}){
        
        _id = id
        _creationDate = creationDate
        _roomChatters = roomChatters

        // gettters
        this.id = () => _id
        this.creationDate =  () => _creationDate
        this.roomChatters = () => _roomChatters
        
        // setters
        this.setCreationDate =  (creationDate) =>   {_creationDate = creationDate   }
        this.setRoomChatters = (roomChatters) => { _roomChatters = roomChatters}


        Object.freeze(this)
    }
    model(){
        return {
            id: this.id(),
            creationDate: this.creationDate(),
            roomChatters: this.roomChatters()
        }    
    }
}
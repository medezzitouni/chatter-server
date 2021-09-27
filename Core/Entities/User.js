import { RequireParam } from "../../helpers"


export default class User{

    constructor({id,
         email= RequireParam('email'),
         username= RequireParam('username'), 
         password= RequireParam('password'), 
         connected= true, lastConnection= Date.now(), roomsNumber=0
    }){
        
        var _id = id
        var _email = email
        var _username = username
        var _password = password
        var _connected = connected
        var _lastConnection = lastConnection
        var _roomsNumber = roomsNumber
        
        // gettters
        this.id = () => _id
        this.email =  () => _email
        this.username = () => _username
        this.password = () => _password
        this.connected = () =>  _connected
        this.lastConnection = () => _lastConnection
        this.roomsNumber = () => _roomsNumber
    
        // setters
        this.setEmail =  (email) =>   {_email = email   }
        this.setUsername = (username) => {_username = username}
        this.setPassword = (password) => {_password = password}
        this.setConnected = (connected) =>{_connected = connected}
        this.setLastConnection = (lastConnected) => { _lastConnection = lastConnected }
        this.setRoomsNumber = (roomsNumber) => { _roomsNumber = roomsNumber}


        Object.freeze(this)
    
    }

    model(){
        return {
            id: this.id(),
            username : this.username(),
            email : this.email(),
            connected: this.connected(),
            lastConnection: this.lastConnection(),
            roomsNumber: this.roomsNumber()
        }
    }

    entity(){
        return {
            username : this.username(),
            email : this.email(),
            password: this.password(),
            connected: this.connected(),
            lastConnection: this.lastConnection(),
            roomsNumber: this.roomsNumber()
        }
    }
}
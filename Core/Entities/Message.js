



export default class Messages{

    constructor({id, body, isDeleted, userId, sendingDate}){
        
        _id = id
        _body = body
        _isDeleted = isDeleted
        _userId = userId
        _sendingDate = sendingDate

        // gettters
        this.id = () => _id
        this.body = () => _body
        this.isDeleted =  () => _isDeleted
        this.userId = () => _userId
        this.sendingDate = () => _sendingDate
        
        // setters
        this.setBody = (body) => { _body = body } 
        this.setIsDeleted =  () =>   { _isDeleted = !isDeleted }
        this.setUserId = (userId) => { _userId = userId } 
        this.setSendingDate = (sendingDate) => { _sendingDate = sendingDate }

        Object.freeze(this)
    }

    model(){
        return {
            id: this.id(),
            body: this.body(),
            isDeleted: this.isDeleted(),
            userId : this.userId(),
            sendingDate: this.sendingDate()
        }    
    }
}
import MessageFacade from './MessageFacade'
import createUserFacade from './UserFacade'
import RoomFacade from './RoomFacade'

import { hashAdapter } from '../../App/adapters/'

const UserFacade = createUserFacade({crypt: hashAdapter})

export {
    MessageFacade,
    UserFacade,
    RoomFacade
}


export default Object.freeze({
    MessageFacade,
    UserFacade,
    RoomFacade
})


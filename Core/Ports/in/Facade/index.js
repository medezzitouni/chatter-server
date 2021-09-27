import IUserFacade from './IUserFacade'
import IMessageFacade from './IMessageFacade'
import IRoomFacade from './IRoomFacade'
import { UserFacade, RoomFacade, MessageFacade } from '../../../useCases'

import getRepositories from '../../out/DatabaseService'

export default (() => {
    const repo = getRepositories()

    // injection
    const userFacade = new UserFacade(repo.userRepository)
    const roomFacade = new RoomFacade(repo.roomRepository)
    const messageFacade = new MessageFacade(repo.messageRepository)

    if(!( userFacade instanceof IUserFacade ))
        throw new Error("the userFacade doesn't implement the IUserFacade")

    if(!( roomFacade instanceof IRoomFacade ))
        throw new Error("the roomFacade doesn't implement the IRoomFacade")

    if(!( messageFacade instanceof IMessageFacade ))
        throw new Error("the messageFacade doesn't implement the IMessageFacade")

      
    return Object.freeze ({
        userFacade,
        roomFacade,
        messageFacade  
    });
})();


export {
    IUserFacade,
    IMessageFacade,
    IRoomFacade
}

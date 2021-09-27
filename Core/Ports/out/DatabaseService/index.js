import UserRepository from './UserRepository'
import MessageRepository from './MessageRepository'
import RoomRepository from './RoomRepository'

import Dao from '../../../../Infrastructure/Dao'


export default function(){
        
        if(!(Dao.userDatabaseAdapter instanceof UserRepository))
            throw new Error("the userDatabaseAdapter doesn't implement the UserRepository")

        if(!(Dao.roomDatabaseAdapter instanceof RoomRepository))
            throw new Error("the roomDatabaseAdapter doesn't implement the RoomRepository")

        if(!(Dao.messageDatabaseAdapter instanceof MessageRepository))
            throw new Error("the messageDatabaseAdapter doesn't implement the MessageRepository")

        // asign Repositories
        return Object.freeze({
            userRepository: Dao.userDatabaseAdapter,
            roomRepository: Dao.roomDatabaseAdapter,
            messageRepository: Dao.messageDatabaseAdapter
        })
}


export {
    UserRepository, 
    RoomRepository,
    MessageRepository
}



// export default (() => {
//     return {
//         DatabaseService: new InMemoryDatabaseServices(),
//         CrmServices: new UniversityCrmServices()
//     };
// })();
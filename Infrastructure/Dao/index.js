import UserDatabaseAdapter from './UserDatabaseAdapter'
import RoomDatabaseAdapter from './RoomDatabaseAdapter'
import MessageDatabaseAdapter from './MessageDatabaseAdapter'


import db from '../db'

export default (() => {
    // inject DB
    return {
        userDatabaseAdapter: new UserDatabaseAdapter(db),
        roomDatabaseAdapter: new RoomDatabaseAdapter(db),
        messageDatabaseAdapter: new MessageDatabaseAdapter(db)
    };
})();
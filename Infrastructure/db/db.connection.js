

export default function(admin, serviceAccountKey){

   admin.initializeApp({
           credential: admin.credential.cert(serviceAccountKey)
       })
       const db = admin.firestore()
       if(!db) throw new Error('db is not connected')
       else return db
}
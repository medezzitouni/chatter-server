import jwt from 'jsonwebtoken'

export function sign({userId}){
    let token = jwt.sign(
        { userId : userId},
        'RANDOM_STRING_SECRET',
        {expiresIn : '24h'}
    )
    
    return token
}


export default Object.freeze({
    sign
})




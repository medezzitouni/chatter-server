import bcrypt from 'bcrypt'

export async function hash(input){
        const hash = await bcrypt.hash(input, 10)
        return hash
    
}


export async function compare(input, hash){

        const valid = await bcrypt.compare(input, hash)
        if(valid) return true
        return false
}

export default Object.freeze({
        hash, 
        compare
})





import sanitizeHtml from 'sanitize-html'
import { InvalidPropertyError } from '../../helpers/errors'


export default function sanitize(data){
    
    if(typeof data == typeof {}){
        Object.keys(data).map((key, index) => {
            data[key] = sanitizeHtml(data[key],{
                allowedIframeHostnames: ['Chatter.com']
            }) 
        }) 
        return data
    }else{
        return sanitizeHtml(data, {
            allowedIframeHostnames: ['Chatter.com']
          }) 
   }

}
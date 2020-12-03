import {Service} from './Service.js'
import {WebData} from './WebData.js'

export class WebService extends Service{
    constructor(url){
        super()
        this.url = url
    }
    getAll(callback){
        WebData.get(this.url, null, callback)
    }
    searchAll(filter, callback){
        WebData.get(this.url, filter, callback)
    }
    getItem(data, callback){
        if(data.id){
            WebData.get(''.concat(this.url, '/', data.id), null, callback)  
        }
        else if(data.oid){
            WebData.get(''.concat(this.url, '/', data.oid), null, callback)
        }
        else{
            callback(false, null)
        }
    }
    saveItem(data, callback){
        if(data.id){
            WebData.put(''.concat(this.url, '/', data.id), data, callback)
        }
        else if(data.oid){
            WebData.put(''.concat(this.url, '/', data.oid), data, callback)
        }
        else{
            WebData.post(this.url, data, callback)
        }
    }
    deleteItem(data, callback){
        if(data.id){
            WebData.delete(''.concat(this.url, '/', data.id), null, callback)  
        }
        else if(data.oid){
            WebData.delete(''.concat(this.url, '/', data.oid), null, callback)
        }
        else{
            callback(false, null)
        }
    }
}
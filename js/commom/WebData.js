import {Data} from './Data.js'
import {Ajax} from './Ajax.js'

function createURL(url, data){
    var response = url
    if(data){
        response = ''.concat(url,'?', Data.toParamns(data)) 
    }
    return response
}

function createCallback(callback){
    return (err,data)=>{
        var obj
        try{
            obj = Data.toData(data)
        }
        catch(e){
            obj = null
            console.log(e)
        }
        callback(err,obj)
    }
}

export class WebData{
    static get(url, data, callback){
        Ajax.get(createURL(url,data), createCallback(callback))
    }
    static delete(url, data, callback){
        Ajax.delete(createURL(url,data), createCallback(callback))
    }
    static post(url, data, callback){
        Ajax.post(url, Data.toJSON(data), createCallback(callback))
    }
    static put(url, data, callback){
        Ajax.put(url, Data.toJSON(data), createCallback(callback))
    }
}
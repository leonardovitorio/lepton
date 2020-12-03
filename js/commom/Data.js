import {Ajax} from './Ajax.js'

export class Data{
    static toParamns(data){
        var paramns = []
        for (var key in data){
            if (typeof data[key] !== 'function') {
              paramns.add(encodeURI(key) +"="+ encodeURI(JSON.stringify(data[key])))
            }
        }
        return paramns.join("&");
    }
    static toJSON(data){
        return JSON.stringify(data);
    }
    static toData(str){
        return JSON.parse(str);
    }
}
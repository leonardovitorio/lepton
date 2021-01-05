import {Service} from './Service.js'

export class MockupService extends Service{
    constructor(successful, list, filtredList, item){
        super()
        this.error = !successful
        this.list = list
        this.filtredList = filtredList
        this.item = item
    }
    getAll(callback){
        callback(this.error, this.list)
    }
    searchAll(filter, callback){
        callback(this.error, this.filtredList)
    }
    getItem(data, callback){
        callback(this.error, this.item)
    }
    saveItem(data, callback){
        callback(this.error, 1)
    }
    deleteItem(data, callback){
        callback(this.error, 1)
    }
}
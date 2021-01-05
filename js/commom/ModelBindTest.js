import { ModelView } from "./ModelView.js";
import { rplc } from "./rplc.js";

export class ModelBindTest{
    constructor(alias, model){
        this.alias = alias
        this._model = model
    }
    load(){}
    validate(){
        var keys = Object.keys(this.model);
        var results = [];
        var name = this.alias;
        keys.forEach(key=>{
            var el = document.getElementById(name + '.' + key);
            if(el){
                if(el.tagName.toUpperCase() == 'INPUT' ||
                 el.tagName.toUpperCase() == 'TEXTAREA' ||
                  el.tagName.toUpperCase() == 'SELECT'){
                    if(el.required && (this.model[key] == null || this.model[key] == '')){
                        results.push({field:key, error: 'required'});
                    }
                }
            }
        });
        return results;
    }
    get model(){
        this.load();
        return this._model;
    }
    set model(value){
        this._model = value;
    }
    getView(target, data, content){
        var newContent = rplc(data, content)
        return new ModelView(target,this.alias,this._model,newContent)
    }
}
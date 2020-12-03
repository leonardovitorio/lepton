import { View } from './View.js';

export class ModelView extends View{
    constructor(target, alias, model, content){
       super(target);
       this.alias = alias;
       this._model = model;
       this._content = content;
    }
    render(){
        super.render();
        var keys = Object.keys(this._model);
        var model = this._model;
        var name = this.alias;
        keys.forEach(key => {
            var el = document.getElementById(name + '.' + key);
            if(el){
                if(el.tagName.toUpperCase() == 'INPUT' ||
                 el.tagName.toUpperCase() == 'TEXTAREA' ||
                  el.tagName.toUpperCase() == 'SELECT'){
                    el.value = model[key];
                }
                else{
                    el.innerText = model[key];
                }
            }
        });
    }
}
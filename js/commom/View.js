import { rplc } from "./rplc.js";

export class View{
    constructor(target){
        this.target = target
        this._model = {}
        this._content = {}
        this._childs = []
    }
    setModel(model){
        this.model = model    
        return this
    }
    setContent(content){
        this.content = content
        return this
    }
    setChilds(childs){
        this.childs = childs
        return this
    }
    addChilds(childs){
        childs.forEach((child) =>{
            this.childs.push(child)
        })
        return this
    }
    forEach(target, list, func){
        var result = [];
        list.forEach((item, index)=>{
            var r = func(item,index)
            if(r){
                result.push(r)
            }
        });
        var subView = new View(target).setContent(result.join(""));
        this._childs.push(subView)
        return this
    }
    set model(value){
        this._model = value
    }
    set content(value){
        this._content = value
    }
    set childs(value){
        this._childs = value
    }
    get model(){
        return this._model
    }
    get content(){
        return this._content
    }
    get childs(){
        return this._childs
    }
    test(func){
        func(this)
    }
    render(){
        var el = document.getElementById(this.target)
        if(el){
            el.innerHTML = rplc(this.model,this.content)
        }
        this.childs.forEach(child => {
            child.render()
        });
    }
} 
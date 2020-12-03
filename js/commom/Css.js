import { View } from "./View.js";

export class Css extends View{
    constructor(target){
        super(target);
        this._style = null;
        this._clazz = null;
    }
    load(){
        var el = document.getElementById(this.target);
        if(el){
            el.style = el.style;
            el.clazz = el.clazz;
        }

    }
    setStyle(style){
        this.style = style;
        return this;
    }
    setClazz(clazz){
        this.clazz = clazz;
        return this;
    }
    get style(){
        this.load();
        return this._style
    }
    set style(value){
        this._style = value;
    }
    get clazz(){
        this.load();
        return this._clazz
    }
    set clazz(value){
        this._clazz = value;
    }
    render(){
        var e = document.getElementById(this.target);
        if(e){
            if(this._style){
                e.style = this._style;
            }
            if(this._clazz){
                e.clazz = this._clazz;
            }
        }
    }
}
import { View } from "./View.js";

export class ContentView extends View{
    constructor(target, model, content, childs = []){
        super(target);
        this.model = model;
        this._content = content;
        this._childs = childs;
    }
    render(){
        super.render();
        this._childs.forEach(child => {
            child.render();
        });
    }
}
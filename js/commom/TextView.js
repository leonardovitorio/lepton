import {View} from "./View.js"

export class TextView extends View{
    constructor(target,value){
        super(target);
        this.value = value;
    }
    render(){
        var el = document.getElementById(this.target);
        if(el){
            if(el.tagName.toUpperCase() == 'INPUT' || el.tagName.toUpperCase() == 'TEXTAREA'){
                el.value = this.value;
            }
            else{
                el.innerText = this.value;
            }
        }
    }
}
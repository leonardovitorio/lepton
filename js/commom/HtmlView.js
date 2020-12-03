import { View } from "./View.js";

export class HtmlView extends View{
    constructor(target, html){
        super(target);
        this.html = html;
    }
    render(){
        document.getElementById(this.target).innerHTML = this.html;
    }
} 
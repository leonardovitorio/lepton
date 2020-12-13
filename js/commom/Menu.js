import { html } from "./html.js"
import { ContentView } from "./ContentView.js"
import { HtmlView } from "./HtmlView.js"
import { Master } from "./Master.js"
import { Css } from "./Css.js"
import { Navigator } from "./Navigator.js"
import { ArrayView } from "./ArrayView.js"


export class Menu extends Master{
    constructor(childCtrls){  
        super(childCtrls) 
    }
    init(){
        return new ContentView('view',{},html("master/menu"),[
            new HtmlView('menu',html("menu/list")),
            this.current.init()
        ])
    }
    open_menu() {
        return new Css('menu').setStyle('display:block')
    }
    close_menu() {
        return new Css('menu').setStyle('display:none')
    }
    navigate_to(nameCtrl){
        this.current = this.childCtrls[nameCtrl]
        if(!this.current){
            return null
        }

        document.ctrl = this.current
        return new ArrayView([
            this.current.init(),
            this.close_menu()
        ]) 
    }
    on_back(){
        return Navigator.back()
    }
}
import { View } from "./View.js";

export class NavigateView extends View{
    constructor(controller){
        super("","")
        this.controller = controller
    }
    test(func){
        document.ctrl = this.controller
        func(document.ctrl.init())
    }
    render(){
        document.ctrl = this.controller
        document.ctrl.init().render()
    }
}
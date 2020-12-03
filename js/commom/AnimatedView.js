import { View } from "./View.js";

export class AnimatedView extends View {
    constructor(target, animation){
        super(target)
        this.animation = animation
        this.animation.target = target
    }
    render(){
        animation.init()
        super.render()
        animation.render()
    }
}
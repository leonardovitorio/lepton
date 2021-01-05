import { View } from "./View.js";

export class AnimatedView extends View {
    constructor(target, steps, durationTime, animation){
        super(target)
        this.steps = steps
        this.durationTime = durationTime
        this.animation = animation
    }
    render(){
        var el = document.getElementById(this.target)
        this.animation.init(el)
        this.animation.render(el)
        this.animation.end(el)
    }
}
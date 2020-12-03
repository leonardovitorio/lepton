export class AsyncView {
    constructor(steps){
        this.steps = steps;
    }
    test(func){
        var steps = this.steps;
        steps.render = (view)=>{
            func(view);
        }
        steps.init();
    }
    render(){
        var steps = this.steps;
        steps.render = (view)=>{
            view.render();
        }
        steps.init();
    }
}
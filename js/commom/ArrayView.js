import { View } from "./View.js";

export class ArrayView extends View{
    constructor(array){
        super('')
        this.array = array
    }
    render(){
        this.array.forEach(view => {
            view.render()
        });
    }
}
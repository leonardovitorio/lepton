export class Animation{
    get target(){
        return this.__target
    }
    set target(value){
        this.__target = value
    }
    init(){
        throw "Implements the Init animation method."
    }
    render(){
        throw "Implements the Render animation method."
    }
}


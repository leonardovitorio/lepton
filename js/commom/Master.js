export class Master{
    constructor(childCtrls){
        this.childCtrls = childCtrls 
        var keys = Object.keys(childCtrls)
        this.current = childCtrls[keys[0]]
        document.masterCtrl = this 
    }
}
import { Ajax } from "../commom/Ajax.js";
import { assert } from "../commom/assert.js";
import { Test } from "../commom/Test.js";

export class AjaxTest extends Test {
    run(){
        var list = ['a','b','c','d'];

        list.forEach((item)=>{
            this.getMenu(item)
        });
    }
    getMenu(item){
        var steps = new class{
            init(){
                console.log(item);
                Ajax.get("/lepton/api/menu.json?id="+item,this.callback)
            }
            callback(err, data){
                console.log(data);
                assert(!err,'Success','Fail')
            }
        }();
        steps.init();
    }
}
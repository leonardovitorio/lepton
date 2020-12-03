import { Ajax } from "../commom/Ajax.js";
import { ContentView } from "../commom/ContentView.js";
import { AsyncView } from "../commom/AsyncView.js";

export var ajaxTest = {
    name: "Steps",
    run: ()=>{
        // steps
        /*var steps = new Steps([
            ()=>{
                Ajax.get("/App/api/menu.json",steps.next());
            },(err, data)=>{
                steps.data = new ContentView("view",{},"",[]);
            }
        ]);
        (new AsyncView(steps)).render();*/

        var list = ['a','b','c','d'];

        var steps = new class{
            init(){
                list.forEach((item)=>{
                    console.log(item);
                    Ajax.get("/App/api/menu.json?id="+item,this.callback);
                });
            }
            callback(err, data){
                console.log(data);
            }
        }();
        steps.init();
    }
};
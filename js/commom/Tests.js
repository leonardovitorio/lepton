import { App } from "./App.js";

export class Tests{
    constructor(cases, sources){
        this.__cases = cases;
        this.__sources = sources;
    }
    get cases(){
        return this.__cases;
    }
    run(){
        new App(this.__sources,()=>{
            this.cases.forEach(test => {
                test.run();
            });
        });
    }
}
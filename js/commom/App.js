import { Ajax } from "../commom/Ajax.js"

export var hashSources = {}

export class App {
    constructor(sources, main) {
        this.sources = sources
        this.index = 0
        this.hash = {}
        
        this.main = main;
        this.load()
    }
    load() {
        var app = this
        var t = new class{
            init(){
                for(var i=0; i < app.sources.length; i++){
                    Ajax.get(app.sources[i].url, t.response)
                }
            }
            response(err, data){
                if(err){
                    throw 'Cannot load sources'
                }
                var source = app.sources[app.index]
                source.content = data 
                hashSources[source.name] = source
                app.index++
                if(app.index === app.sources.length){
                    app.main()
                }
            }
        }
        t.init();
    }
}
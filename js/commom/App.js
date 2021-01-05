import { Ajax } from "../commom/Ajax.js"

export var hashSources = {}

var globals = {}

export class App {
    
    static get current(){
        return document.app
    }
    static get globals(){
        return globals
    }
    static get masterCtrl(){
        return document.masterCtrl
    }
    static set masterCtrl(value){
        document.masterCtrl = value 
    }
    static get ctrl(){
        return document.ctrl
    }
    static set ctrl(value){
        document.ctrl = value
    }

    constructor(sources, main) {
        this.sources = sources
        this.index = 0
        
        document.app = this
        
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
                    app.main(app.services)
                }
            }
        }
        t.init();
    }
}
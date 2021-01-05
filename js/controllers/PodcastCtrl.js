import { ContentView } from "../commom/ContentView.js"
import { ListView } from "../commom/ListView.js"
import { Navigator } from "../commom/Navigator.js"
import { html } from "../commom/html.js"
import { PodcastModel } from "../models/PodcastModel.js"
import { AsyncView } from "../commom/AsyncView.js"
import { ModelBind } from "../commom/ModelBind.js"
import { services } from "../services/services.js"
import { ArrayView } from "../commom/ArrayView.js"
import { TextView } from "../commom/TextView.js"

export class PodcastCtrl{
    constructor(){
        this.list = [];
        this.item = new ModelBind('podcast',new PodcastModel("",""))// ModelView('view', 'podcast',{},content);
    }
    init(){
        var self = this;
        var t = new class{
            init(){
                services.Podcasts.getAll(t.callback)
            }
            callback(err, podcasts){
                self.list = podcasts
                var view = new ArrayView([
                    new TextView('menu_title','Podcast'),
                    new ListView("content", {}, podcasts, html("podcast/list"), html("podcast/item"))
                ]) 
                t.render(view);
            }
        };
        return new AsyncView(t);
    }
    on_create(){
        this.action = 'new';
        this.item.model = new PodcastModel('','')
        return this.item.getView('content',{title: 'Podcast'}, html("podcast/form"))
    }
    on_edit(index){
        this.action = 'edit'
        this.item.model = this.list[index]
        return this.item.getView('content',{title: 'Podcast'}, html("podcast/form"))
    }
    on_delete(index){
        this.action = 'delete'
        this.item.model = this.list[index]
        this.index = index
        return new ContentView('content',this.item.model, html("podcast/delete"))
    }
    on_save(){
        var self = this
        var model = this.item.model
        var t = new class {
            init(){
                services.Podcasts.saveItem(model, t.callback)
            }
            callback(err, data){
                t.render(self.init())
            }
        }
        return new AsyncView(t)
    }
    on_back(){
        return this.init()
    }
}
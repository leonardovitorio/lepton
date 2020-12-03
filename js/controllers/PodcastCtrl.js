import { ContentView } from "../commom/ContentView.js";
import { ListView } from "../commom/ListView.js";
import { rplc } from "../commom/rplc.js";
import { Navigator } from "../commom/Navigator.js";
import { TextView } from "../commom/TextView.js";
import { html } from "../commom/html.js"
import { PodcastModel } from "../models/PodcastModel.js";
import { AsyncView } from "../commom/AsyncView.js";
import { ModelBind } from "../commom/ModelBind.js";

export class PodcastCtrl{
    constructor(){
        this.list = [];
        this.item = new ModelBind('podcast',new PodcastModel("",""))// ModelView('view', 'podcast',{},content);
    }
    init(){
        var self = this;
        var steps = new class{
            init(){
                PodcastModel.getAll(this.callback);
            }
            callback(err, data){
                var podcasts = JSON.parse(data);
                self.list = podcasts;
                var view = steps.view = new ListView("view", {}, podcasts, html("podcast/list"), html("podcast/item"));
                steps.render(view);
            }
            render(value){}
        }();
        return new AsyncView(steps);
    }
    on_create(){
        this.action = 'new';
        this.item.model = new PodcastModel('','');
        return this.item.getView('view',{title: 'Podcast'}, html("podcast/form"));
    }
    on_edit(index){
        this.action = 'edit';
        this.item.model = this.list[index];
        return this.item.getView('view',{title: 'Podcast'}, html("podcast/form"));;
    }
    on_delete(index){
        this.action = 'delete';
        this.item.model = this.list[index];
        this.index = index;
        return new ContentView('view',this.item.model, html("podcast/delete"));
    }
    on_save(){

        var errors = [];
        errors = this.item.validate();
        if(errors.length > 0){
            var message = '';
            errors.forEach(e =>{
                message = rplc(e,"The field {field} is {error}!");
            });
            return new TextView('message',message);
        }

        if(this.action == 'edit'){
            this.list[this.index] = this.item.model;
        }
        else if(this.action == 'new'){
            this.list.push(this.item.model);
        }
        else if(this.action == 'delete'){
            delete this.list[this.index];
        }

        return new ListView("view", {}, this.list, html("podcast/list"), html("podcast/item"));
    }
    on_back(){
        return Navigator.back()
    }
}
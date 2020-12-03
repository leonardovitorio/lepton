import { BookModel } from "../models/BookModel.js";
import { ContentView } from "../commom/ContentView.js";
import { ListView } from "../commom/ListView.js";
import { rplc } from "../commom/rplc.js";
import { TextView } from "../commom/TextView.js";
import { html } from "../commom/html.js"
import { Navigator } from "../commom/Navigator.js";
import { ModelBind } from "../commom/ModelBind.js";
import { services } from "../commom/services.js";
import { AsyncView } from "../commom/AsyncView.js";

export class BookCtrl{
    constructor(){
        this.item = new ModelBind('book',new BookModel())
    }
    init(){
        var s = this
        var t = new class{
            init(){
                services.Books.getAll(t.response);
            }
            response(err, data){
                s.list = data
                t.render(new ListView('view',{title:'Books'},s.list,html("book/list"),html("book/item")))
            }
        }
        return new AsyncView(t);
    }
    on_create(){
        this.action = 'new';
        this.item.model = new BookModel('','','');
        return this.item.getView('view',{title: 'Book'},html("book/form"));
    }
    on_edit(index){
        this.action = 'edit';
        this.item.model = this.list[index];
        return this.item.getView('view',{title: 'Book'},html("book/form"));
    }
    on_delete(index){
        this.action = 'delete';
        this.item.model = this.list[index];
        this.index = index;
        return new ContentView('view', this.item.model, html("book/delete"));
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

        return new ListView('view',{title:'Books'},this.list,html("book/list"),html("book/item"));
    }
    on_back(){
        return Navigator.back();
    }
}
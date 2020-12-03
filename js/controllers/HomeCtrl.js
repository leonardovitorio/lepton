import { AsyncView } from "../commom/AsyncView.js";
import { services } from "../commom/services.js";
import { ListView } from "../commom/ListView.js";
import { html } from "../commom/html.js";
import { BookCtrl } from "./BookCtrl.js";
import { PodcastCtrl } from "./PodcastCtrl.js";
import { LoginCtrl } from "./LoginCtrl.js";
import { ContentView} from "../commom/ContentView.js";
import { TextView } from "../commom/TextView.js";
import { MenuCtrl } from "./MenuCtrl.js";
import { Navigator } from "../commom/Navigator.js";

export class HomeCtrl{
    constructor(){
        super()
    }
    init(){
        var t = new class{
            init(){
                services.Menu.getAll(t.callback);
            }
            callback(err, menu){
                t.render(new ContentView('view',{title: 'Home', footer:'Author: Leonardo Stuginski'}, html('master/menuBar'),[
                    new ListView("menu", {}, menu, html("menu/list"), html("menu/item")),
                    new TextView("content", 'Hello World')
                ]))
            }
        }();
        return new AsyncView(t);
    }
    on_click(href){
        if(href === "BookCtrl"){
            return Navigator.push(new BookCtrl())
        }
        if(href === "PodcastCtrl"){
            return Navigator.push(new PodcastCtrl())
        }
    }
    on_back(){
        return Navigator.back()
    }
    mng_menu(){
    }
}
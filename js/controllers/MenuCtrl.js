import { AsyncView } from "../commom/AsyncView.js";
import { services } from "../commom/services.js";
import { html } from "../commom/html.js";
import { BookCtrl } from "./BookCtrl.js";
import { PodcastCtrl } from "./PodcastCtrl.js";
import { ContentView} from "../commom/ContentView.js";
import { Css } from "../commom/Css.js";
import { HtmlView } from "../commom/HtmlView.js";
import { Navigator } from "../commom/Navigator.js";

export class MenuCtrl{
    constructor(){
        this.skip = false;
    }
    init(){
        var t = new class{
            init(){
                services.Menu.getAll(t.callback);
            }
            callback(err, menu){
                t.render(new ContentView('view',{title: 'Home', footer:'Author: Leonardo Stuginski'}, html('master/menuBar'),[
                    new ContentView("menu", {
                        image_src: 'icon.png',
                        image_alt:'Demo App',
                        app_name:'App Demo'
                    }, html("menu/list"),[]),
                    new HtmlView('content',html('home/index'))
                ]))
            }
        }();
        return new AsyncView(t);
    }
    open_menu(){
        return new Css('menu').setStyle('display:block') 
    }
    close_menu(){
        return new Css('menu').setStyle('display:none')
    }
    on_click(href){
        if(href === "BookCtrl"){
            return Navigator.push(new BookCtrl())
        }
        if(href === "PodcastCtrl"){
            return Navigator.push(new PodcastCtrl());
        }
    }
    on_back(){
        return Navigator.back()
    }
}
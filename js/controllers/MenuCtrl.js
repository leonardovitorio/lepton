import { html } from "../commom/html.js";
import { BookCtrl } from "./BookCtrl.js";
import { PodcastCtrl } from "./PodcastCtrl.js";
import { ContentView } from "../commom/ContentView.js";
import { Css } from "../commom/Css.js";
import { Navigator } from "../commom/Navigator.js";
import { TextView } from "../commom/TextView.js";
import { HomeCtrl } from "./HomeCtrl.js"
import { Menu } from "../commom/Menu.js";

export class MenuCtrl extends Menu {
    constructor() {
        super({
            Home: new HomeCtrl(),
            Podcast: new PodcastCtrl()
        })
    }
    init() {
        return new ContentView('view', { footer: 'Author: Leonardo Stuginski' }, html('master/menu'), [
            new TextView('menu_title', 'Home'),
            new ContentView("menu", {
                image_src: 'icon.png',
                image_alt: 'Demo App',
                app_name: 'App Demo'
            }, html("menu/list"), []),
            new HomeCtrl().init(),
            new ContentView('actions', {}, html('home/actions'), [])
        ])
    }
    navigate_to(href) {
        var ctrl = super.navigate_to(href)
        if(ctrl){
            return ctrl
        }
        if (href === "Book") {
            return Navigator.push(new BookCtrl())
        }
    }
    on_back() {
        return Navigator.back()
    }
}


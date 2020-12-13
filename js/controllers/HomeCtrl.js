import { ArrayView } from "../commom/ArrayView.js";
import { html } from "../commom/html.js";
import { HtmlView } from "../commom/HtmlView.js";
import { TextView } from "../commom/TextView.js";
import { MenuCtrl } from "./MenuCtrl.js";

export class HomeCtrl{
    constructor() {
    }
    init() {
        return new ArrayView([
            new TextView('menu_title','Home'),
            new HtmlView('content',html('home/index'))
        ])  
    }
}
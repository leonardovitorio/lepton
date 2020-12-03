import { loop } from "./loop.js";
import { rplc } from "./rplc.js";
import { View } from "./View.js";

export class ListView extends View {
    constructor(target, model, list, content, contentItem) {
        super(target);
        this._model = model;
        this._content = content;
        this.list = list;
        this._contentItem = contentItem;
    }
    renderItem(item, index, contentItem) {
        item.index = index;
        return rplc(item,contentItem);
    }
    render() {
        this.model.list = loop(this.list,this.renderItem, this._contentItem);
        document.getElementById(this.target).innerHTML = rplc(this._model,this._content);
        this.childs.forEach(child => {
            child.render();
        });
    }
}
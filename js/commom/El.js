import { View } from "./View.js";

export class El extends View {
    constructor(target) {
        super(target);
    }
    get model(){
        this.load();
        return this._model;
    }
    load() {
        var el = document.getElementById(this.target);
        if (el) {
            var model = this._model;
            var keys = Object.keys(this._model);
            keys.forEach(key => {
                model[key] = el[key];
            });
        }
    }
    render() {
        var el = document.getElementById(this.target);
        if (el) {
            var obj = this.obj;
            var keys = Object.keys(this.obj);
            keys.forEach(key => {
                el[key] = obj[key];
            });
        }
    }
}
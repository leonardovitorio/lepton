import { LoginModel } from "../models/LoginModel.js";
import { TextView } from "../commom/TextView.js";
import { html } from "../commom/html.js";
import { TermsCtrl } from "../controllers/TermsCtrl.js";
import { ContentView } from "../commom/ContentView.js";
import { Navigator } from "../commom/Navigator.js" 
import { ModelBind } from "../commom/ModelBind.js";

export class NewLoginCtrl {
    constructor(){
        this.login = new ModelBind('login',new LoginModel("","")) //('content','login',new LoginModel("",""),html("login/newLogin"));
    }
    init() {
        this.login.model = new LoginModel("","");
        return new ContentView('view',{title: 'Register', footer: 'Author: Leonardo Stuginski'},html('master/backBar'),[
            this.login.getView('content',{},html("login/newLogin"))
        ]);
    }
    on_click() {
        if(this.login.validate().length == 0){
            var model = this.login.model;
            return Navigator.back();
        }
        else{
            return new TextView('message','User or password is required!');
        }
    }
    terms() {
        return Navigator.push(new TermsCtrl());
    }
    on_back(){
        return Navigator.back();
    }
}
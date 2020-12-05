import { LoginModel } from "../models/LoginModel.js";
import { TextView } from "../commom/TextView.js";
import { html } from "../commom/html.js";
import { MenuCtrl } from "./MenuCtrl.js";
import { services } from "../commom/services.js";
import { AsyncView } from "../commom/AsyncView.js";
import { ContentView } from "../commom/ContentView.js";
import { Navigator } from "../commom/Navigator.js";
import { NewLoginCtrl } from "./NewLoginCtrl.js";
import { ModelBind } from "../commom/ModelBind.js";

export class LoginCtrl {
    constructor(){
        this.login = new ModelBind('login',new LoginModel())
    }
    init() {
        this.login.model = new LoginModel("","");
        return new ContentView('view',{title: 'App Demo', footer: 'Author: Leonardo Stuginski'},html('master/bar'),[
            this.login.getView('content',{},html('login/login'))
        ]);
    }
    on_click() {
        var login = this.login.model;
        var t = new class{
            init(){
                if(login.name != "" && login.password != ""){
                    services.Users.searchAll(login,t.callback)
                }else{
                    t.render(new TextView('message','This name and password field not be empty.'))
                }
            }
            callback(err,users){
                if(err){
                    t.render(new TextView('message',"Network problem!!"))
                }
                else if(users.length == 0){
                    t.render(new TextView('message',"User not found"))
                }
                else{
                    if(users[0].name = 'leonardo' && users[0].password == "123456"){
                        t.render(Navigator.push(new MenuCtrl()));
                    }
                    else{
                        t.render(new TextView('message','User or password is invalid!'))
                    }
                }
            }
        }
        return new AsyncView(t)
    }
    on_newLogin(){
        return Navigator.push(new NewLoginCtrl());
    }
}
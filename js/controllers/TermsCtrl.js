import { AsyncView } from "../commom/AsyncView.js";
import { services } from "../commom/services.js";
import { ContentView } from "../commom/ContentView.js";
import { html } from "../commom/html.js";
import { HtmlView } from "../commom/HtmlView.js";
import { Navigator } from "../commom/Navigator.js";

export class TermsCtrl{
    init(){
        var t = new class{
            init(){
                services.Terms.getAll(t.callback);
            }
            callback(err, terms){
                if(err){
                    t.render(new ContentView('view',{title: 'Terms', footer:'Author: Leonardo Stuginski'}, html('master/backBar'),[
                        new ContentView('content',{}, html('terms/index'),[
                        ])
                    ]))
                }
                else{
                    t.render(new ContentView('view',{title: 'Terms', footer:'Author: Leonardo Stuginski'}, html('master/backBar'),[
                        new ContentView('content',{}, html('terms/index'),[
                            new HtmlView('terms', terms[0].text)
                        ])
                    ]))
                }
            }
        }();
        return new AsyncView(t);
    }
    on_back(){
        return Navigator.back()
    }
}
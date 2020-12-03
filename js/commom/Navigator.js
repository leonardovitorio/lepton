import { NavigateView } from "./NavigateView.js"

var views = []
export class Navigator{
    static push(ctrl){
        var view = new NavigateView(ctrl)
        views.push(view)
        return view
    }
    static back(ctrl){
        if(views.length > 1){
            views.pop()
        }
        return views[views.length -1]
    }
    static start(firstCtrl){
        views = []
        return Navigator.push(firstCtrl)
    }
}
import { LoginCtrl } from "./controllers/LoginCtrl.js";
import { App } from "./commom/App.js";
import { sources } from "./views/sources.js";
import { Navigator } from "./commom/Navigator.js"

new App(sources, ()=>{
    //Declare 
    document.ctrl = new LoginCtrl();
    Navigator.start(document.ctrl).render();
});




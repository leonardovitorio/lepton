import { LoginCtrl } from "./controllers/LoginCtrl.js";
import { App } from "./commom/App.js";
import { sources } from "./views/sources.js";
import { services } from './commom/services.js';
import { WebService } from "./commom/WebService.js";
import { MockupService } from "./commom/MockupService.js";
import { UserModel } from "./models/UserModel.js";
import { TermsModel } from "./models/TermsModel.js";
import { Navigator } from "./commom/Navigator.js"
import { BookModel } from "./models/BookModel.js";

new App(sources, ()=>{
    //Declare dependencies
    services.Users = new MockupService(false,[],[new UserModel("leonardo","123456")],new UserModel("leonardo","123456"))
    services.Terms = new MockupService(false,[new TermsModel(`
        <h2>Terms and Condictions</h2>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
    `)],[],null)
    services.Books = new MockupService(false,[
        new BookModel('Algoritimos','Leonardo','2020'),
        new BookModel('Jornalismo na Atualidade','Patricia','2011'),
        new BookModel('Metodologia','Severino','2003'),
    ],[],new BookModel('Algoritimos','Leonardo','2020'))
    services.Menu = new WebService("/App/api/menu.json")

    //Declare 
    document.ctrl = new LoginCtrl();
    Navigator.start(document.ctrl).render();
});




import { WebService } from "../commom/WebService.js";
import { MockupService } from "../commom/MockupService.js";
import { TermsModel } from "../models/TermsModel.js";
import { BookModel } from "../models/BookModel.js";
import { UsersService } from "./UsersService.js";
import { PodcastsServices } from "./PodcastsService.js";

export var services = {        
    Users: new UsersService(),
    Podcasts: new PodcastsServices(),
    Terms: new MockupService(true,[new TermsModel(`
        <h2>Terms and Condictions</h2>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
        <p>Nonnonono nononon nonono nonon nonononon noonononono nono no onon n ononononnno</p>
    `)],[],null),
    Books: new MockupService(true,[
        new BookModel('Algoritimos','Leonardo','2020'),
        new BookModel('Jornalismo na Atualidade','Patricia','2011'),
        new BookModel('Metodologia','Severino','2003'),
    ],[],new BookModel('Algoritimos','Leonardo','2020')),
    Menu: new WebService("/lepton/api/menu.json")
}
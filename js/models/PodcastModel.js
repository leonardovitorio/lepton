import { Ajax } from "../commom/Ajax.js";

export class PodcastModel{
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
    static getAll(callback){
        Ajax.get("/App/api/podcast.json", callback);
    }
    static save(model){
        Ajax.post("/App/api/podcast.json", callback);
    }
    static delete(model){
        Ajax.delete("/App/api/podcast.json", callback);
    }
}
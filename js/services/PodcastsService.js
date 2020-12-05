import { WebService } from '../commom/WebService.js'

export class PodcastsServices extends WebService {
    constructor() {
        super("/lepton/api/podcast.json")
    }
}
import { WebService } from '../commom/WebService.js'

export class UsersService extends WebService {
    constructor() {
        super("/lepton/api/users.json")
    }
}
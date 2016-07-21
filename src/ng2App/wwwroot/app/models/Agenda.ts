import {ItemOfBusiness} from './itemofbusiness';
export class Agenda {
    ItemOfBusinesses: Array<ItemOfBusiness>;
    constructor() {
        this.ItemOfBusinesses = new Array<ItemOfBusiness>();
    }
}
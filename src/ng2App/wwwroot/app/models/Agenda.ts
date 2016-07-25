import {ItemOfBusiness} from './itemofbusiness';
export class Agenda {
    Name: string;
    ItemOfBusinesses: Array<ItemOfBusiness>;
    constructor() {
        this.ItemOfBusinesses = new Array<ItemOfBusiness>();
    }
}
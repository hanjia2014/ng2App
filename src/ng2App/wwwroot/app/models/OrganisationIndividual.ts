import {Witness} from './witness';
import {BaseModel} from './basemodel'
export class OrganisationIndividual extends BaseModel {
    Witnesses: Array<Witness>;
    constructor() {
        super();
        this.Witnesses = new Array<Witness>();
    }
}
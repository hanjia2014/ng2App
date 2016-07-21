import {OrganisationIndividual} from './OrganisationIndividual'
import {BaseModel} from './basemodel'
export class HearingOfEvidence extends BaseModel {
    Organisations: Array<OrganisationIndividual>;
    constructor() {
        super();
        this.Organisations = new Array<OrganisationIndividual>();
    }
}
import {BaseModel} from './basemodel'
import {HearingOfEvidence} from './hearingofevidence'
export class ItemOfBusiness extends BaseModel{
    HearingOfEvidences: Array<HearingOfEvidence>;
    constructor() {
        super();
        this.HearingOfEvidences = new Array<HearingOfEvidence>();
    }
}
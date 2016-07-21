import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { HearingOfEvidence } from '../models/HearingOfEvidence';
import { HearingOfEvidenceComponent } from './hearingofevidence.component';
import { Multiselect } from './plugins/multiselect';
@Component({
    selector: 'item-of-business',
    templateUrl: `app/templates/item-of-business.html`,
    styles: [``],
    directives: [HearingOfEvidenceComponent, Multiselect],
    providers: []
})
export class ItemOfBusinessComponent implements OnInit {
    @Input()
    item: ItemOfBusiness;
    @Output() itemUpdateOutput = new EventEmitter<any>();

    multiselectModel: Array<any> = [];
    subItemTypes: Array<any> = [];

    public addSubItem = () => {
        let subItemType = this.multiselectModel['name'];
        if (subItemType == "Hearing Of Evidence")
            this.addHearing();
    }

    private addHearing = () => {
        var hearing = new HearingOfEvidence();
        hearing.Name = "new hearing";
        this.item.HearingOfEvidences.push(hearing);
        this.itemUpdateOutput.next(hearing);
    }

    subItemTypeSelected(multiselectModel: any) {
        this.multiselectModel = multiselectModel;
    }

    ngOnInit() {
        this.subItemTypes = [{ id: 1, name: "Hearing Of Evidence" }, { id: 2, name: "Consideration" }, { id: 3, name: "Free Text" }];
    }
    constructor() {

    }
}
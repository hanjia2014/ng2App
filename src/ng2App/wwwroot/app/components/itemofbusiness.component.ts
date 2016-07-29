import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { HearingOfEvidence } from '../models/HearingOfEvidence';
import { HearingOfEvidenceComponent } from './hearingofevidence.component';
import { Multiselect } from './plugins/multiselect';
import { SELECT_DIRECTIVES } from './plugins/ng2-select/ng2-select';
import { SortableBase } from './base.sortable.component';
import { Select2Component } from './plugins/select2';
@Component({
    selector: 'item-of-business',
    templateUrl: `app/templates/item-of-business.html`,
    styles: [`.panel-heading {
                    cursor: move;
              }
            `],
    directives: [HearingOfEvidenceComponent, Multiselect, SELECT_DIRECTIVES, Select2Component],
    providers: []
})
export class ItemOfBusinessComponent extends SortableBase implements OnInit, AfterViewInit {
    @Input()
    item: ItemOfBusiness;
    @Input()
    itemOfBusinessIndex: number;
    @Output() itemUpdateOutput = new EventEmitter<any>();

    multiselectModel: Array<any> = [];
    subItemTypes: Array<any> = [];
    selectedItem: any;
    selectId: string;

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
        this.SortableListId = 'draggableHearinglList' + this.itemOfBusinessIndex;

        this.selectId = 'mySel' + this.itemOfBusinessIndex;
    }

    ngAfterViewInit() {
        this.SortableConfig();
    }
    constructor() {
        super();
    }



    //public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    //    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    //    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    //    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    //    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    //    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    //    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    //    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    //    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

    public items = [{ id: 1, text: "Hearing Of Evidence" }, { id: 2, text: "Consideration" }, { id: 3, text: "Free Text" }];
    public items2 = [{ id: "Hearing Of Evidence", text: "Hearing Of Evidence" }, { id: "Consideration", text: "Consideration" }, { id: "Free Text", text: "Free Text" }];

    private value: any = ['Athens'];
    private _disabledV: string = '0';
    private disabled: boolean = false;

    private get disabledV(): string {
        return this._disabledV;
    }

    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value: any): void {
        this.selectedItem = value;
    }

    public removed(value: any): void {
        this.selectedItem == null;
    }

    public refreshValue(value: any): void {
        this.value = value;
    }

    public addItem = () => {
        var subItemType = this.selectedItem['text'];
        if (subItemType == null)
            subItemType = this.selectedItem;
        if (subItemType == "Hearing Of Evidence")
            this.addHearing();
    }

    public itemsToString(value: Array<any> = []): string {
        return value
            .map((item: any) => {
                return item.text;
            }).join(',');
    }
}
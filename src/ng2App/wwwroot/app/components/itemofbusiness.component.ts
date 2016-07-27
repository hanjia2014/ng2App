import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { HearingOfEvidence } from '../models/HearingOfEvidence';
import { HearingOfEvidenceComponent } from './hearingofevidence.component';
import { Multiselect } from './plugins/multiselect';
import { SELECT_DIRECTIVES } from './plugins/ng2-select/ng2-select';

@Component({
    selector: 'item-of-business',
    templateUrl: `app/templates/item-of-business.html`,
    styles: [`#draggableHearinglList .panel-heading {
        cursor: move;
    }`],
    directives: [HearingOfEvidenceComponent, Multiselect, SELECT_DIRECTIVES],
    providers: []
})
export class ItemOfBusinessComponent implements OnInit, AfterViewInit {
    @Input()
    item: ItemOfBusiness;
    @Output() itemUpdateOutput = new EventEmitter<any>();

    multiselectModel: Array<any> = [];
    subItemTypes: Array<any> = [];
    selectedItem: any;

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

    ngAfterViewInit() {
        (function ($: any) {
            var panelList = $('#draggableHearinglList');

            panelList.sortable({
                // Only make the .panel-heading child elements support dragging.
                // Omit this to make then entire <li>...</li> draggable.
                handle: '.panel-heading',
                update: function () {
                    $('.panel', panelList).each(function (index: any, elem: any) {
                        var $listItem = $(elem),
                            newIndex = $listItem.index();

                        // Persist the new indices.
                    });
                }
            });
        })(jQuery);
    }
    constructor() {

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
        let subItemType = this.selectedItem['text'];
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
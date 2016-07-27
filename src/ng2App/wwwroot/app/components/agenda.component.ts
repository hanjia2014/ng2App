import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {ItemOfBusinessComponent} from './itemofbusiness.component';
import { HearingOfEvidence } from '../models/hearingofevidence';
import { AgendaFooterComponent } from './agenda.footer.component';
import { BaseModel } from '../models/basemodel'
import { SortableBase } from './base.sortable.component';

@Component({
    selector: 'agenda-detail',
    templateUrl: `app/templates/agenda-detail.html`,
    styles: [`#draggableItemList .panel-heading {
        cursor: move;
    }`],
    directives: [ItemOfBusinessComponent, AgendaFooterComponent],
    providers: []
})
export class AgendaComponent extends SortableBase implements OnInit, AfterViewInit {
    @Input()
    agenda: Agenda;

    addItemOfBusiness = () => {
        var item = new ItemOfBusiness();
        item.Name = "New Item";
        this.agenda.ItemOfBusinesses.push(item);
    }

    ngOnInit() {
        this.SortableListId = 'draggableItemList';
    }

    ngAfterViewInit() {
        this.SortableConfig();
    }

    itemListener(item: BaseModel) {
        console.log(item.Name + ' created');
    }
    constructor() {
        super();
    }
}
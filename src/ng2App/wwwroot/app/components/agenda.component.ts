import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {ItemOfBusinessComponent} from './itemofbusiness.component';
import { HearingOfEvidence } from '../models/hearingofevidence';
import { AgendaFooterComponent } from './agenda.footer.component';
import { BaseModel } from '../models/basemodel'
import { SortableBase } from './base.sortable.component';
import { DatePickerComponent } from './plugins/datepicker';

@Component({
    selector: 'agenda-detail',
    templateUrl: `app/templates/agenda-detail.html`,
    styles: [`#draggableItemList .panel-heading {
        cursor: move;
    }
    .save-button{
        background-color: lightgreen;
        border-color: green;
        border-width: thick;
        color: darkgreen;
    }
.number-list ol {
            counter-reset: item;
        }

        .number-list li {
            list-style: none;
            counter-increment: item;
            margin-bottom: 5px;
        }

            .number-list li:before {
                content: counters(item, ".") " ";
                background: orange;
                margin-right: 10px;
                border-radius: 100%;
                color: white;
                min-width: 1.2em;
                text-align: center;
                display: inline-block;
            }`],
    directives: [ItemOfBusinessComponent, AgendaFooterComponent, DatePickerComponent],
    providers: []
})
export class AgendaComponent extends SortableBase implements OnInit, AfterViewInit {
    @Input()
    agenda: Agenda;
    agendaDate: Date;
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
    public dateChange(value: Date) {
        this.agendaDate = value;
    }

    removeItemOfBusiness = (index: number) => {
        this.agenda.ItemOfBusinesses.splice(index, 1);
    }
}
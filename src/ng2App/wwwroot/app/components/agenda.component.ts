﻿import { Component, OnInit, Input, ContentChildren, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {ItemOfBusinessComponent} from './itemofbusiness.component';
import { HearingOfEvidence } from '../models/hearingofevidence';
import { AgendaFooterComponent } from './agenda.footer.component';
import { BaseModel } from '../models/basemodel'
import { SortableBase } from './base.sortable.component';
import { DatePickerComponent } from './plugins/datepicker';
import { TestDragula } from './test.dragula';
import { Dragula } from './plugins/dragula/src/app/directives/dragula.directive';
import { DragulaService } from './plugins/dragula/src/app/providers/dragula.provider';

@Component({
    selector: 'agenda-detail',
    viewProviders: [DragulaService],
    templateUrl: `app/templates/agenda-detail.html`,
    styles: [`#draggableItemList .panel-heading {
        cursor: move;
    }
        /*.number-list ol {
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
                margin-left: -2em;
            }*/`],
    directives: [ItemOfBusinessComponent, AgendaFooterComponent, DatePickerComponent, TestDragula, Dragula],
    providers: []
})
export class AgendaComponent extends SortableBase implements OnInit {
    @Input()
    agenda: Agenda;
    agendaDate: Date;

    @ViewChildren(ItemOfBusinessComponent) children: QueryList<ItemOfBusinessComponent>;

    addItemOfBusiness = () => {
        var item = new ItemOfBusiness();
        item.Name = "New Item";
        this.agenda.ItemOfBusinesses.push(item);
    }

    ngOnInit() {
        this.SortableListId = 'draggableItemList';
    }

    itemListener(item: BaseModel) {
        console.log(item.Name + ' created');
    }
    constructor(private dragulaService: DragulaService) {
        super();
        dragulaService.setOptions('sixth-bag', {
            moves: (el: any, container: any, handle: any) => {
                return handle.className === 'handle';
            }
        });
    }
    public dateChange(value: Date) {
        this.agendaDate = value;
    }

    removeItemOfBusiness = (index: number) => {
        this.agenda.ItemOfBusinesses.splice(index, 1);
    }

    toggleAll = (e: any) => {
        this.isExpand = !this.isExpand;
        this.children.toArray().forEach((child : ItemOfBusinessComponent) => child.toggle(e));
    }
}
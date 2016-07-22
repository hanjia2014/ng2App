import { Component, OnInit, Input, ContentChildren } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {ItemOfBusinessComponent} from './itemofbusiness.component';
import { HearingOfEvidence } from '../models/hearingofevidence';
import { AgendaFooterComponent } from './agenda.footer.component';
import { BaseModel } from '../models/basemodel'

@Component({
    selector: 'agenda-detail',
    templateUrl: `app/templates/agenda-detail.html`,
    styles: [``],
    directives: [ItemOfBusinessComponent, AgendaFooterComponent],
    providers: []
})
export class AgendaComponent implements OnInit {
    @Input()
    agenda: Agenda;

    addItemOfBusiness = () => {
        var item = new ItemOfBusiness();
        item.Name = "New Item";
        this.agenda.ItemOfBusinesses.push(item);
    }

    ngOnInit() {
    }

    itemListener(item: BaseModel) {
        console.log(item.Name + ' created');
    }
    constructor() {

    }
}
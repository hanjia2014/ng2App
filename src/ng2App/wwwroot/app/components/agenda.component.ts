import { Component, OnInit, Input, ContentChildren, AfterViewInit } from '@angular/core';
import { Agenda } from '../models/agenda';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {ItemOfBusinessComponent} from './itemofbusiness.component';
import { HearingOfEvidence } from '../models/hearingofevidence';
import { AgendaFooterComponent } from './agenda.footer.component';
import { BaseModel } from '../models/basemodel'

@Component({
    selector: 'agenda-detail',
    templateUrl: `app/templates/agenda-detail.html`,
    styles: [`#draggableItemList .panel-heading {
        cursor: move;
    }`],
    directives: [ItemOfBusinessComponent, AgendaFooterComponent],
    providers: []
})
export class AgendaComponent implements OnInit, AfterViewInit {
    @Input()
    agenda: Agenda;

    addItemOfBusiness = () => {
        var item = new ItemOfBusiness();
        item.Name = "New Item";
        this.agenda.ItemOfBusinesses.push(item);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        (function ($: any) {
            var panelList = $('#draggableItemList');

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

    itemListener(item: BaseModel) {
        console.log(item.Name + ' created');
    }
    constructor() {

    }
}
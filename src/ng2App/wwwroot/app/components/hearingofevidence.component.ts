import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HearingOfEvidence } from '../models/HearingOfEvidence';
import { OrganisationIndividual } from '../models/OrganisationIndividual';
import { MODAL_DIRECTIVES, ModalComponent } from './plugins/ng2-bs3-modal/ng2-bs3-modal';
import { SortableBase } from './base.sortable.component';

@Component({
    selector: 'hearing-of-evidence',
    templateUrl: `app/templates/hearing-of-evidence.html`,
    styles: [`.panel-heading {
                    cursor: move;
              }
            `],
    providers: []
})
export class HearingOfEvidenceComponent extends SortableBase implements OnInit {
    @Input()
    hearing: HearingOfEvidence;
    @Input()
    hearingIndex: number;
    @ViewChild('modals')
    modal: ModalComponent;

    newOrganisation: OrganisationIndividual;
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    constructor() {
        super();
    }

    ngOnInit() {
        this.SortableListId = "organisationList" + this.hearingIndex;
        this.newOrganisation = new OrganisationIndividual();
    }

    opened() {
        this.newOrganisation = new OrganisationIndividual();
    }

    navigate() {

    }

    open() {
        this.modal.open();
    }

    closed() {
        this.hearing.Organisations.push(this.newOrganisation);
    }

    dismissed() {

    }
}
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HearingOfEvidence } from '../models/HearingOfEvidence';
import { MODAL_DIRECTIVES, ModalComponent } from './plugins/ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'hearing-of-evidence',
    templateUrl: `app/templates/hearing-of-evidence.html`,
    styles: [``],
    directives: [MODAL_DIRECTIVES],
    providers: []
})
export class HearingOfEvidenceComponent {
    @Input()
    hearing: HearingOfEvidence;

    @ViewChild('modals')
    modal: ModalComponent;

    items: string[] = ['item1', 'item2', 'item3'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    constructor() {

    }

    opened() {
        
    }

    navigate() {
        
    }

    open() {
        this.modal.open();
    }

    closed() {
        
    }

    dismissed() {
        
    }
}
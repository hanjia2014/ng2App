import { Component, OnInit, Input } from '@angular/core';
import { HearingOfEvidence } from '../models/HearingOfEvidence';

@Component({
    selector: 'hearing-of-evidence',
    templateUrl: `app/templates/hearing-of-evidence.html`,
    styles: [``],
    directives: [],
    providers: []
})
export class HearingOfEvidenceComponent {
    @Input()
    hearing: HearingOfEvidence;

    constructor() {

    }
}
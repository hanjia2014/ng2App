import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Agenda} from '../models/agenda';
import {Witness} from '../models/witness';
import {OrganisationIndividual} from '../models/organisationindividual';
import {HearingOfEvidence} from '../models/hearingofevidence';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { IAgendaService } from './app.interfaces';
import 'rxjs/Rx';

@Injectable()
export class AgendaService implements IAgendaService {
    apiUrl: string = 'api/agenda/';
    constructor(private http: Http) {
    }
    getItemOfBusinesses(agendaId: number): Observable<ItemOfBusiness[]> {

        return this.http.get(this.apiUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        });
    }

    getAgenda(id: number): Observable<Agenda> {
        var completeUrl = this.apiUrl + id;
        return this.http.get(completeUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        });
    }
}
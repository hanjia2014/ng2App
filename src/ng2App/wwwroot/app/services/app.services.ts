import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Agenda} from '../models/agenda';
import {Witness} from '../models/witness';
import {OrganisationIndividual} from '../models/organisationindividual';
import {HearingOfEvidence} from '../models/hearingofevidence';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { IAgendaService } from './app.interfaces';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

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
        return this.http.get(this.apiUrl + id).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No objects to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        });
    }

    saveAgenda(agenda: Agenda): void {
        let body = JSON.stringify(agenda);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.apiUrl, body, options);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
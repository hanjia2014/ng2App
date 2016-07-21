import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Agenda} from '../models/agenda';
import {Witness} from '../models/witness';
import {OrganisationIndividual} from '../models/organisationindividual';
import {HearingOfEvidence} from '../models/hearingofevidence';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { IAgendaService } from './app.interfaces';

@Injectable()
export class AgendaService implements IAgendaService {
    apiUrl: string = '/umbraco/api/events/GetEventsOverview/?alias=event';
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

    getAgenda(id: number) {
        var witness = new Witness();
        witness.Name = "John Doe";
        witness.Position = "Staff";

        var organisation = new OrganisationIndividual();
        organisation.Name = "Org One";
        organisation.Witnesses = new Array<Witness>();
        organisation.Witnesses.push(witness);

        var hearing = new HearingOfEvidence();
        hearing.Name = "Hearing One";
        hearing.Organisations = new Array<OrganisationIndividual>();
        hearing.Organisations.push(organisation);

        var itemofbusiness = new ItemOfBusiness();
        itemofbusiness.Name = "Item One";
        itemofbusiness.HearingOfEvidences = new Array<HearingOfEvidence>();
        itemofbusiness.HearingOfEvidences.push(hearing);

        var agenda = new Agenda();
        agenda.ItemOfBusinesses = new Array<ItemOfBusiness>();
        agenda.ItemOfBusinesses.push(itemofbusiness);

        return agenda;
    }
}
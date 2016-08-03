import { Observable }     from 'rxjs/Observable';
import { ItemOfBusiness } from '../models/itemofbusiness';
import { Agenda } from '../models/agenda';
import { AgendaSummary } from '../models/agendasummary';
import { Dictionary } from '../models/dictionary';
import { Response } from '@angular/http';

export interface IAgendaService {
    getItemOfBusinesses: (agendaId: number) => Observable<ItemOfBusiness[]>;
    getAgenda: (id: number) => Observable<Agenda>;
    saveAgenda: (agenda: Agenda) => Observable<Response>;
    getAgendaList: () => Observable<Array<AgendaSummary>>;
}
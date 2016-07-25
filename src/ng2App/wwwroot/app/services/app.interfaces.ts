﻿import { Observable }     from 'rxjs/Observable';
import { ItemOfBusiness } from '../models/itemofbusiness';
import {Agenda} from '../models/agenda';

export interface IAgendaService {
    getItemOfBusinesses: (agendaId: number) => Observable<ItemOfBusiness[]>;
    getAgenda: (id: number) => Observable<Agenda>;
}
import { Note } from './note';

export class Modblock {
    
    mbId: string;

    modId: string;
    langId: string;

    status: boolean;
    mbName: string;

    //transient
    notes: Note[];
}

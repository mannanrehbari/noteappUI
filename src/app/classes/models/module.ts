import { Modblock } from './modblock';

export class Module {
    modId: string;
    langId: string;

    modVotes: number;

    modName: string;
    modHeader: string;
    modDescription: string;

    //transient: 
    modBlocks: Modblock[];
}

import { Departamento } from './departamento';
import { Clima } from './clima';

export class Ciudad {
    id: number;
    ciudad: string;
    id_departamento: Departamento;
    altitud: string;
    id_clima: Clima;
}

import { Departamento } from './clientes/departamento';
import { Clima } from './clientes/clima';

export class Ciudad {
    id!: number;
    ciudad!: string;
    id_departamento!: Departamento;
    altitud!: string;
    id_clima!: Clima;
}
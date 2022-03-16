import { Ciudad } from '../../ciudad';
import { TipoDocumento } from '../../tipo_documento';
export class Vendedor {
    id!: number;
    documento!: string;
    nombre!: string;
    telefono!: string;
    celular!: string;
    email!: string;
    direccion!: string;
    fecha_ingreso!: string;
    ciudad: Ciudad;
    tipo_documento: TipoDocumento;
    activo!: string;

}

import { TipoDocumento } from "../../tipo_documento";
import { Ciudad } from "../../ciudad";

export class Cliente {
    id!: number;
    documento!: string;
    nombre!: string;
    contacto!: string;
    cargo!: string;
    direccion!: string;
    telefono!: string;
    telefono1!: string;
    celular!: string;
    email!: string;
    fecha_ingreso!: string;
    ciudad!: Ciudad;
    tipo_documento!: TipoDocumento;
    observaciones!: string;

}

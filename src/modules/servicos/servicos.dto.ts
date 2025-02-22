import { Appointment } from "@prisma/client";

export class ServicoDTO {
    id: string;
    name: string;
    price: number;
    duration: number;
    appointments:Appointment[];
    }
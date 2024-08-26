import { Regiao } from "./regiao";

export interface EstadoResponse {

    id: number,
    sigla: string,
    nome: string,
    regiao: Regiao

}
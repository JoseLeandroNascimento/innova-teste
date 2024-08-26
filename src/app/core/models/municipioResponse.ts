import { Microrregiao } from "./microregiao";

export interface MunicipioResponse {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
}
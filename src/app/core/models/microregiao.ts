import { Mesorregiao } from "./mesoregiao";

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}
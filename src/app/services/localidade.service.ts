import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EstadoResponse } from '../core/models/estadoResponse';
import { MunicipioResponse } from '../core/models/municipioResponse';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {

  private urlApiIbge: string = environment.urlApiIbge

  constructor(
    private httpClient: HttpClient
  ) { }

  public getEstados(): Observable<EstadoResponse[]> {
    return this.httpClient.get<EstadoResponse[]>(`${this.urlApiIbge}estados`).pipe(shareReplay(2))
  }

  public getEstadoPorSigla(sigla: string): Observable<EstadoResponse | undefined> {
    return this.getEstados().pipe(
      shareReplay(2),
      map(estados => {
        return estados.find(item => item.sigla.toLowerCase() === sigla.toLowerCase())
      })
    )
  }

  public getMunicipioPorEstado(idEstado: number): Observable<MunicipioResponse[]> {
    return this.httpClient.get<MunicipioResponse[]>(`${this.urlApiIbge}estados/${idEstado}/municipios`).pipe(shareReplay(2))
  }

  public getMunicipioPorNome(idEstado: number, nome: string): Observable<MunicipioResponse | undefined> {
    return this.getMunicipioPorEstado(idEstado).pipe(
      shareReplay(2),
      map(municipios => {
        return municipios.find(item => item.nome.toLowerCase() === nome.toLowerCase())
      })
    )
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnderecoResponse } from '../core/models/enderecoResponse';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private urlApiIbge: string = environment.urlApiViaCep

  constructor(
    private httpClient: HttpClient
  ) { }

  public enderecoPorCep(cep: string): Observable<EnderecoResponse> {
    return this.httpClient.get<EnderecoResponse>(`${this.urlApiIbge}${cep}/json`);
  }
}

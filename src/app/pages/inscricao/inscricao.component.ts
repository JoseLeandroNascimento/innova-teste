import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Observable, of } from 'rxjs';
import { EstadoResponse } from '../../core/models/estadoResponse';
import { MunicipioResponse } from '../../core/models/municipioResponse';
import { CepService } from '../../services/cep.service';
import { LocalidadeService } from '../../services/localidade.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { FormMessageErroCustom } from './messageErrorCustom';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [
    ButtonComponent,
    NgxMaskDirective,
    AsyncPipe,
    ReactiveFormsModule,
    ErrorMessageComponent
  ],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.scss'
})
export class InscricaoComponent implements OnInit {

  protected localidadeService = inject(LocalidadeService);
  protected cepService = inject(CepService);
  protected formBuilder = inject(FormBuilder);

  protected FormMessageErroCustom = FormMessageErroCustom;

  protected estadosOptions$: Observable<EstadoResponse[]> = of([]);
  protected municipioOptions$: Observable<MunicipioResponse[]> = of([]);

  protected form = this.formBuilder.group({
    nome: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    sobrenome: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email, Validators.pattern(/^(?!\s*$).+/)]),
    telefone: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    cep: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    endereco: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    bairro: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    complemento: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?!\s*$).+/)]),
    idCidade: new FormControl<string | null>(null, [Validators.required]),
    idEstado: new FormControl<string | null>(null, [Validators.required])
  })

  ngOnInit(): void {

    this.estadosOptions$ = this.localidadeService.getEstados();

    this.form.controls.idCidade.disable();

    this.form.controls.idEstado.valueChanges.subscribe(idEstado => {
      if (idEstado) {
        this.municipioOptions$ = this.localidadeService.getMunicipioPorEstado(+idEstado)
        this.form.controls.idCidade.enable();
      } else {
        this.form.controls.idCidade.disable();
      }
    })

    this.form.controls.cep.valueChanges.subscribe(cep => {
      if (cep && this.form.controls.cep.valid) {
        this.cepService.enderecoPorCep(cep).subscribe(responseEndereco => {

          this.localidadeService.getEstadoPorSigla(responseEndereco.uf).subscribe({
            next: (responseEstado => {
              this.localidadeService.getMunicipioPorNome(responseEstado!.id, responseEndereco.localidade).subscribe({
                next: (responseMunicipio) => {
                  this.form.patchValue({
                    bairro: responseEndereco.bairro,
                    complemento: responseEndereco.complemento,
                    endereco: responseEndereco.logradouro,
                    idEstado: responseEstado!.id.toString(),
                    idCidade: responseMunicipio!.id.toString()
                  })
                }
              })
            })
          })
        })
      }
    })
  }

  save() {

    if (this.form.valid) {

      console.log("Dados enviados com sucesso");

    } else {

      this.form.markAllAsTouched()
    }
  }
}

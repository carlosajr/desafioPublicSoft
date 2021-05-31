import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

import { PrestadoresService } from './../prestadores.service';

@Component({
  selector: 'app-prestadores-update',
  templateUrl: './prestadores-update.component.html',
  styleUrls: ['./prestadores-update.component.css']
})
export class PrestadoresUpdateComponent implements OnInit {
  validateForm!: FormGroup;
  prestador_id = '';

  nome = '';
  email = '';
  cep = '';
  endereco = '';
  numero = '';
  complemento = '';
  bairro = '';
  cidade = '';
  estado = '';

  estados = [];
  cidades = [];

  buttonDisabled = false;

  constructor(
    private fb: FormBuilder,
    private prestadoresService: PrestadoresService,
    private alert: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null],
      bairro: [null, [Validators.required]],
      seleEstados: [null, [Validators.required]],
      seleCidades: [null, [Validators.required]],
    });

    this.prestador_id = this.route.snapshot.params.prestador_id

    this.getEstados();

    this.prestadoresService.getPrestador(this.prestador_id)
      .subscribe(response => {
        this.estado = response.estado
        this.prestadoresService.getCidades(response.estado)
          .subscribe(responseCidades => {
            this.cidades = responseCidades
            this.nome = response.nome,
              this.email = response.email,
              this.cep = response.cep,
              this.endereco = response.endereco,
              this.numero = response.numero,
              this.complemento = response.complemento,
              this.bairro = response.bairro,
              this.cidade = response.cidade
          })
      },
        error => {
          this.buttonDisabled = false;
          this.alert.error(error.error.message);
        }
      );
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.buttonDisabled = true;

      this.prestadoresService.atualizar(
        this.prestador_id,
        this.nome,
        this.email,
        this.cep,
        this.endereco,
        this.numero,
        this.complemento,
        this.bairro,
        this.cidade,
        this.estado
      ).subscribe(response => {
        this.alert.success('Prestador Atualizado!', { nzDuration: 5000 });
        this.router.navigate(['/pages/prestadores/'])
      }, error => {
        this.buttonDisabled = false;
        this.alert.error(error.error.message);
      });
    }
  }

  onBlurCep(event: any) {
    const cep = event.target.value;
    this.prestadoresService.getCep(cep)
      .subscribe(response => {
        this.estado = response.uf;
        this.prestadoresService.getCidades(this.estado)
          .subscribe(responseCidades => {
            this.cidades = responseCidades;
            this.endereco = response.logradouro;
            this.bairro = response.bairro;
            this.cidade = response.localidade;
          })
      })
  }

  getCidades() {
    this.prestadoresService.getCidades(this.estado)
      .subscribe(responseCidades => {
        this.cidades = responseCidades;
      })
  }

  getEstados(): void {
    this.prestadoresService.getEstados()
      .subscribe(response => {
        this.estados = response;
      })
  }

}

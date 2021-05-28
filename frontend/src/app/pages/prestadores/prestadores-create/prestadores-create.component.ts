import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestadores-create',
  templateUrl: './prestadores-create.component.html',
  styleUrls: ['./prestadores-create.component.css']
})
export class PrestadoresCreateComponent implements OnInit {
  validateForm!: FormGroup;


  tipo_pessoa = 'PF';
  cpf_cnpj = '';
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
    private consumerService: ConsumerService,
    private alert: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      seleTipoPessoa: [null, [Validators.required]],
      cpf_cnpj: [null, [Validators.required]],
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

    this.getEstados();

  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.buttonDisabled = true;

      this.consumerService.post('/prestadores', {
        tipo_pessoa: this.tipo_pessoa,
        cpf_cnpj: this.cpf_cnpj,
        nome: this.nome,
        email: this.email,
        cep: this.cep,
        endereco: this.endereco,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado
      }).subscribe(response => {
        this.alert.success('Prestador cadastrado!', { nzDuration: 5000 });
        this.router.navigate(['/pages/prestadores/'])
      },
        error => {
          this.buttonDisabled = false;
          this.alert.error(error.error.message);
        }
      );
      ;
    }
  }

  onBlurCep(event: any) {
    const cep = event.target.value;
    this.consumerService.get('/cep/' + cep)
      .subscribe(response => {
        this.estado = response.uf;
        this.getCidades()
        this.endereco = response.logradouro;
        this.bairro = response.bairro;
        this.cidade = response.localidade;

      })
  }

  getEstados(): void {
    this.consumerService.get('/estados')
      .subscribe(response => {
        this.estados = response;
      })
  }

  onChange(result: string): void {
    this.estado = result;
    this.getCidades();
  }

  getCidades() {
    this.cidade = '';
    this.consumerService.get('/estados/' + this.estado + '/cidades')
      .subscribe(responseCidades => {
        this.cidades = responseCidades;
      })
  }



}

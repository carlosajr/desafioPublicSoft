import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SimpleChanges } from '@angular/core';

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
  cidade_id = '';
  estado_id = '';

  estados = [];
  cidades = [];

  buttonDisabled = false;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder,
    private consumerService: ConsumerService
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
      complemento: [null, [Validators.required]],
      seleEstados: [null, [Validators.required]],
      seleCidades: [null, [Validators.required]],
    });

    this.getEstados();

  }

  onBlurCep(event: any) {
    console.log(event.target.value);
  }

  onChangeEstado(event: any) {
    console.log('mudou');
    const estado = event.target.value;
    this.consumerService.get('/estados/' + estado + '/cidades')
      .subscribe(response => {
        this.cidades = response;
      })
  }

  getCidades() {
    console.log('cidades');
  }

  getEstados(): void {
    this.consumerService.get('/estados')
      .subscribe(response => {
        this.estados = response;
      })
  }



}

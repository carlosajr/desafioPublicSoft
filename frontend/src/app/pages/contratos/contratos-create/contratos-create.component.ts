import { ContratosService } from './../contratos.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Prestador } from '../../prestadores/prestador';

@Component({
  selector: 'app-contratos-create',
  templateUrl: './contratos-create.component.html',
  styleUrls: ['./contratos-create.component.css']
})
export class ContratosCreateComponent implements OnInit {
  validateForm!: FormGroup;

  prestadores: Prestador[] = [];

  prestador_id = ''
  servico_prestado = ''
  data_inicio = ''
  data_fim = ''

  buttonDisabled = false;

  constructor(
    private fb: FormBuilder,
    private contratosService: ContratosService,
    private alert: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPrestadores()

    this.validateForm = this.fb.group({
      prestadorId: [null, [Validators.required]],
      servicoPrestado: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFim: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.buttonDisabled = true;

      this.contratosService.cadastrar(
        this.prestador_id,
        this.servico_prestado,
        this.data_inicio,
        this.data_fim
      ).subscribe(response => {
        this.alert.success('Contrato cadastrado!', { nzDuration: 5000 });
        this.router.navigate(['/pages/contratos/'])
      }, error => {
        this.buttonDisabled = false;
        this.alert.error(error.error.message);
      });
    }
  }

  getPrestadores(): void {
    this.contratosService.getPrestadores()
      .subscribe(response => {
        this.prestadores = response;
      })
  }

}

import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Prestador } from '../../prestadores/prestador';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contratos-update',
  templateUrl: './contratos-update.component.html',
  styleUrls: ['./contratos-update.component.css']
})
export class ContratosUpdateComponent implements OnInit {
  validateForm!: FormGroup;

  prestadores: Prestador[] = [];

  contrato_id = ''

  prestador_id = ''
  servico_prestado = ''
  data_inicio = ''
  data_fim = ''

  buttonDisabled = false;

  constructor(
    private fb: FormBuilder,
    private consumerService: ConsumerService,
    private alert: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.contrato_id = this.route.snapshot.params.contrato_id

    this.getPrestadores()

    this.validateForm = this.fb.group({
      prestadorId: [null, [Validators.required]],
      servicoPrestado: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFim: [null, [Validators.required]],
    });

    this.consumerService.get('/contratos/' + this.contrato_id)
      .subscribe(response => {
        this.prestador_id = response.prestador_id,
          this.servico_prestado = response.servico_prestado,
          this.data_inicio = response.data_inicio,
          this.data_fim = response.data_fim
      },
        error => {
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

      this.consumerService.put('/contratos/' + this.contrato_id, {
        prestador_id: this.prestador_id,
        servico_prestado: this.servico_prestado,
        data_inicio: this.data_inicio,
        data_fim: this.data_fim
      }).subscribe(response => {
        this.alert.success('Contrato cadastrado!', { nzDuration: 5000 });
        this.router.navigate(['/pages/contratos/'])
      },
        error => {
          this.buttonDisabled = false;
          this.alert.error(error.error.message);
        }
      );
      ;
    }
  }

  getPrestadores(): void {
    this.consumerService.get('/prestadores')
      .subscribe(response => {
        this.prestadores = response;
      })
  }

}

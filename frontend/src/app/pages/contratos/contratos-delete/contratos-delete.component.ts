import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Prestador } from '../../prestadores/prestador';

@Component({
  selector: 'app-contratos-delete',
  templateUrl: './contratos-delete.component.html',
  styleUrls: ['./contratos-delete.component.css']
})
export class ContratosDeleteComponent implements OnInit {
  prestadores: Prestador[] = [];

  contrato_id = ''

  prestador_id = ''
  servico_prestado = ''
  data_inicio = ''
  data_fim = ''

  constructor(
    private consumerService: ConsumerService,
    private alert: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.getPrestadores()

    this.contrato_id = this.route.snapshot.params.contrato_id

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
    this.modal.confirm({
      nzTitle: 'Tem certeza que deseja Remover este Contrato?',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOnOk: () => {
        this.consumerService.delete('/contratos/' + this.contrato_id)
          .subscribe(response => {
            this.alert.success('Contrato Removido!', { nzDuration: 5000 });
            this.router.navigate(['/pages/contratos/'])
          },
            error => {
              this.alert.error(error.error.message);
            }
          );
      },
      nzCancelText: 'Não',
      nzOnCancel: () => { }
    });
  }

  getPrestadores(): void {
    this.consumerService.get('/prestadores')
      .subscribe(response => {
        this.prestadores = response;
      })
  }

}

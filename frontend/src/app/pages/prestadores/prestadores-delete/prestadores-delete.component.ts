import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-prestadores-delete',
  templateUrl: './prestadores-delete.component.html',
  styleUrls: ['./prestadores-delete.component.css']
})
export class PrestadoresDeleteComponent implements OnInit {
  prestador_id = '';

  tipo_pessoa = '';
  cpf_cnpj = '';
  nome = '';
  email = '';

  buttonDisabled = false;

  constructor(
    private consumerService: ConsumerService,
    private alert: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.prestador_id = this.route.snapshot.params.prestador_id

    this.consumerService.get('/prestadores/' + this.prestador_id)
      .subscribe(response => {
        this.tipo_pessoa = response.tipo_pessoa,
          this.cpf_cnpj = response.cpf_cnpj,
          this.nome = response.nome,
          this.email = response.email
      },
        error => {
          this.buttonDisabled = false;
          this.alert.error(error.error.message);
        }
      );
  }

  submitForm(): void {

    this.modal.confirm({
      nzTitle: 'Tem certeza que deseja Remover este prestador?',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOnOk: () => {
        this.consumerService.delete('/prestadores/' + this.prestador_id)
          .subscribe(response => {
            this.alert.success('Prestador Removido!', { nzDuration: 5000 });
            this.router.navigate(['/pages/prestadores/'])
          },
            error => {
              this.buttonDisabled = false;
              this.alert.error(error.error.message);
            }
          );
      },
      nzCancelText: 'Não',
      nzOnCancel: () => { }
    });


  }
}

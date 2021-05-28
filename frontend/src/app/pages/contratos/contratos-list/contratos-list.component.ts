import { Contrato } from './../contrato';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { DatePipe } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-contratos-list',
  templateUrl: './contratos-list.component.html',
  styleUrls: ['./contratos-list.component.css']
})
export class ContratosListComponent implements OnInit {
  listOfData: Contrato[] = [];

  listOfColumns: ColumnItem[] = [
    {
      name: 'Prestador do Serviço',
      sortOrder: 'descend',
      sortFn: (a: Contrato, b: Contrato) => a.prestador.nome.localeCompare(b.prestador.nome),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'Tipo Pessoa',
      sortOrder: null,
      sortFn: (a: Contrato, b: Contrato) => a.prestador.tipo_pessoa.localeCompare(b.prestador.tipo_pessoa),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Pessoa Fisica', value: 'PF' },
        { text: 'Pessoa Juridica', value: 'PJ' }
      ],
      filterFn: (list: string[], item: Contrato) => list.some(tipo_pessoa => item.prestador.tipo_pessoa.indexOf(tipo_pessoa) !== -1)
    },
    {
      name: 'Serviço Prestado',
      sortOrder: null,
      sortFn: (a: Contrato, b: Contrato) => a.servico_prestado.localeCompare(b.servico_prestado),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: null,
      filterFn: (list: string[], item: Contrato) => list.some(servico_prestado => item.servico_prestado.indexOf(servico_prestado) !== -1)
    },
    {
      name: 'Data Inicio',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: null,
      filterMultiple: false,
      filterFn: null,
      listOfFilter: [],
    },
    {
      name: 'Data Fim',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: null,
      filterMultiple: false,
      filterFn: null,
      listOfFilter: [],
    }
  ];

  constructor(
    private consumerService: ConsumerService,
    private router: Router,
    private modal: NzModalService
  ) { }

  onClick(event) {
    const id = event.target.attributes.id.value;
    this.consumerService
      .get(`/contratos/${id}/prazo/restante/`)
      .subscribe(response => {
        const diasRestantes = response.dias_restantes == 0
          ? 'Hoje'
          : `Em ${response.dias_restantes} dias.`
        this.modal.info({
          nzTitle: 'Este Contrato vence ',
          nzContent: '<h1>' + diasRestantes + ' </h1>',
          nzOnOk: () => console.log('Info OK')
        });
      })
  }

  ngOnInit(): void {
    this.consumerService.get('/contratos/')
      .subscribe(response => {
        this.listOfData = response;
        console.log(this.listOfData)
      })
  }

}

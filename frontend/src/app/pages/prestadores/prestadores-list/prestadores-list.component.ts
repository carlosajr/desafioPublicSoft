import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ConsumerService } from './../../../shared/consumer/consumer.service';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


interface Prestador {
  id: string;
  tipo_pessoa: string;
  cpf_cnpj: string;
  nome: string;
  estado: string;
  cidade: string;
}

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
  selector: 'app-prestadores-list',
  templateUrl: './prestadores-list.component.html',
  styleUrls: ['./prestadores-list.component.css']
})
export class PrestadoresListComponent implements OnInit {
  listOfData: Prestador[] = [];

  listOfColumns: ColumnItem[] = [
    {
      name: 'tipo_pessoa',
      sortOrder: null,
      sortFn: (a: Prestador, b: Prestador) => a.tipo_pessoa.localeCompare(b.tipo_pessoa),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Pessoa Fisica', value: 'PF' },
        { text: 'Pessoa Juridica', value: 'PJ' }
      ],
      filterFn: (list: string[], item: Prestador) => list.some(tipo_pessoa => item.tipo_pessoa.indexOf(tipo_pessoa) !== -1)
    },
    {
      name: 'cpf_cnpj',
      sortOrder: 'descend',
      sortFn: (a: Prestador, b: Prestador) => a.cpf_cnpj.localeCompare(b.cpf_cnpj),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'nome',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Prestador, b: Prestador) => a.nome.length - b.nome.length,
      filterMultiple: false,
      filterFn: null,
      listOfFilter: [],
    },
    {
      name: 'estado',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Prestador, b: Prestador) => a.estado.length - b.estado.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'Paraiba', value: 'PB' },
        { text: 'São Paulo', value: 'SP' }
      ],
      filterFn: (address: string, item: Prestador) => item.estado.indexOf(address) !== -1
    },
    {
      name: 'cidade',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Prestador, b: Prestador) => a.cidade.length - b.cidade.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'João Pessoa', value: 'João Pessoa' },
        { text: 'São Paulo', value: 'São Paulo' }
      ],
      filterFn: (cidade: string, item: Prestador) => item.cidade.indexOf(cidade) !== -1
    }
  ];

  constructor(
    private consumerService: ConsumerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.consumerService.get('/prestadores/')
      .subscribe(response => {
        this.listOfData = response;
        console.log(this.listOfData)
      })
  }

}


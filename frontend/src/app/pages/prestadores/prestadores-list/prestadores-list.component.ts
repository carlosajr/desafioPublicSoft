import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { PrestadoresService } from './../prestadores.service';

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
      name: 'Tipo Pessoa',
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
      name: 'CPF/CNPJ',
      sortOrder: 'descend',
      sortFn: (a: Prestador, b: Prestador) => a.cpf_cnpj.localeCompare(b.cpf_cnpj),
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false
    },
    {
      name: 'Nome',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Prestador, b: Prestador) => a.nome.length - b.nome.length,
      filterMultiple: false,
      filterFn: null,
      listOfFilter: [],
    },
    {
      name: 'Estado',
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
      name: 'Cidade',
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
    private prestadoresService: PrestadoresService
  ) { }

  ngOnInit(): void {
    this.prestadoresService.listar()
      .subscribe(response => {
        this.listOfData = response;
        console.log(this.listOfData)
      })
  }

}


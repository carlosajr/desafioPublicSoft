import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    // this.consumer.get('/cep/58064370')
    //   .subscribe(response => {
    //     console.log(response)
    //   },
    //     error => {
    //       console.log(error);
    //     }
    //   );
  }

  logout(): void {
    this.pagesService.logout();
  }

}

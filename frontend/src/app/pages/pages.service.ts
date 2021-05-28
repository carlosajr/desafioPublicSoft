import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from './../shared/autenticacao/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  logout(): void {
    console.log('sair')
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.usuarioService.estaLogado()) {
      this.router.navigate(['pages'])
      return false;
    }
    return true;
  }
}

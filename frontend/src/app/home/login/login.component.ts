import { AutenticacaoService } from './../../shared/autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TokenService } from 'src/app/shared/autenticacao/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  email = '';
  senha = '';

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router,
    private alert: NzMessageService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.authService.autenticar(this.email, this.senha)
        .subscribe(response => {
          this.router.navigate(['pages'])
        },
          error => {
            console.log(error);
            this.alert.error(error.error.message);
          }
        );
    }

  }

}

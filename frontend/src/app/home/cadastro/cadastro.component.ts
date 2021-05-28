import { CadastroUsuario } from './cadastro-usuario';
import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  validateForm!: FormGroup;
  nome = '';
  email = '';
  senha = '';
  senhaConfirmacao = '';
  buttonDisabled = false;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private alert: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      userEmail: [null, [Validators.required]],
      password: ['', [Validators.required]],
      passwordConf: ['', [Validators.required, this.confirmationValidator]],
    }
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.buttonDisabled = true;

      this.cadastroService.cadastrar({ nome: this.nome, email: this.email, senha: this.senha })
        .subscribe(response => {
          this.alert.success(`Sucesso! Seja bem-vindo ${response.usuario.nome}!`, { nzDuration: 5000 });
          this.router.navigate([''])
        },
          error => {
            this.buttonDisabled = false;
            this.alert.error(error.error.message);
          }
        );
    }

  }



}

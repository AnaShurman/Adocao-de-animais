import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.scss']
})
export class PerfilUserComponent {
usuario : string = 'Tereza';
sobrename:string='Roque'
telefone:number = 1996534532;
profissao: string ='Desenvolvedora'
endereco: string ='Rua  Pixanguinha'
}

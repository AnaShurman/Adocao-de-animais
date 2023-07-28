import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'adocao-de-animais';
  path: boolean = true;

  ngOnInit() {

if(location.pathname === '/login' || location.pathname == '/')
    this.path = false;
  }
}



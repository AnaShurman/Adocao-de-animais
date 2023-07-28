import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { AnimaisComponent } from './animais/animais.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full',},
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'caes', pathMatch: 'full', component: AnimaisComponent },
  { path: 'gatos', pathMatch: 'full', component: AnimaisComponent },
  { path: 'usuario', pathMatch: 'full', component: PerfilUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

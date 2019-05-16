import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogeoComponent } from './componentes/logeo/logeo.component';
import { ActivadoresService } from './servicios/activadores.service';
import { VerificadorService } from './servicios/verificador.service';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [  {
  path: "logeo",
  component: LogeoComponent,
  //canActivate: [ActivadoresService]
},
{
  path: "menu",
  component: MenuComponent,
  canActivate: [ActivadoresService, VerificadorService]
},
{ path: "", redirectTo: "/logeo", pathMatch: "full" },
{ path: "**", redirectTo: "/logeo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CInicioComponent } from './pages/c-inicio/c-inicio.component';

const routes: Routes = [
  {path: 'inicio', component: CInicioComponent},
  {path: '**', component: CInicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

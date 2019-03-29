import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { EditCursoComponent } from './edit-curso/edit-curso.component';

const routes: Routes = [
  { path: 'add-curso', component: AddCursoComponent},
  { path: 'edit-curso', component: EditCursoComponent},
  { path: '', component: ListaCursosComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursoService } from './services/curso.service';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { EditCursoComponent } from './edit-curso/edit-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    AddCursoComponent,
    EditCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

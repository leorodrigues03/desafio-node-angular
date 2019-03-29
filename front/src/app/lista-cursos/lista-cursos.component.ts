import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CursoModel } from '../models/curso.model';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos: CursoModel[];

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit() {
    this.getAllCursos();
  }

  getAllCursos(): void {
    this.cursoService.getAllCursos().subscribe(data=>{
      this.cursos = data;
    });
  }

  addCurso(): void {
    this.router.navigate(['add-curso']);
  }

  deleteCurso(curso: CursoModel){
    
    this.cursoService.deleteCurso(curso._id).subscribe(data=>{
      console.log(data);
      this.getAllCursos();
    });
  }

  updateCurso(curso: CursoModel){
    localStorage.removeItem("cursoId");
    localStorage.setItem("cursoId", curso._id);
    this.router.navigate(['edit-curso']);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from '../models/curso.model';

@Injectable({
    providedIn: 'root'
  })

 export class CursoService {

    constructor(private http: HttpClient) { }

    baseurl: string = "http://localhost:3000/";

    getAllCursos(){
      return this.http.get<CursoModel[]>(this.baseurl + 'Cursos');
     }
    
    getCursoById(id: string){
      return this.http.get<CursoModel>(this.baseurl + 'Cursos/' + id);
    }
    
    addCurso(curso: CursoModel){
      return this.http.post(this.baseurl + 'Cursos', curso);
    }
    
    deleteCurso(id: string){
      return this.http.delete(this.baseurl + 'Cursos' + '/' + id);
    }
    
    updateCurso(curso: CursoModel){
      return this.http.put(this.baseurl + 'Cursos' + '/' + curso._id, curso);
    }
 } 


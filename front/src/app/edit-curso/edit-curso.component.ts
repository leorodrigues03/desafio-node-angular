import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CursoService } from '../services/curso.service';
import { Router } from "@angular/router";
import { CursoModel } from '../models/curso.model';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso: CursoModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private cursoService: CursoService) { }

  ngOnInit() {
    let cursoId = localStorage.getItem("cursoId");
    if(!cursoId){
      alert("Não foi possivel excluir!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      inicio: ['', Validators.required],
      fim : [''],
    });

    this.cursoService.getCursoById(cursoId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data);
    });
  }

    get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.cursoService.updateCurso(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  voltar() {
    this.router.navigate(['']);
  }
}
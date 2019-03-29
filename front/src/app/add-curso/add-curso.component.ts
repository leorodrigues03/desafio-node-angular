import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CursoService } from '../services/curso.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private cursoService: CursoService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
      inicio: ['', Validators.required],
      fim : [''],
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.cursoService.addCurso(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  voltar() {
    this.router.navigate(['']);
  }

  get f() { return this.addForm.controls; }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public maskForm: FormGroup;

  title = 'app';

  constructor(private fb: FormBuilder){

  }
  ngOnInit(){

    this.maskForm = this.fb.group({
      cpf: ['03093584698'],
      telefone: ['']
    });

  }

  submit(){
    let cpf = this.maskForm.controls['cpf'].value;
    let telefone = this.maskForm.controls['telefone'].value;

    console.log(cpf);
    console.log(telefone);


  }





}

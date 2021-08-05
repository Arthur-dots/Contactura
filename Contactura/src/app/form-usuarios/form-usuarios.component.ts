import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

  formUsuarios = new FormGroup({
    id:    new FormControl(''),
    name:  new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    if (this.formUsuarios.valid){
      Swal.fire({
        icon:  'success',
        title: 'Ebaaaa...',
        text:  'Usuario criado com sucesso'
      });
      this.router.navigate(['/lista-usuarios']);
    }else{
      Swal.fire({
        icon:  'error',
        title: 'Iiiiiiixi....',
        text:  'Usuario não criado, preencha todos os campos corretamente'
      });
  }

}

}

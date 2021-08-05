import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: User[];
  collection = {count: 10, data: []};


  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.populateUser();
  }

// método para preencher os contatos com dados mocados

populateUser(){
  for (let i = 0; i < this.collection.count; i++) {
    this.collection.data.push({
      name: 'teste' + i,
      username: 'hassan' + i,
      password: 'mundoca11' + i,
    });
  }
  this.usersList = this.collection.data;
  console.log(this.usersList);
}

editUsuarios(users: User){
  console.log('edit esta funcioando', users);
  this.userService.getUserList( users );
  this.router.navigate(['/cadastro-usuarios']);
}

deleteUsuarios(users: User){
  Swal.fire({
    title: 'Você tem certeza?',
    text: 'Dseseja mesmo deletar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  }).then( (result) => {
    if (result.isConfirmed){
      Swal.fire(
        'Deletado com sucesso!'
      );
    }
  });
}

}


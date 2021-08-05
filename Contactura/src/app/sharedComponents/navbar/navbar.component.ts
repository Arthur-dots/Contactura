import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  putEventsMenu(){
    const menuDesktop = document.getElementById('menu-desktop');
    const menuMobile = document.getElementById('menu-mobile');
    // tslint:disable-next-line:only-arrow-functions
    menuMobile.addEventListener('click', function(){
      menuDesktop.classList.toggle('activate');
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}

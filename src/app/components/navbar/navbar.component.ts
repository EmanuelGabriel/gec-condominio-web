import { Component, OnInit, ElementRef } from '@angular/core';
import { Location} from '@angular/common';
import { Router } from '@angular/router';

import { ROUTES } from '../sidebar/sidebar.component';
import { AuthService } from './../../pages/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;
  public username;
  expandirMenu: boolean;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    this.expandirMenu = false;
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.username = sessionStorage.getItem("username");
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    titlee = '/' + titlee.split('/').pop();
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return '';
  }

  /**
   * Método responsável em realizar o logout da aplicaçaõ
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ocultarExibirMenu() {
    if(!this.expandirMenu){
      document.getElementById("main-content").style.marginLeft = "3.2rem";
      document.getElementById("logo-esquerda").style.display = "block";
      document.getElementById("logo-esquerda").style.animation = "fadeIn 2s";
      document.getElementById("logo-central").style.display = "none";
      this.expandirMenu = true;
      let itensSubmenu = Array.from(document.getElementsByClassName("submenu") as HTMLCollectionOf<HTMLElement>);
      itensSubmenu.forEach((element) => {
        element.classList.remove("ml-2");
    });

    }else{
      document.getElementById("main-content").style.marginLeft = "15.5rem";
      document.getElementById("logo-esquerda").style.display = "none";
      document.getElementById("logo-central").style.display = "block";
      document.getElementById("logo-central").style.animation = "fadeIn 1s";
      this.expandirMenu = false;
      let itensSubmenu = Array.from(document.getElementsByClassName("submenu") as HTMLCollectionOf<HTMLElement>);
      itensSubmenu.forEach((element) => {
        element.classList.add("ml-2");
    });
    }
    document.getElementById("main-content").style.transition = "0.4s";
  }
}

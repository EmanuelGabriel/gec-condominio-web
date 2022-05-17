import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../pages/login/auth.service';

declare interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;
  children: RouteInfo[];
  childMenu: boolean;
  collapsedMenu?: boolean;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'fa fa-columns text-primary', class: '' , children: [], childMenu: false},
  { path: '/novo-veiculo', title: 'Novo Veículo', icon: 'fas fa-user-cog text-primary', class: '' , children: [], childMenu: false},
  { path: '/veiculos', title: 'Consultas', icon: 'fa fa-list text-primary', class: '', children: [], childMenu: false },
];

const ngbModalOptions: NgbModalOptions = {
  backdrop: 'static',
  keyboard: false
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public username;
  public subMenu = [{ nome: 'Veículos', icon: 'fas fa-user-cog ml-2 text-primary'},
];

  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

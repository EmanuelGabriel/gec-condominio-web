import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


import { AuthService } from "./../login/auth.service";
import { ErroAlertComponent } from '../../components/alerts/erro';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild("erroValidacaoDoLogin", { read: ErroAlertComponent })
  erroAlert: ErroAlertComponent = new ErroAlertComponent();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy() { }

  /**
   * Método responsável pelo login
   */
  logar() {

  }

  /**
   * Método responsável em buscar às informações do usuário logado
   * @returns
   */
  getUserInfo() {

  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  /**
   *
   * @param roles
   * @returns any[]
   */
  identificarUsuarioGrupos(roles: string[]) {
  }

}

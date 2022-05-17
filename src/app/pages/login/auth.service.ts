import { HttpClient,  HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loginUrl = "https://dominio.com.br/api/auth/realms/test/protocol/openid-connect/token";
  accessToken: string;
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return null;
  }

  logout() {
    sessionStorage.clear();
  }
}

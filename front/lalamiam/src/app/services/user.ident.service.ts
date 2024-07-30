import { Injectable } from "@angular/core";
import { UserIdent } from "../models/user-ident.interface";

@Injectable({
  providedIn: "root"
})
export class UserIdentService {

  private user: UserIdent | null = null;

  saveData(loginUser: UserIdent): void {
    this.user = loginUser;
  }

  clearData(): void {
    this.user = null;
  }

  isAuthorize(auth: string): boolean {
    if(this.user == null || this.user?.roles.length == 0) return false;

    return this.user.roles.includes(auth);
  }

  isAuthentified(): boolean {
    return this.user != null;
  }

}

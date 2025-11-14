import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiURL = environment.apiUrl;
  private endPoint='User';
  
   constructor(private http:HttpClient){
  }

  getAllUsers(page:number,itemsPerPage:number): Observable<any> {
      return this.http.get<User[]>(this.apiURL+this.endPoint+'/GetAllUsers'+'?pageNumber=' + page +'&pageSize='+itemsPerPage);
    }
}

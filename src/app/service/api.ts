import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
 http = inject(HttpClient)
 serverUrl = "http://localhost:3000"

 registerUser(reqBody:any){
  return this.http.post(`${this.serverUrl}/regsiter`,reqBody)
 }

 loginUserApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/login`,reqBody)

 }

}

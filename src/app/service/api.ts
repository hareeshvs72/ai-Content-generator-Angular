import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  http = inject(HttpClient)
  serverUrl = "http://localhost:3000"



  appendToken() {
    const token = JSON.parse(sessionStorage.getItem("token")|| "")
    console.log(token);

    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`)

    }
    return { headers }
  }



  registerUser(reqBody: any) {
    return this.http.post(`${this.serverUrl}/regsiter`, reqBody)
  }

  loginUserApi(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody)

  }
  // token sent

  generateArticleAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/ai/articleGenerator`, reqBody, this.appendToken())
  }

   blogTitleApi(reqBody: any) {
    return this.http.post(`${this.serverUrl}/ai/blogtitlegenerator`, reqBody, this.appendToken())
  }


}

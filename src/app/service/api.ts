import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private http = inject(HttpClient);
  private serverUrl = 'http://localhost:3000';



  /* ================= TOKEN ================= */
  appendToken() {
    const token = JSON.parse(sessionStorage.getItem('token')|| "");
    
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return { headers };
  }

  /* ================= AUTH ================= */
  registerUser(reqBody: any) {
    return this.http.post(`${this.serverUrl}/register`, reqBody);
  }

  loginUserApi(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody);
  }

  /* ================= AI APIs ================= */
  generateArticleAPI(reqBody: any) {
    return this.http.post(
      `${this.serverUrl}/ai/articleGenerator`,
      reqBody,
      this.appendToken()
    );
  }

  blogTitleApi(reqBody: any) {
    return this.http.post(
      `${this.serverUrl}/ai/blogtitlegenerator`,
      reqBody,
      this.appendToken()
    );
  }

  imageGeneratorAPI(reqBody: any) {
    return this.http.post(
      `${this.serverUrl}/ai/textoimage`,
      reqBody,
      this.appendToken()
    );
  }

  removeBackgroundApi(reqBody: any) {
    return this.http.post(
      `${this.serverUrl}/ai/remove-background`,
      reqBody,
      this.appendToken()
    );
  }


}

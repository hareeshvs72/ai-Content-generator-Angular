import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private http = inject(HttpClient);
  private serverUrl = 'http://localhost:5000';
  platformid = inject(PLATFORM_ID)


  /* ================= TOKEN ================= */
appendToken() {
  let headers = new HttpHeaders();

  if (isPlatformBrowser(this.platformid)) {
    const token = JSON.parse(sessionStorage.getItem('token')|| ""); // ✅ no JSON.parse

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
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
      `${this.serverUrl}/ai/image-generate`,
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

    getAllAiData(page:number,limit:number) {
    return this.http.get(
      `${this.serverUrl}/ai/data?page=${page}&limit=${limit}`,
      this.appendToken()
    );
  }
  /* ================= STRIPE ================= */

createCheckoutSession(plan: string, userId: string) {
  return this.http.post(
    `${this.serverUrl}/api/subscription/create`,
    { plan, userId },
    this.appendToken()
  );
}

}

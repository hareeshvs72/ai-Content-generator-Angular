import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {
  router = inject(Router)
  isSidebarOpen = false;
  platformid = inject(PLATFORM_ID)
  user:any;
  ngOnInit() {
  if(isPlatformBrowser(this.platformid)){
   const storedUser = sessionStorage.getItem("users");
console.log(storedUser);

    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

  }
 
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

}

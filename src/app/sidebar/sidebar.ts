import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

  user: any;

  ngOnInit() {

    const storedUser = sessionStorage.getItem("users");
console.log(storedUser);

    if (storedUser) {
      this.user = storedUser;
    }

  }

  handileLogout(){
    sessionStorage.clear()
  }

}
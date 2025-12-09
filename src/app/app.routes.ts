import { Article } from "./article/article";
import { Auth } from "./auth/auth";
import { Dashboard } from "./dashboard/dashboard";
import { Landing } from "./landing/landing";
import { Layout } from "./layout/layout";
import { RemoveObject } from "./remove-object/remove-object";
import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: "", component: Landing, title: "AI Content Generator" },

  { path: "auth", component: Auth, title: "Login" },

  {
    path: "ai",
    component: Layout,
    children: [
      { path: "dashboard", component: Dashboard, title: "Dashboard" },
      { path: "removeObject", component: RemoveObject, title: "Remove Object" },
      { path: "article", component: Article, title: "Write Article" }
    ]
  },

//   { path: "**", redirectTo: "" }
];

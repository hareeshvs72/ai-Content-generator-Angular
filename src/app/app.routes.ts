import { Article } from "./article/article";
import { Auth } from "./auth/auth";
import { BlogTitle } from "./blog-title/blog-title";
import { Dashboard } from "./dashboard/dashboard";
import { GenerateImage } from "./generate-image/generate-image";
import { Landing } from "./landing/landing";
import { Layout } from "./layout/layout";
import { RemoveBackground } from "./remove-background/remove-background";
import { RemoveObject } from "./remove-object/remove-object";
import { Routes } from '@angular/router';
import { ReviewResume } from "./review-resume/review-resume";

export const routes: Routes = [

  { path: "", component: Landing, title: "AI Content Generator" },

  { path: "auth", component: Auth, title: "Login" },

  {
    path: "ai",
    component: Layout,
    children: [
      { path: "dashboard", component: Dashboard, title: "Dashboard" },
      { path: "removeObject", component: RemoveObject, title: "Remove Object" },
      { path: "article", component: Article, title: "Write Article" },
         { path: "blog-title", component: BlogTitle, title: "Blog Title" },
          { path: "image-generate", component: GenerateImage, title: "Image Generator" },
           { path: "remove-background", component: RemoveBackground, title: "Background Remover" },
              { path: "remove-object", component: RemoveObject, title: "Object Remover" },
                 { path: "remove-background", component: RemoveBackground, title: "Background Remover" },
                  { path: "resume-review", component: ReviewResume, title: "Review Resume" }
                 

    ]
  },

//   { path: "**", redirectTo: "" }
];

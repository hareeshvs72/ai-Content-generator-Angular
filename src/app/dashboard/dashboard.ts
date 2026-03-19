import { Component, inject } from '@angular/core';
import { Api } from '../service/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  api = inject(Api);
  router = inject(Router);

  aiUserData: any[] = [];

  // ✅ counts
  articlecount: number = 0;
  blogTitlecount: number = 0;
  imagegeneratedCount: number = 0;
  bgremoveCount: number = 0;

  // 🔥 pagination
  currentPage: number = 1;
  totalPages: number = 1;
  limit: number = 5;

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.api.getAllAiData(this.currentPage, this.limit).subscribe({
      next: (res: any) => {
        console.log(res);

        // ✅ paginated data
        this.aiUserData = res.data;

        // ✅ pagination info
        this.totalPages = res.pages;

        // ✅ counts from backend (IMPORTANT 🔥)
        this.articlecount = res.counts.articlecount;
        this.blogTitlecount = res.counts.blogTitlecount;
        this.imagegeneratedCount = res.counts.imagegeneratedCount;
        this.bgremoveCount = res.counts.bgremoveCount;
        console.log(this.articlecount);
        console.log(this.imagegeneratedCount);
        
        
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  // 🔥 change page
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.getAllData();
  }

  // navigation
  naviagetToArticle() {
    this.router.navigateByUrl('/ai/article');
  }

  naviagetToBlogTitle() {
    this.router.navigateByUrl('/ai/blog-title');
  }

  naviagetToImageGenerator() {
    this.router.navigateByUrl('/ai/image-generate');
  }

  naviagetToRemoveBg() {
    this.router.navigateByUrl('/ai/remove-background');
  }
}
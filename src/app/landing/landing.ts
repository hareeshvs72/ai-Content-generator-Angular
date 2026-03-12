import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../service/api';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
aiToolCard: any[] = [
  {
    title: "AI Article Writer",
    description: "Generate high-quality, SEO-friendly articles instantly with AI.",
    icon: "fa-solid fa-pen-to-square",
    bgColor: "#4A90E2"
  },
  {
    title: "Blog Title Generator",
    description: "Create catchy blog titles in seconds.",
    icon: "fa-solid fa-hashtag",
    bgColor: "#7B61FF"
  },
  {
    title: "AI Image Generation",
    description: "Turn ideas into stunning AI-generated images instantly.",
    icon: "fa-regular fa-image",
    bgColor: "#FF8A00"
  },
  {
    title: "Background Removal",
    description: "Remove image backgrounds cleanly with one click.",
    icon: "fa-solid fa-eraser",
    bgColor: "#00C49A"
  },
  {
    title: "Object Removal",
    description: "Erase unwanted objects from images effortlessly.",
    icon: "fa-solid fa-scissors",
    bgColor: "#FF3B30"
  },
  {
    title: "Resume Review",
    description: "Analyze and improve your resume with AI-powered feedback.",
    icon: "fa-regular fa-file-lines",
    bgColor: "#3E3E3E"
  }
];
  router = inject(Router);
  api = inject(Api);
  platformId = inject(PLATFORM_ID);

  stripePromise: Promise<Stripe | null>;

  token: boolean = false;
  userId: string | null = null;

  constructor() {
    // ✅ Proper typing
      console.log("Landing constructor running");
    this.stripePromise = loadStripe('pk_test_YOUR_REAL_PUBLISHABLE_KEY');
  }

  ngOnInit() {
    this.getToken();
  }

getToken() {

  if (typeof window !== 'undefined') {

    const token = sessionStorage.getItem("token");
    const userString = sessionStorage.getItem("users");

    console.log("Token:", token);
    console.log("User:", userString);

    this.token = !!token;

    if (userString) {
      const user = JSON.parse(userString);
      this.userId = user._id;
    }
  }
}

upgrade(plan: string) {

  if (!this.token || !this.userId) {
    this.router.navigateByUrl('/auth');
    return;
  }

  this.api.createCheckoutSession(plan, this.userId)
    .subscribe({
      next: (res: any) => {

        if (!res?.url) {
          console.error("No checkout URL received");
          return;
        }

        // 🔥 Redirect to Stripe Checkout
        window.location.href = res.url;
          
      },
      error: (err) => {
        console.error("API Error:", err);
      }
    });
}

  navigateDashbord() {
    this.router.navigateByUrl(this.token ? '/ai/dashboard' : '/auth');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/auth');
  }
}
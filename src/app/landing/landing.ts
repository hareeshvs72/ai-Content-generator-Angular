import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,          // ✅ Enable standalone mode
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  router = inject(Router)
 aiToolCard:any = [
  {
    title: "AI Article Writer",
    description: "Generate high-quality, SEO-friendly articles instantly with AI.",
    icon: "fa-solid fa-pen-to-square",
    bgColor: "#4A90E2" // Blue
  },
  {
    title: "Blog Title Generator",
    description: "Create catchy and engaging blog titles in seconds.",
    icon: "fa-solid fa-hashtag",
    bgColor: "#7B61FF" // Purple
  },
  {
    title: "AI Image Generation",
    description: "Turn ideas into stunning AI-generated images instantly.",
    icon: "fa-regular fa-image",
    bgColor: "#FF8A00" // Orange
  },
  {
    title: "Background Removal",
    description: "Remove image backgrounds cleanly with one click.",
    icon: "fa-solid fa-eraser",
    bgColor: "#00C49A" // Teal/Green
  },
  {
    title: "Object Removal",
    description: "Erase unwanted objects from images effortlessly.",
    icon: "fa-solid fa-scissors",
    bgColor: "#FF3B30" // Red
  },
  {
    title: "Resume Review",
    description: "Analyze and improve your resume with AI-powered feedback.",
    icon: "fa-regular fa-file-lines",
    bgColor: "#3E3E3E" // Dark Grey
  }
];



navigateToLogin(){
  this.router.navigateByUrl('/auth')
}




}

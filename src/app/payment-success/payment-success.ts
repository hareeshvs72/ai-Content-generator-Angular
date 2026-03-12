

import { Component, ChangeDetectionStrategy, signal, computed, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success.html',
   styleUrl: './payment-success.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class paymentSuccess implements OnInit, OnDestroy {

  isVisible = signal(false);
  countdown = signal(10);
  progress = computed(() => (this.countdown() / 10) * 100);

  private timerInterval?: any;
   http = inject(HttpClient)
  ngOnInit() {

  this.http.get("http://localhost:3000/api/user/profile")
  .subscribe((user:any) => {

    sessionStorage.setItem("users", JSON.stringify(user));

    console.log("Session updated:", user);

  });
    setTimeout(() => this.isVisible.set(true), 100);
    this.startCountdown();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
  }

  startCountdown() {
    this.timerInterval = setInterval(() => {
      if (this.countdown() > 0) {
        this.countdown.update(v => v - 1);
      } else {
        this.goToHome();
      }
    }, 1000);
  }

  goToHome() {
    this.clearTimer();
    const homeUrl = window.location.origin + '/';
    window.location.assign(homeUrl);
  }
}
import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private readonly document = inject(DOCUMENT);
  private readonly ngZone = inject(NgZone);
  private observer?: IntersectionObserver;

  init(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.revealAll();
      return;
    }

    this.observer?.disconnect();

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        {
          threshold: 0.16,
          rootMargin: '0px 0px -8% 0px'
        }
      );

      this.document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        this.observer?.observe(element);
      });
    });
  }

  private revealAll(): void {
    this.document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      element.classList.add('visible');
    });
  }
}

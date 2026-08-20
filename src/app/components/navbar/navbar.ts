import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  readonly profile = PROFILE;
  private readonly document = inject(DOCUMENT);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMobile(): void {
    this.mobileOpen.update((value) => !value);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  scrollTo(href: string): void {
    this.closeMobile();
    const el = this.document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

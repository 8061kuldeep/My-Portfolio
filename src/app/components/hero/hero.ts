import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  readonly profile = PROFILE;
  private readonly document = inject(DOCUMENT);

  scrollToSection(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

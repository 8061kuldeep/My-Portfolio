import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  readonly profile = PROFILE;

  scrollTo(href: string): void {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly profile = PROFILE;
}

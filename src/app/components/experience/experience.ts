import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCE;
}

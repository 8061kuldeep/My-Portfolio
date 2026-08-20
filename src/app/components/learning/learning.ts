import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LEARNING_CONTENT } from '../../data/learning';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.html',
  styleUrl: './learning.scss'
})
export class LearningComponent {
  readonly mastered = LEARNING_CONTENT.mastered;
  readonly exploring = LEARNING_CONTENT.exploring;
}

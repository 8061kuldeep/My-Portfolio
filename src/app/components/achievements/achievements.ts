import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../data/achievements';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class AchievementsComponent {
  readonly achievements = ACHIEVEMENTS;
}

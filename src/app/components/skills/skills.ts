import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
}

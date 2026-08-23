import { AfterViewInit, Component, inject } from '@angular/core';
import { AboutComponent } from './components/about/about';
import { AchievementsComponent } from './components/achievements/achievements';
import { ContactComponent } from './components/contact/contact';
import { ExperienceComponent } from './components/experience/experience';
import { GenaiComponent } from './components/genai/genai';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from './components/footer/footer';
import { LearningComponent } from './components/learning/learning';
import { ProjectsComponent } from './components/projects/projects';
import { NavbarComponent } from './components/navbar/navbar';
import { SkillsComponent } from './components/skills/skills';
import { ScrollRevealService } from './core/scroll-reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    GenaiComponent,
    AchievementsComponent,
    LearningComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  private readonly scrollReveal = inject(ScrollRevealService);

  ngAfterViewInit(): void {
    console.log('App component initialized');
    requestAnimationFrame(() => this.scrollReveal.init());
  }
}

import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skills: Skill[] = [];
  loading = true;
  error = '';

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (data: Skill[]) => {
        this.skills = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load skills';
        this.loading = false;
      }
    });
  }
}

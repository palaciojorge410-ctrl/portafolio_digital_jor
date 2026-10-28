import { Component } from '@angular/core';

interface SkillGroup {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  groups: SkillGroup[] = [
    { name: 'Front-End', items: ['HTML', 'CSS', 'SCSS', 'TypeScript', 'Angular'] },
    { name: 'Datos', items: ['SQL', 'Bases de datos'] },
    { name: 'Herramientas', items: ['Git', 'GitHub', 'VS Code'] },
  ];
}
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Nombre de tu proyecto 1',
      description: 'Cuenta en una frase el problema que resuelve y qué hiciste tú.',
      tech: ['Angular', 'TypeScript'],
      repoUrl: 'https://github.com/',
      demoUrl: 'https://example.com/',
    },
    {
      title: 'Nombre de tu proyecto 2',
      description: 'Cuenta en una frase el problema que resuelve y qué hiciste tú.',
      tech: ['HTML', 'SCSS'],
      repoUrl: 'https://github.com/',
      demoUrl: 'https://example.com/',
    },
  ];
}
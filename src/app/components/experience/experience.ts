import { Component } from '@angular/core';

interface Entry {
  period: string;
  title: string;
  place: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  entries: Entry[] = [
    {
      period: '2025 -hasta  Actualidad',
      title: 'estudio como desarrollador de sofware',
      place: 'ITSE',
      description: 'he aprendido crear pagina web... .',
    

    },
  ];
}
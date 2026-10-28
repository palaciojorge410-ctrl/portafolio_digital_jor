import { Injectable, computed, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const TEXTS = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      hello: 'Hola, soy',
      role: 'Estudiante y desarrollador de itse',
      pitch: 'Construyo páginas web claras, rápidas y fáciles de usar.',
      viewProjects: 'Ver proyectos',
      cv: 'Descargar CV',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      hello: "Hi, I'm",
      role: 'Student and Front-End developer',
      pitch: 'I build clear, fast and easy-to-use websites.',
      viewProjects: 'View projects',
      cv: 'Download CV',
    },
  },
};

@Injectable({ providedIn: 'root' })
export class I18n {
  lang = signal<Lang>(this.initialLang());
  t = computed(() => TEXTS[this.lang()]);

  constructor() {
    this.apply(this.lang());
  }

  toggle() {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    this.apply(next);
  }

  private apply(lang: Lang) {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch {}
    return 'es';
  }
}
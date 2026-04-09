import { Projects } from '../interfaces/projects.interface';

export const PROJECTS: Projects[] = [
  {
    nameKey: 'projects.join.name',
    descriptionKey: 'projects.join.description',
    tech: [
      { tech: 'Angular', icon: 'angular' },
      { tech: 'Typescript', icon: 'typescript' },
      { tech: 'HTML', icon: 'html5' },
      { tech: 'CSS', icon: 'sass' },
      { tech: 'Firebase', icon: 'firebase' }
    ],
    image: 'assets/img/img/projects/join.png',
    github: "https://github.com/TobiasDreifke/join",
    liveTest: "https://join.tobiasdreifke.com/",
  },
  {
    nameKey: 'projects.knighthood.name',
    descriptionKey: 'projects.knighthood.description',
    tech: [
      { tech: 'HTML', icon: 'html5' },
      { tech: 'CSS', icon: 'sass' },
      { tech: 'JavaScript', icon: 'javascript' }
    ],
    image: 'assets/img/img/projects/knighthood.png',
    github: "https://github.com/TobiasDreifke/12_knighthood",
    liveTest: "https://knighthood.tobiasdreifke.com/",
  },
  {
    nameKey: 'projects.pokedex.name',
    descriptionKey: 'projects.pokedex.description',
    tech: [
      { tech: 'Javascript', icon: 'javascript' },
      { tech: 'HTML', icon: 'html5' },
      { tech: 'CSS', icon: 'sass' }
    ],
    image: 'assets/img/img/projects/pokedex.png',
    github: "https://github.com/TobiasDreifke/08_Pokedex",
    liveTest: "https://pokedex.tobiasdreifke.com/",
  },
  {
    nameKey: 'projects.coderr.name',
    descriptionKey: 'projects.coderr.description',
    tech: [
      { tech: 'Python', icon: 'python' },
      { tech: 'Django', icon: 'django' }, // Falls dein Icon-Set 'django' unterstützt
      { tech: 'Javascript', icon: 'javascript' },
      { tech: 'CSS', icon: 'sass' } // Oder 'sass', falls du es genutzt hast
    ],
    image: 'assets/img/img/projects/coderr.png', // Pfad ggf. anpassen
    github: "https://github.com/TobiasDreifke/13_Coderr",
    liveTest: "https://coderr.tobiasdreifke.com/index.html",
  },
  {
    nameKey: 'projects.spectrogram.name',
    descriptionKey: 'projects.spectrogram.description',
    tech: [
      { tech: 'JavaScript', icon: 'javascript' },
      { tech: 'HTML', icon: 'html5' },
      { tech: 'CSS', icon: 'sass' },
    ],
    image: 'assets/img/img/projects/spectrogram.png', // Pfad ggf. anpassen
    github: "",
    liveTest: "https://harshkitchenvocals.tobiasdreifke.com/",
  }
];
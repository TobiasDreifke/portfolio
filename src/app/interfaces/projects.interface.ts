export interface Projects {
  nameKey: string;
  descriptionKey: string;
  tech: TechItem[];
  image: string;
  github: string;
  liveTest: string;
}

export interface TechItem {
  tech: string;
  icon: string;
}

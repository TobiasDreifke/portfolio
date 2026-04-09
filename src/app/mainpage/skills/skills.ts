
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '../../shared/icon/icon';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, IconComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})


export class Skills {

  skillSet = [
    // Frontend
    { language: "HTML", icon: "html5" },
    // { language: "CSS", icon: "css3" },
    { language: "SCSS", icon: "sass" },
    { language: "JavaScript", icon: "javascript" },
    { language: "TypeScript", icon: "typescript" },
    { language: "Angular", icon: "angular" },
    { language: "VueJS", icon: "vuedotjs" },
    { language: "Material Design", icon: "materialdesign" },
    // Backend
    { language: "Python", icon: "python" },
    { language: "Django", icon: "django" },
    // { language: "REST-API", icon: "rest-api" },
    // Database & Infra
    { language: "Firebase", icon: "firebase" },
    { language: "PostgreSQL", icon: "postgresql" },
    { language: "SQLite", icon: "sqlite" },
    { language: "Ubuntu", icon: "ubuntu" },
    // Tools & Workflow
    { language: "Git", icon: "git" },
    { language: "Scrum", icon: "scrum" },
    { language: "Growth mindset", icon: "growthmindset" },
  ]


  triggerAnimation(el: HTMLElement) {
    el.classList.add('animate');
    setTimeout(() => el.classList.remove('animate'), 600);
  }


  async getSvg(path: string): Promise<string> {
    const response = await fetch(`./assets/img/icons/${path}`);
    return await response.text();
  }








}

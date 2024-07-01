import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      "name": "Join",
      "languages": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
        "de": "Ein Aufgaben-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu."
      },
      "image": "join.png",
      "url": "https://kowalczyk-karol.de/join/index.html",
      "github": "https://github.com/karol-kowalczyk/Join"
    },
    {
      "name": "El Pollo Loco",
      "languages": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A jump, run, and throw game based on an object-oriented approach. Help Pepe find coins and Tabasco bottles to fight against the crazy hen.",
        "de": "Jump-and-Run-Spiel auf Basis eines objektorientierten Ansatzes. Helfen Sie Pepe, Münzen und Tabasco Flaschen zu finden, um gegen die verrückte Henne zu kämpfen."
      },
      "image": "elpolloloco.png",
      "url": "https://kowalczyk-karol.de/El_Pollo_Loco/",
      "github": "https://github.com/karol-kowalczyk/El_Pollo_Loco"
    },     {
      "name": "DABubble",
      "languages": "Angular | TypeScript | HTML | SCSS | Firebase",
      "translations": {
        "en": "A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.",
        "de": "Eine Slack-ähnliche App, die reibungslose Teamkommunikation und Zusammenarbeit durch Messaging, Dateifreigabe und anpassbare Kanäle ermöglicht, um die Effizienz am Arbeitsplatz zu steigern."
      },
      "image": "elpolloloco.png",
      "url": "https://kowalczyk-karol.de/El_Pollo_Loco/",
      "github": "https://github.com/karol-kowalczyk/El_Pollo_Loco"
    }
  ];

  constructor(private translate: TranslateService) {

    
  }

  getProjectDescription(project: any): string {
    let lang = this.translate.currentLang;
    return project.translations[lang] || project.translations['en'];
  }
  

  ngOnInit() {
  }
}

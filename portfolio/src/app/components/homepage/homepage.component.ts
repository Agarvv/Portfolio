import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProjectShowcaseComponent, TranslateModule, CommonModule, ContactFormComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  functionalitiesProject1: string[] = [];
  functionalitiesProject2: string[] = [];
  functionalitiesProject3: string[] = [];

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('projects').subscribe(projects => {
      this.functionalitiesProject1 = projects?.project1?.functionalities || [];
      this.functionalitiesProject2 = projects?.project2?.functionalities || [];
      this.functionalitiesProject3 = projects?.project3?.functionalities || [];
    });
  }
}
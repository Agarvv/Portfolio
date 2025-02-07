import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../project-detail/project-detail.component'
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sofii-project-details',
  standalone: true,
  imports: [ProjectDetailComponent, TranslateModule, CommonModule, RouterModule],
  templateUrl: './sofii-project-details.component.html',
  styleUrl: './sofii-project-details.component.css'
})
export class SofiiProjectDetailsComponent {
   constructor(public translate: TranslateService) {}
}

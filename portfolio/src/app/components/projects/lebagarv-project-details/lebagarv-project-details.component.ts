import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../project-detail/project-detail.component'
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lebagarv-project-details',
  standalone: true,
  imports: [ProjectDetailComponent, TranslateModule, CommonModule, RouterModule],
  templateUrl: './lebagarv-project-details.component.html',
  styleUrl: './lebagarv-project-details.component.css'
})
export class LebagarvProjectDetailsComponent {
  constructor(public translate: TranslateService) {}
}

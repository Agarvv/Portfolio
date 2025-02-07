import { Component } from '@angular/core';

import { ProjectDetailComponent } from '../project-detail/project-detail.component'
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-jagarv-project-details',
  standalone: true,
  imports: [ProjectDetailComponent, TranslateModule, CommonModule, RouterModule],
  templateUrl: './jagarv-project-details.component.html',
  styleUrl: './jagarv-project-details.component.css'
})
export class JagarvProjectDetailsComponent {
  constructor(public translate: TranslateService) {}
}

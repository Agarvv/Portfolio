import { Component } from '@angular/core';
import { ProjectDetailComponent } from '../project-detail/project-detail.component'

@Component({
  selector: 'app-sofii-project-details',
  standalone: true,
  imports: [ProjectDetailComponent],
  templateUrl: './sofii-project-details.component.html',
  styleUrl: './sofii-project-details.component.css'
})
export class SofiiProjectDetailsComponent {

}

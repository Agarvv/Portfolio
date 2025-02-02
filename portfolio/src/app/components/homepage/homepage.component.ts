import { Component } from '@angular/core';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component'

@Component({
  selector: 'app-homepage',
  imports: [ProjectShowcaseComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

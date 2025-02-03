import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProjectShowcaseComponent, TranslateModule],  
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [],
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent {
   @Input() name: string; 
   @Input() image: string; 
   @Input() description: string; 
   @Input() techStack: string[];  
   @Input() functionalities: string[]; 
}
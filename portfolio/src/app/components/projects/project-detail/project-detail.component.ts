import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() detail: string = 'Project Title';  
  @Input() description: string = 'Project Description';  
  @Input() detailMediaType: string = '';  
  @Input() detailMedia: string = '';  
  @Input() responsiveDetailMedia: string | null = null; 
}
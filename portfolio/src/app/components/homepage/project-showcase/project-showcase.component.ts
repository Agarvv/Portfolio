import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent  {

  @Input() name!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() techStack!: string[];
  
  translatedDescription!: string;
  @Input() functionalities!: string[];
  @Input() translatedFunctionalities!: string[];
  
  constructor(public translate: TranslateService) {}

}
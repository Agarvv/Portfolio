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
export class ProjectShowcaseComponent implements OnInit {

   @Input() name!: string; 
   @Input() image!: string;
   @Input() description!: string; 
   @Input() techStack!: string[];
   @Input() functionalities!: string[]; 

   translatedDescription!: string;
   translatedFunctionalities!: string[];

   constructor(private translate: TranslateService) {}

   ngOnInit() {
      this.translate.get(this.description).subscribe(desc => {
         this.translatedDescription = desc;
      });

      this.translate.get(this.functionalities).subscribe(funcs => {
         this.translatedFunctionalities = funcs;
      });
   }
}
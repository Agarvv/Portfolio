import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SofiiProjectDetailsComponent } from './components/projects/sofii-project-details/sofii-project-details.component' 
import { JagarvProjectDetailsComponent } from './components/projects/jagarv-project-details/jagarv-project-details.component'

export const routes: Routes = [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
            path: '',
            component: HomepageComponent
        },
        {
            path: 'sofii',
            component: SofiiProjectDetailsComponent
        },
        {
            path: 'jagarv',
            component: JagarvProjectDetailsComponent
        }
      ]
    }
];

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TranslateModule } from '@ngx-translate/core';  

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
  .catch((err) => console.error(err));
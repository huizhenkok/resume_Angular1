import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

// 👇 修改这里：引用 AppComponent
import { AppComponent } from './app/app';

// 👇 修改这里：启动 AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

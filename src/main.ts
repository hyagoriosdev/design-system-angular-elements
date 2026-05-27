import {bootstrapApplication} from '@angular/platform-browser';
import {App} from './app/app';
import {appConfig} from './app/app.config';
import {registerDesignSystemElements} from './libs/ds-components/registry';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    registerDesignSystemElements(appRef.injector);
  })
  .catch((err) => console.error(err));

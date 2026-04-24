import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Static prerender for the single `/` route. No router + no ssr routing
// config is needed because the app has a single entry point.
const serverConfig: ApplicationConfig = {
    providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

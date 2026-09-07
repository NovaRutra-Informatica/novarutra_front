import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// NOTE: Only `/` is prerendered; adding routes also requires SSR route configuration.
const serverConfig: ApplicationConfig = {
    providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

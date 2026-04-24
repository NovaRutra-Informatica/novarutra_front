import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

// No router: the site is a single prerendered page, and in-page navigation
// uses plain `<a href="#anchor">` (handled by the browser + global
// `html { scroll-behavior: smooth }`). Dropping @angular/router shaves
// ~25 KB of unused JS from main.
export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
};

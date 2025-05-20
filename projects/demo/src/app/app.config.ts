import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RedZoomModule } from 'ngx-red-zoom';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideNoopAnimations(),
    importProvidersFrom(
      Angulartics2Module.forRoot(),
      CarouselModule,
      RedZoomModule
    )
  ]
};

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularToastifyModule, ToastService } from 'angular-toastify';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CoreModule from './core/core.module';
import { videosReducer } from './redux/reducers/videos.reducer';
import loadVideosEffect from './redux/effects/load-videos.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({ videos: videosReducer }, {}),
    EffectsModule.forRoot([{ loadVideosEffect }]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export default class AppModule {}

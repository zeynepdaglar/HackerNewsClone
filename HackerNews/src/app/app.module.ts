import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ThreadsComponent } from './threads/threads.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    ThreadsComponent,
    SubmitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

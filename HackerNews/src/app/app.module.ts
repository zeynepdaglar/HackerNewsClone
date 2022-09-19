import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ThreadsComponent } from './threads/threads.component';
import { SubmitComponent } from './submit/submit.component';
import { NewComponent } from './new/new.component';
import { PastComponent } from './past/past.component';
import { CommentsComponent } from './comments/comments.component';
import { AskComponent } from './ask/ask.component';
import { ShowComponent } from './show/show.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    ThreadsComponent,
    SubmitComponent,
    NewComponent,
    PastComponent,
    CommentsComponent,
    AskComponent,
    ShowComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

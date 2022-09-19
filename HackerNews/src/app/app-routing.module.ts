import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AskComponent } from './ask/ask.component';
import { CommentsComponent } from './comments/comments.component';
import { ContentComponent } from './content/content.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewComponent } from './new/new.component';
import { PastComponent } from './past/past.component';
import { ShowComponent } from './show/show.component';
import { SubmitComponent } from './submit/submit.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  {
    path:"home",
    component:ContentComponent
  },
  {
    path:"new",
    component:NewComponent
  },
  {
    path:"threads",
    component:ThreadsComponent
  },
  {
    path:"past",
    component:PastComponent
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:"ask",
    component:AskComponent
  },
  {
    path:"show",
    component:ShowComponent
  },
  {
    path:"jobs",
    component:JobsComponent
  },
  {
    path:"submit",
    component:SubmitComponent
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

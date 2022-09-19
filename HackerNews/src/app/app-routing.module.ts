import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SubmitComponent } from './submit/submit.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  {
    path:"home",
    component:ContentComponent
  },
  {
    path:"new",
    component:ContentComponent
  },
  {
    path:"threads",
    component:ThreadsComponent
  },
  {
    path:"past",
    component:ContentComponent
  },
  {
    path:"comments",
    component:ContentComponent
  },
  {
    path:"ask",
    component:ContentComponent
  },
  {
    path:"show",
    component:ContentComponent
  },
  {
    path:"jobs",
    component:ContentComponent
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

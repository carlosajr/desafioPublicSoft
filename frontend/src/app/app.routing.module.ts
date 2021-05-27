import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './modules/photos/photo-form/photo-form.component';
import { PhotoListComponent } from './modules/photos/photo-list/photo-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "user/:userName", component: PhotoListComponent },
  { path: "p/add", component: PhotoFormComponent },
  { path: "**", component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

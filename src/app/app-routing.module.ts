import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ManageComponent } from './pages/manage/manage.component';
import { AboutComponent } from './pages/about/about.component';

import { FulldetailComponent } from './pages/fulldetail/fulldetail.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"list", component:ListComponent},
  {path:"list/:id",component:FulldetailComponent},
  {path:"add", component:ManageComponent},
  {path:"edit", component:ManageComponent},
  {path:"about", component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { FinListComponent } from './fin-list/fin-list.component';

const routes: Routes = [
{path: '',
component: HomeComponent
},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'list',
component:ListComponent
},
{
  path: 'task',
  component:TaskComponent
},
{
  path: 'fin-list',
  component:TaskComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

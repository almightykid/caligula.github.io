import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { MasterComponent } from './architecture/master/master.component';
import { WorkerComponent } from './architecture/worker/worker.component';
import { ApiComponent } from './api/api.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'architecture', component: ArchitectureComponent, data: {breadcrumb: 'Architecture'} },
  { path: 'architecture/master', component: MasterComponent, data: {breadcrumb: 'Master'} },
  { path: 'architecture/worker', component: WorkerComponent, data: {breadcrumb: 'Worker'} },
  { path: 'api', component: ApiComponent, data: {breadcrumb: 'APIs'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

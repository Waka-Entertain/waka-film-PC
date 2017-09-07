import { HomeComponent } from './components/home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'playing',
    component: HomeComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

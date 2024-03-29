import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchPageComponent from './pages/search-page/search-page.component';
import DetailedInfoPageComponent from './pages/detailed-info-page/detailed-info-page.component';
import AdminPageComponent from './pages/admin-page/admin-page.component';
import FavoritePageComponent from './pages/favorite-page/favorite-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'create', component: AdminPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: ':id', component: DetailedInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule {}

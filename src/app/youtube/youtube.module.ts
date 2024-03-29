import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';
import YoutubeRoutingModule from './youtube-routing.module';

import DateColorDirective from './directives/date-color.directive';

import SearchItemComponent from './components/search-item/search-item.component';
import SearchPageComponent from './pages/search-page/search-page.component';
import VideoStatisticsComponent from './components/video-statistics/video-statistics.component';
import DetailedInfoPageComponent from './pages/detailed-info-page/detailed-info-page.component';

import PaginationComponent from './components/pagination/pagination.component';

import GetStatIconPipe from './pipes/get-stat-icon.pipe';
import AdminPageComponent from './pages/admin-page/admin-page.component';
import FavoritePageComponent from './pages/favorite-page/favorite-page.component';
import ApplySearchParamsPipe from './pipes/apply-search-params.pipe';

@NgModule({
  declarations: [
    DateColorDirective,
    SearchItemComponent,
    GetStatIconPipe,
    SearchPageComponent,
    DetailedInfoPageComponent,
    VideoStatisticsComponent,
    AdminPageComponent,
    FavoritePageComponent,
    ApplySearchParamsPipe,
    PaginationComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  exports: [SearchPageComponent, DetailedInfoPageComponent, AdminPageComponent],
})
export default class YoutubeModule {}

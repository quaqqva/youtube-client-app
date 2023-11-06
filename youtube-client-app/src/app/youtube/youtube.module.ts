import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';

import DateColorDirective from './directives/date-color.directive';

import SearchItemComponent from './components/search-item/search-item.component';
import SearchPageComponent from './pages/search-page/search-page.component';
import VideoStatisticsComponent from './components/video-statistics/video-statistics.component';
import DetailedInfoPageComponent from './pages/detailed-info-page/detailed-info-page.component';

import FilterSearchPipe from './pipes/filter-search.pipe';
import GetStatIconPipe from './pipes/get-stat-icon.pipe';
import YoutubeRoutingModule from './youtube-routing.module';

@NgModule({
  declarations: [
    DateColorDirective,
    SearchItemComponent,
    FilterSearchPipe,
    GetStatIconPipe,
    SearchPageComponent,
    DetailedInfoPageComponent,
    VideoStatisticsComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  exports: [SearchPageComponent, DetailedInfoPageComponent],
})
export default class YoutubeModule {}
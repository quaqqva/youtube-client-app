import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchParams } from 'src/app/shared/models/search-params.model';
import YoutubeService from '../../services/youtube.service';
import { SearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export default class SearchPageComponent {
  searchParams?: SearchParams;

  searchResults?: SearchResponse;

  constructor(route: ActivatedRoute, service: YoutubeService) {
    this.searchParams = route.snapshot.queryParams as SearchParams;
    route.queryParams.subscribe((params) => {
      this.searchParams = params as SearchParams;
      this.searchResults = service.getItems(this.searchParams);
    });
  }
}
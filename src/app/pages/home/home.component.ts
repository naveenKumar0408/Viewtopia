import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieApiService) {}
  bannerApiResponseData: any = [];
  trendingApiResponseData: any = [];
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  // Banner Data From API
  bannerData() {
    this.movieService.bannerApiData().subscribe({
      next: (response) => {
        this.bannerApiResponseData = response.results;
      },
    });
  }

  // Trending Movie Data from API
  trendingData() {
    this.movieService.trendingMovieApiData().subscribe({
      next: (response) => {
        console.log(response, 'trendingResponse#');
        this.trendingApiResponseData = response.results;
      },
    });
  }
}

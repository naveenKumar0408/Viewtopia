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
  actionMovieResponseData: any = [];
  adventureMovieResponseData: any = [];
  animationMovieResponseData: any = [];
  comedyMovieResponseData: any = [];
  documentaryMovieResponseData: any = [];
  scienceFictionMovieResponseData: any = [];
  thrillerMovieResponseData: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionData();
    this.adventureData();
    this.animationData();
    this.comedyData();
    this.documentaryData();
    this.scienceFictionData();
    this.thrillerData();
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
  actionData() {
    this.movieService.fetchActionMovies().subscribe({
      next: (response) => {
        console.log(response, 'actionResponse#');
        this.actionMovieResponseData = response.results;
      },
    });
  }
  adventureData() {
    this.movieService.fetchAdventureMovies().subscribe({
      next: (response) => {
        console.log(response, 'adventureResponse#');
        this.adventureMovieResponseData = response.results;
      },
    });
  }
  animationData() {
    this.movieService.fetchAnimationMovies().subscribe({
      next: (response) => {
        console.log(response, 'animationResponse#');
        this.animationMovieResponseData = response.results;
      },
    });
  }
  comedyData() {
    this.movieService.fetchComedyMovies().subscribe({
      next: (response) => {
        console.log(response, 'comedyResponse#');
        this.comedyMovieResponseData = response.results;
      },
    });
  }
  documentaryData() {
    this.movieService.fetchDocumentaryMovies().subscribe({
      next: (response) => {
        console.log(response, 'documentaryResponse#');
        this.documentaryMovieResponseData = response.results;
      },
    });
  }
  scienceFictionData() {
    this.movieService.fetchScienceFictionMovies().subscribe({
      next: (response) => {
        console.log(response, 'scienceFictionResponse#');
        this.scienceFictionMovieResponseData = response.results;
      },
    });
  }
  thrillerData() {
    this.movieService.fetchThrillerMovies().subscribe({
      next: (response) => {
        console.log(response, 'thrillerResponse#');
        this.thrillerMovieResponseData = response.results;
      },
    });
  }
}

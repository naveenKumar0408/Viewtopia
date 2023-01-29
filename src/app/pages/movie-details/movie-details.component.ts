import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetailsResult: any;
  movieVideoResult: any;
  movieCastResult: any;
  constructor(
    private movieService: MovieApiService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    console.log(getParamId);

    this.getMovie(getParamId);
    this.getMovieVideo(getParamId);
    this.getMovieCast(getParamId);
  }
  getMovie(id: any) {
    this.movieService.getMovieDetails(id).subscribe({
      next: (result) => {
        console.log(result, 'getMovieDetails');
        this.movieDetailsResult = result;
      },
    });
  }
  getMovieVideo(id: any) {
    this.movieService.getMovieVideo(id).subscribe({
      next: (result) => {
        console.log(result, 'MovieVideo');
        result.results.forEach((element: any) => {
          if (element.type == 'Trailer') {
            this.movieVideoResult = element.key;
          }
        });
      },
    });
  }
  getMovieCast(id: any) {
    this.movieService.getMovieCast(id).subscribe({
      next: (result) => {
        console.log(result, 'movie Cast');
        this.movieCastResult = result.cast;
      },
    });
  }
}

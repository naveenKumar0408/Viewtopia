import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  searchResult: any;
  constructor(private movieService: MovieApiService) {}
  ngOnInit(): void {}
  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.movieService.getSearchMovie(this.searchForm.value).subscribe({
      next: (result) => {
        console.log(result, 'searchResult#');
        this.searchResult = result.results;
      },
    });
  }
}

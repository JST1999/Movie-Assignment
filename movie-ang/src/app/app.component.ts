import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient){}

  title = 'movie-ang';
  movies=[{title: 'Nothing here yet', poster: '', plot: ''}];
  items:movies | undefined
  getMovies(){
    this.httpClient.get<movies>("http://localhost:8100/movies/1").toPromise().then(data => {
      this.items = data
      console.log(this.items)
    })
  }

}
interface movies {
  id: number;
  firstName: string;
  lastName: string;
  favourite_movies: string;
}

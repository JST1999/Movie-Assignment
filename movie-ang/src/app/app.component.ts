import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private httpClient: HttpClient
  ){}

  apikey = "4e157d55"
  title = 'movie-ang';
  movies=[{id: "Nothing here yet", title: '', poster: '', plot: ''}];
  items:movies | undefined
  name = "No one fetched"

  deleteMovie(id: string){
    if (id != "Nothing here yet"){
      console.log(id)
    }
  }

  getMovieDetails(id: string){
    this.httpClient.get<movieDetails>(`http://www.omdbapi.com/?i=${id}&apikey=${this.apikey}`).toPromise().then(data => {
      this.movies.push({id: id, title: data?.Title!, poster: `<img src='http://img.omdbapi.com/?i=${id}&apikey=${this.apikey}'>`, plot: data?.Plot!})
    })
  }
  getMovies(userID: HTMLTextAreaElement){
    this.httpClient.get<movies>(`http://localhost:8100/movies/${userID.value}`).toPromise().then(data => {
      this.items = data

      if (this.items?.id != null){
        this.name = `${this.items?.id} | ${this.items?.firstName} ${this.items?.lastName}`
        var favMovies = this.items?.favourite_movies.split(',')
        if (favMovies.length > 0){
          this.movies = []
          favMovies?.forEach(element => {
            this.getMovieDetails(element)
          });
        } else{
          this.movies=[{id: "Nothing here yet", title: '', poster: '', plot: ''}];
        }
      } else{
        this.name = "No one fetched"
        this.movies=[{id: "Nothing here yet", title: '', poster: '', plot: ''}];
      }

    })
  }

}
interface movies {
  id: number;
  firstName: string;
  lastName: string;
  favourite_movies: string;
}
interface movieDetails {
  Title: string;
  Plot: string;
}

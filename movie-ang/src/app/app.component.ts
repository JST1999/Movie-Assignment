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
  userDetails:movies | undefined
  name = "No one fetched"

  patchRequest(moviesString: string){
    let body =
      {
        favMovies: moviesString
      }
    this.httpClient.patch(`/movies/${this.userDetails?.id}`, body).toPromise().then(data => {
      this.getMovies(this.userDetails?.id as unknown as string)
    })
  }
  addMovie(id: string){
    if (id.length != 0 && this.userDetails?.id != null){
      var moviesArray = this.userDetails?.favourite_movies.split(',')
      if (!(moviesArray.includes(id))){
        moviesArray.push(id)
        var moviesString = moviesArray?.toString()

        this.patchRequest(moviesString!)
      }
    }
  }
  deleteMovie(id: string){
    if (id != "Nothing here yet"){
      var moviesArray = this.userDetails?.favourite_movies.split(',')
      moviesArray?.splice(moviesArray.indexOf(id), 1)
      var moviesString = moviesArray?.toString()

      this.patchRequest(moviesString!)
    }
  }

  getMovieDetails(id: string){
    this.httpClient.get<movieDetails>(`http://www.omdbapi.com/?i=${id}&apikey=${this.apikey}`).toPromise().then(data => {
      this.movies.push({id: id, title: data?.Title!, poster: `<img src='http://img.omdbapi.com/?i=${id}&apikey=${this.apikey}'>`, plot: data?.Plot!})
    })
  }
  getMovies(userID: string){
    if (userID.length != 0){
      this.httpClient.get<movies>(`/movies/${userID}`).toPromise().then(data => {
        this.userDetails = data

        if (this.userDetails?.id != null){
          this.name = `${this.userDetails?.id} | ${this.userDetails?.firstName} ${this.userDetails?.lastName}`
          var favMovies = this.userDetails?.favourite_movies.split(',')
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

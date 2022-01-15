import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-ang';
  movies=[{title: 'Nothing here yet', poster: '', plot: ''}]

  getMovies(){
    this.movies=[
      {title: 'Jane Bloggs', poster: 'Computer Science', plot: 'test'},
      {title: 'John Smith', poster: 'Computing', plot: 'test'},
      {title: 'Melissa Brown', poster: 'Computer Science', plot: 'test'},
      {title: 'Ian Cooper', poster: 'CGD', plot: 'test'},
    ]
  }

}

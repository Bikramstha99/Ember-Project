import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action  } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ListController extends Controller {
  @service api;
  @service store;
  @service router;
  @service jwtDecoder;

   @tracked searchTerm='';
   
   @action
   searchMovies(event) {
    clearTimeout(this.searchMoviesTimeoutId);
    this.searchMoviesTimeoutId = setTimeout(() => {
      this.searchTerm = event.target.value;
      console.log(this.searchTerm);
    }, 1000); 
  }
   get filteredMovies() {
    const movies = this.model;
    const searchTerm = this.searchTerm.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().startsWith(searchTerm) 
  );
  console.log('Filtered Movies:', filteredMovies);
  return filteredMovies;
  } 

  get isAdmin() {
    if(this.userRole==='Admin')
    return true;
  else
    return false; 
  }
  @action
  async deleteMovie(id) {
    let ans = confirm("Are you sure want to delete it?");
    if(ans)
    {
    await this.api.deleteMovie(id);
    const data=await this.api.fetchData();
    console.log(data);
    this.set('model', data);
    }
    else
    {
      await this.router.transitionTo('list');
    }     
  }
}

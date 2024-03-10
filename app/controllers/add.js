import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class AddMovieController extends Controller {
  @service api;
  @service router;
  // @service toastr;
  // @service('toast') toastr;

  
  name = '';
  director = '';
  genre = '';
  releasedDate ='';
  movieImage = null;
  

  @action
  fileSelected(event) {
    if(event.target.files && event.target.files.length>0){ 
    console.log('File selected:', event.target.files[0]);
    const file = event.target.files[0];  
    this.movieImage=file;
    }
  }


    @action
    
    async addMovie(event) {
    event.preventDefault();
    console.log('afterpropagation');

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('director', this.director);
    formData.append('genre', this.genre);
    formData.append('releaseDate', this.releasedDate);
    formData.append('cast', this.cast);
    formData.append('description', this.description);
    formData.append('movieImage',this.movieImage);
    // formData.forEach(val => console.log(val));
    const addedMovie = await this.api.addMovie(formData);
    // this.toastr.success("Bikram");
    this.setProperties({
      name: '',
      director: '',
      genre: '',
      releasedDate: '',
      cast: '',
      description: '',
      movieImage: null,
    });
    await this.router.transitionTo('list'); 
  }
};



  
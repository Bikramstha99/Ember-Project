import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EditController extends Controller {
  @service api;
  @service router;
  
  name='';
  director='';
  genre='';
  releaseDate='';
  movieImage='';

  @tracked isAdmin=true;

  @action
  fileSelected(event) {
    debugger
    if(event.target.files && event.target.files.length>0){ 
    console.log('File selected:', event.target.files[0]);
    const file = event.target.files[0];  
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      console.log('File selected:', file);
      console.log('Base64 representation:', base64String);
      this.movieImage = base64String.split(',');
      this.isAdmin = false;
    };
    reader.readAsDataURL(file);
    // this.movieImage=file;
    // this.isAdmin=false;
    }
  }

  
  @action
  async handleEditMovie(id, event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', this.model.name); 
    formData.append('director', this.model.director);
    formData.append('genre', this.model.genre);
    formData.append('releaseDate', this.model.releaseDate);
    formData.append('cast', this.model.cast);
    formData.append('description', this.model.description);
    formData.append('movieImage', this.movieImage[1]);

    
      const editMovie = await this.api.editMovie(formData);
      this.isAdmin=true;
      await this.router.transitionTo('list');   
      console.log('Movie added successfully:', editMovie);
  };
}
  
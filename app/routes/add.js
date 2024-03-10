import Controller from '@ember/controller';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';



export default class AddRoute extends Route {
    @service api;
    @service router;
    beforeModel() {
      const token = localStorage.getItem('token');
      if (!token) {
       alert("error");
       this.router.transitionTo("errorpage");
      }
    }

    // async addMovie(formData) {
    //   const response = await fetch('https://localhost:7077/Movie/Create', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   return response;
    // }
}
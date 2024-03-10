import Controller from '@ember/controller';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

    

export default class DeleteRoute extends Route {
    @service api;
    @service store;

    async model(params){
        const movieIdString = params.movie_id;
        const movieId = parseInt(params.movie_id, 10); 
        const response = await fetch(`https://localhost:7077/Movie/GetById?id=${movieId}`, {
                 method: 'GET',
               });
        let data = await response.json();
        return  data ;      
      }
     

}
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class EditRoute extends Route {
  @service api;
  @service store;
  @service jwtDecoder;
  

    async model(params){
      const jwtToken = localStorage.getItem('token');
      const userRole = await this.jwtDecoder.decodeToken();
      const header ={
        'accept': '*/*',
        'Authorization': `Bearer ${jwtToken}`,
        'Roles':userRole,
      };
    const movieIdString = params.movie_id;
    const movieId = parseInt(params.movie_id, 10); 
    const response = await fetch(`https://localhost:7077/Movie/GetById?id=${movieId}`, {
             method: 'GET',
             headers:header,
           });
    let data = await response.json();
    return  data ;     
  }
}

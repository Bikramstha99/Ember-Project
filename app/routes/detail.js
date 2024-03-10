import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'movie-ember/config/environment';


export default class DetailRoute extends Route {
  @service api;
  @service store;
  @service jwtDecoder;

api = config.apiUrl;
  
    async model(params){
      const jwtToken = localStorage.getItem('token');
      const userRole = await this.jwtDecoder.decodeToken();
      const header ={
        'accept': '*/*',
        'Authorization': `Bearer ${jwtToken}`,
      };
    const movieIdString = params.detail_id;
    const movieId = parseInt(params.detail_id, 10); 
    const response = await fetch(`${this.api}/Movie/GetById?id=${movieId}`, {
             method: 'GET',
             headers:header,
           });
    let data = await response.json();
    return  data ;   
  }
}

import Route from '@ember/routing/route';
import { service } from "@ember/service";


export default class ListRoute extends Route {
  @service api;
  @service store;
  @service jwtDecoder;
  @service name;


  async beforeModel() {
    const userRole = await this.jwtDecoder.decodeToken();
    console.log('Role', userRole);
    this.controllerFor('list').set('userRole', userRole);

    const name= await this.name.decodeUser();
    this.controllerFor('list').set('name',name);
  } 
  async model() {
    return this.api.fetchData();
  }
}

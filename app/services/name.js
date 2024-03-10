import Service from '@ember/service';
import { inject as service } from '@ember/service';
import jwtDecode from 'jwt-decode';

export default class NameService extends Service {

  decodeUser() {
    const localToken=localStorage.getItem('token');
    const decodetoken=jwtDecode(localToken);
    console.log(decodetoken);
    const name = decodetoken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    return name;
  }
}

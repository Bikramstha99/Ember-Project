import Service from '@ember/service';
import jwtDecode from 'jwt-decode';

export default class JwtDecoderService extends Service {

  decodeToken() {
    const localToken=localStorage.getItem('token');
    const decodetoken=jwtDecode(localToken);
    console.log(decodetoken);
    const role = decodetoken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return role;
  }
}

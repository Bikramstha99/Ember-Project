
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import config from 'movie-ember/config/environment';

export default class RegisterController extends Controller {
  @service api;
  @service router; 
  api = config.apiUrl;

  firstName = '';
  lastName = '';
  userName = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = null;
  validationErrors = null;
  
  @action
  async register(event)  {
    event.preventDefault();
    this.setProperties({
      errorMessage: null,
      validationErrors: null,
    });
    if(!this.firstName || !this.lastName || !this.userName || !this.email || !this.password 
      || !this.confirmPassword ){
        this.set('errorMessage', ['Provide all credentials']);
      }
    else if (this.password !== this.confirmPassword) {
      this.set('errorMessage', ['Incorrect password and confirmpassword']);
        return;
    }
    else{
    const requestData = {
      firstName:this.firstName,
      lastName:this.lastName,
      userName:this.userName,
      email: this.email,
      password: this.password,
      confirmPassword:this.confirmPassword
    };
    try{
      const response = await fetch(`${this.api}/User/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
       if (!response.ok) {
          const errorData = await response.json();
          if (errorData.errors) {
            this.set('validationErrors', errorData.errors);
          } else {
            this.set('errorMessage', errorData.message);
          }
          return;
        }
      const successData = await response.json();
      alert(successData.message);
      this.router.transitionTo('login');
    }
    catch (error) {
      console.error('An unexpected error occurred:', error);
      this.set('errorMessage', 'An unexpected error occurred');
    }
      // this.setProperties({
      //   firstName:'',
      //   lastName:'',
      //   userName:'',
      //   email: '',
      //   password: '',
      //   confirmPassword:''
      // });
  };
}
}

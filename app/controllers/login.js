import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import config from 'movie-ember/config/environment';

export default class LoginController extends Controller {
  @service api;
  @service router;

  api = config.apiUrl;
  email = '';
  password = '';
  errorMessage = null;
  validationErrors = null;

  @action
  async login(event) {
    event.preventDefault();
    
    // Clear previous error messages
    this.setProperties({
      errorMessage: null,
      validationErrors: null,
    });

    if (!this.email && !this.password) {
      this.set('errorMessage', ['Provide email and password']);
    } else if (!this.email) {
      this.set('errorMessage', ['Provide Email']);
    } else if (!this.password) {
      this.set('errorMessage', ['Provide Password']);
    } else {
      const requestData = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await fetch(`${this.api}/User/login`, {
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

        const data = await response.json();
        alert(data.message);
        console.log('Response:', data);
        localStorage.setItem('token', data.token);

        setTimeout(() => {
          localStorage.removeItem('token');
          this.router.transitionTo('');
        }, 1000000); // millisecond

        this.router.transitionTo('list');
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        this.set('errorMessage', 'An unexpected error occurred');
      }
    }
    this.setProperties({
      email: '',
      password: '', 
    });
  }
}

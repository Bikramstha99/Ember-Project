import { inject as service } from '@ember/service';
import Service from '@ember/service';
import fetch from 'fetch';
import config from 'movie-ember/config/environment';

export default class ApiService extends Service {
@service router;
@service store;
@service jwtDecoder;

api = config.apiUrl;


// async registerUser(formData) {
//   const response = await fetch(`${this.api}/User/Register`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   });
//   if (!response.ok) {
//     const errorData = await response.json();
//      if (errorData.errors) {
//       errorData.errors.forEach((error, index) => {
//         const errorstring=error;
//         console.log(errorstring);
//         alert(errorstring);
//       });
//     }
//        else if (errorData.message) {
//       const errorMessage = errorData.message;
//       alert(errorMessage);
//     } else {
//       console.log('Validation Errors:', errorData);
//       alert('Provide all the credentials');
//     }
//     return;
//   }
//   const successData = await response.json();
//   alert(successData.message);
//   this.router.transitionTo('login');
// }


  
  // async loginUser(formData) {
  //     const response = await fetch(`${this.api}/User/Login`, {
  //       method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) {
  //         const errorData = await response.json();
  //        if(errorData.message) {
  //           alert('Invalid username and password');
  //         } 
  //         else if (errorData.errors) {
  //           errorData.errors.forEach((error, index) => {
  //             const errorstring=error;
  //             console.log(errorstring);
  //             alert(errorstring);
  //           });
  //         }
  //         else {
  //           alert('Provide email and password');
  //         }
  //     }
  //     const data = await response.json();
  //     alert(data.message);
  //     console.log('Response:', data);
  //     localStorage.setItem('token', data.token);
  //     setTimeout(() => {
  //       localStorage.removeItem('token');;
  //       this.router.transitionTo('');

  //     }, 1000000); //millisecond     
  //     this.router.transitionTo('/movielist');
  //   } 


  async addMovie(formData) {
    const jwtToken=localStorage.getItem('token');
    const header = {
      'accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`,
    };
    const response = await fetch(`${this.api}/Movie/Create`, {
      method: 'POST',
      headers:header,
      body: formData,
      
    });
    return response;
  }

  async deleteMovie(id) {
    const jwtToken = localStorage.getItem('token');
    const userRole = await this.jwtDecoder.decodeToken();
    const header ={
      'accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`,
    };
    const response = await fetch(`${this.api}/Movie/Delete?id=${id}`, {
      method: 'Delete',
      headers: header,
    });
    return response;
  }

  
  async fetchData() {
    
    const jwtToken = localStorage.getItem('token');
    const userRole = await this.jwtDecoder.decodeToken();
    const header ={
      'accept': '*/*',
      'Authorization': `Bearer ${jwtToken}`,
    };
    let response = await fetch(`${this.api}/Movie/GetAllMovie`, {
      method: 'GET',
      headers: header,
    });
    let data = await response.json();
    return data;
  }
  

async editMovie(formData) {
  const jwtToken = localStorage.getItem('token');
  const userRole = await this.jwtDecoder.decodeToken();
  const header ={
    'accept': '*/*',
    'Authorization': `Bearer ${jwtToken}`,
  };
  const response = await fetch(`${this.api}/Movie/Edit`, {
    method: 'POST',
    headers: header,
    body: formData,
  });
}
}







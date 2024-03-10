  import EmberRouter from '@ember/routing/router';
  import config from 'movie-ember/config/environment';

  export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
    
  }

  Router.map(function () {
    this.route('login',{path:''});
    this.route('register',{path:'/register'});
    this.route('about',{path:'/about'});
    this.route('contact', { path: '/getting-in-touch' });
    this.route('list',{path:'/movielist'});
    this.route('add',{path:'/movie/add'});
    this.route('detail',{path:'/movie/:detail_id'})
    this.route('edit',{path:'/editmovie/:movie_id'});
    this.route('delete',{path:'/deletemovie/:movie_id'});  
  });



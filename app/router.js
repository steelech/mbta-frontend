import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('routes', function() {
    this.route('route', { path: ':route_id'}, function() {
      this.route('trips', function() {
        this.route('trip', { path: ':trip_id'}, function() {
          
        });
      });
    });
  });
  this.route('about');
  this.route('help');
  this.route('home', { path: '/' });
  this.route('notifications');
});

export default Router;

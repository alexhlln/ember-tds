import EmberRouter from '@ember/routing/router';
import config from 'ember-td6/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('autre');
  this.route('board');
});

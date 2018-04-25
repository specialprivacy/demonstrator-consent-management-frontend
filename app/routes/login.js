import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from '../config/environment';


export default Route.extend({
  session: Ember.inject.service('session'),
  beforeModel() {
    this._super(...arguments);
    var code = this.paramsFor('login')['code'];
    if (code !== null && code !== undefined) {
      var session = this.get('session').authenticate('authenticator:keycloak', code).then(() => {
        debugger;
      });
    }
  }
});

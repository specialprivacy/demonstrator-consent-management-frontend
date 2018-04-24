import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return {
      "user": this.modelFor("application"),
      "policies": this.get("store").findAll("policy")
    }
  }
});

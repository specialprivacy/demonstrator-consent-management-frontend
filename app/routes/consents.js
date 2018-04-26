import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return {
      "user": this.get("store").findRecord("user", "9b84f8a5-e37c-4baf-8bdd-92135b1bc0f9"),
      "policies": this.get("store").findAll("policy")
    }
  }
});

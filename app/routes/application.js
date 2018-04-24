import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {

  model: function() {
    return this.get("store").findRecord("user", "9b84f8a5-e37c-4baf-8bdd-92135b1bc0f9");
  }
});

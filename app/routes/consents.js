import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return {
      "user": this.modelFor("application"),
      "policies": this.get("store").findAll("policy")
    }
  }
});

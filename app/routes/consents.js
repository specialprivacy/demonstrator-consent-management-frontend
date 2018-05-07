import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return {
      "user": this.get("store").findRecord("user", "current"),
      "policies": this.get("store").findAll("policy")
    }
  }
});

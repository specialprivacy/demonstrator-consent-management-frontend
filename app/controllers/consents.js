import Controller from '@ember/controller';

export default Controller.extend({
  // UserId and ApplicationId should definitely come from somewhere else but let's mock it for now.
  queryParams: ["applicationId", "userId"],

  user: Ember.computed.alias("model.user"),
  policies: Ember.computed.alias("model.policies"),

  actions: {
    save(){
      this.get("user").save();
    },
    insertOrRemovePolicy(policies, policy) {
      console.log('insertorRemove');
      policies.then(policies => {
        if(policies.includes(policy)){
          policies.removeObject(policy);
        }
        else{
          policies.pushObject(policy);
        }
      });
    }
  }
});

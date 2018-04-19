import Controller from '@ember/controller';

export default Controller.extend({
  user: Ember.computed.alias("model.user"),
  userPolicies: Ember.computed.alias("user.policies"),
  policies: Ember.computed.alias("model.policies"),

  actions: {
    save(){
      this.get("user").save();
    },
    insertOrRemovePolicy(policies, policy) {
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

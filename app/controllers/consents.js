import Controller from '@ember/controller';

export default Controller.extend({
  user: Ember.computed.alias("model.user"),
  userPolicies: Ember.computed.alias("user.policies"),
  policies: Ember.computed.alias("model.policies"),
  loading: false,
  setLoading: function(value) {
    this.set('loading', value);
    return false;
  },

  actions: {
    toggleExpand(policy){
      policy.toggleProperty("expanded");
    },
    save(){
      this.get("user").then(user => {
        this.setLoading(true);
        user.save().then(() => {
          this.setLoading(false);
        });
      })
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

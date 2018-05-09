import Controller from '@ember/controller';

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  user: Ember.computed.alias("model.user"),
  userPolicies: Ember.computed.alias("user.policies"),
  policies: Ember.computed.alias("model.policies"),
  loading: false,
  setLoading: function(value) {
    this.set('loading', value);
    return false;
  },

  actions: {
    toggleExpand(policy) {
      policy.toggleProperty("expanded");
    },
    save() {
      this.get("user").then(user => {
        this.setLoading(true);
        user.save().then(() => {
          this.get('notifications').success('Saved successfully!', {
            autoClear: true,
            clearDuration: 2000
          });
        }).catch(() => {
          this.get('notifications').error('An error occured when saving your updated profile!', {
            autoClear: true,
            clearDuration: 2000
          });
        }).finally(() => {
          this.setLoading(false);
        });
      })
    },
    insertOrRemovePolicy(policies, policy) {
      policies.then(policies => {
        if (policies.includes(policy)) {
          policies.removeObject(policy);
        } else {
          policies.pushObject(policy);
        }
      });
    }
  }
});

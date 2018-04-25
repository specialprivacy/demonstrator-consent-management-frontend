import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service('session'),
  authCode: Ember.computed('session', 'session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      var authorizationCode = this.get('session.data.authenticated.authorizationCode');
      if (!Ember.isEmpty(authorizationCode)) {
        return authorizationCode;
      }
    }
    return "";
  }),
  headers: Ember.computed('authCode', function(){
    return {
      "Application-Id": "d5aca7a6-ed5f-411c-b927-6f19c36b93c3",
      "Authorization-Code": this.get('authCode')
    };
  })
});

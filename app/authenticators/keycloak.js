import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),

  authenticate(code) {
    return this.get('ajax').request(config.auth.tokenEndpoint, {
      data: {
        'code': code,
        'grant_type': "authorization_code",
        'redirect_uri': config.auth.loginRedirectUri
      }
    });
  },
});

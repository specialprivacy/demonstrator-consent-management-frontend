import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),

  authenticate(code) {
    var data = {
      token: code
    };
    console.log(data);
    return new Ember.RSVP.Promise((resolve, reject) => {
      resolve(data);
    });
  },
});

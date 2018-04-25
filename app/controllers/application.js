import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      var redirect = encodeURIComponent(config.auth.loginRedirectUri);
      window.location.replace(`${config.auth.loginUrl}` +
          `?client_id=${config.auth.clientId}` +
          `&response_type=code`+
          `&grant_type=password` +
          `&redirect_uri=${redirect}`
        );
    },
    logout(){
      var redirect = encodeURIComponent(config.auth.logoutRedirectUri);
      this.get('session').invalidate().then(() => {
        window.location.replace(`${config.auth.logoutUrl}` +
          `?redirect_uri=${redirect}`
        );
      });
    }
  }
});

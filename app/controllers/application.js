import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      window.location.replace(`${config.auth.loginUrl}` +
          `?client_id=${config.auth.clientId}` +
          `&response_type=code`+
          `&grant_type=password` +
          `&redirect_uri=${config.auth.loginRedirectUri}`
        );
    },
    logout(){
      this.get('session').invalidate().then(() => {
        window.location.replace(`${config.auth.logoutUrl}` +
          `?redirect_uri=${config.auth.logoutRedirectUri}`
        );
      });
    }
  }
});

import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  actions: {
    login() {
      window.location.replace(`${config.auth.loginUrl}` +
          `client_id=${config.auth.clientId}` +
          `&response_type=${config.auth.responseType}`+
          `&grant_type=${config.auth.grantType}` +
          `&redirect_uri=${config.auth.loginRedirectUri}`
        );
    },
    logout(){
      window.location.replace(`${config.auth.logoutUrl}` +
        `&redirect_uri=${config.auth.logoutRedirectUri}`
      );
    }
  }
});

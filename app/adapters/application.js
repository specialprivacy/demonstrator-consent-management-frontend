import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  handleResponse(status, headers, payload) {
    if (status === 401) {
      if(headers.location){
        return window.location.replace(headers.location);
      }
    }
    return this._super(...arguments);
  },
  headers:{
    "Application-Id": "d5aca7a6-ed5f-411c-b927-6f19c36b93c3"
  }
});

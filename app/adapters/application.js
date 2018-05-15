import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  handleResponse(status, headers, payload) {
    if (status === 401) {
      const locationHeader = headers.location || headers.Location || headers.LOCATION
      if (locationHeader){
        return window.location.replace(locationHeader);
      }
    }
    return this._super(...arguments);
  },
  headers:{
    "Application-Id": "d5aca7a6-ed5f-411c-b927-6f19c36b93c3"
  }
});

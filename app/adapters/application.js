import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    "Application-Id": "d5aca7a6-ed5f-411c-b927-6f19c36b93c3"
  }
});

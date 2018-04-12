import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  policies: DS.hasMany('policy', {async: true, inverse: null})
});

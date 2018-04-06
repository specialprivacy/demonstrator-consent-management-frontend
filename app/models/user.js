import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  consents: DS.hasMany('consent', {inverse: null})
});

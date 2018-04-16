import DS from 'ember-data';

export default DS.Model.extend({
  dataCollection: DS.attr('string'),
  locationCollection: DS.attr('string'),
  processCollection: DS.attr('string'),
  purposeCollection: DS.attr('string'),
  recipientCollection: DS.attr('string')
});

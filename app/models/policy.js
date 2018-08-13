import DS from 'ember-data';

export default DS.Model.extend({
  dataCollection: DS.attr('string'),
  storageCollection: DS.attr('string'),
  processingCollection: DS.attr('string'),
  purposeCollection: DS.attr('string'),
  recipientCollection: DS.attr('string'),
  explanation: DS.attr('string'),

  expanded: false
});

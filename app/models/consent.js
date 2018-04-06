import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  given: DS.attr('boolean'),
  dataAtom: DS.attr('string'),
  locationAtom: DS.attr('string'),
  processAtom: DS.attr('string'),
  purposeAtom: DS.attr('string'),
  recipientAtom: DS.attr('string'),

  policyId: DS.attr('string'),
  userId: DS.attr('string')
});

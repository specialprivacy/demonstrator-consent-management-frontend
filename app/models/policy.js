import DS from 'ember-data';

export default DS.Model.extend({
  dataAtom: DS.attr('string'),
  locationAtom: DS.attr('string'),
  processAtom: DS.attr('string'),
  purposeAtom: DS.attr('string'),
  recipientAtom: DS.attr('string')
});
import Route from '@ember/routing/route';

import DataAtoms from '../utils/data-atoms';
import LocationAtoms from '../utils/location-atoms';
import ProcessingAtoms from '../utils/processing-atoms';
import PurposeAtoms from '../utils/purpose-atoms';
import RecipientAtoms from '../utils/recipient-atoms';
import UserData from '../utils/users';

export default Route.extend({
  data: {
    "data": [
      // Data
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d0","type":"data"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d1","type":"data"},

      // Processes
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d0","type":"process"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d1","type":"process"},

      // Purposes
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d2","type":"purpose"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d3","type":"purpose"},

      // Recipients
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d4","type":"recipient"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d5","type":"recipient"},

      // Location
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d6","type":"location"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d7","type":"location"},

      // Users
      {"attributes":{"label":"test1","name":"test1"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d8","type":"user"},
      {"attributes":{"label":"test2","name":"test2"},"id":"4bc57cfc-5e3f-4420-ad61-bb25ef3113d9","type":"user"}
    ]
  },
  beforeModel: function(){
    let array = Array.prototype.concat(UserData.users, DataAtoms.atoms, LocationAtoms.atoms, ProcessingAtoms.atoms, PurposeAtoms.atoms, RecipientAtoms.atoms);
    this.get("store").push({"data":array});
  },
  model: function() {
    return Ember.RSVP.hash({
      data: this.get("store").peekAll("data"),
      processes: this.get("store").peekAll("process"),
      purposes: this.get("store").peekAll("purpose"),
      recipients: this.get("store").peekAll("recipient"),
      locations: this.get("store").peekAll("location"),
      users: this.get("store").peekAll("user")
    });
  }
});

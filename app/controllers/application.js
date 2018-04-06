import Controller from '@ember/controller';

export default Controller.extend({
  data: Ember.computed.alias("model.data"),
  processes: Ember.computed.alias("model.processes"),
  purposes: Ember.computed.alias("model.purposes"),
  recipients: Ember.computed.alias("model.recipients"),
  locations: Ember.computed.alias("model.locations"),
  users: Ember.computed.alias("model.users"),

  selectedData: Ember.computed(function(){return this.get("data").get('firstObject')}),
  selectedProcess: Ember.computed(function(){return this.get("processes").get('firstObject')}),
  selectedPurpose: Ember.computed(function(){return this.get("purposes").get('firstObject')}),
  selectedRecipient: Ember.computed(function(){return this.get("recipients").get('firstObject')}),
  selectedLocation: Ember.computed(function(){return this.get("locations").get('firstObject')}),
  selectedUser: Ember.computed(function(){return this.get("users").get('firstObject')}),

  actions: {
    sendMessage(type){
      const data = this.get('selectedData');
      const process = this.get('selectedProcess');
      const purpose = this.get('selectedPurpose');
      const recipient = this.get('selectedRecipient');
      const location = this.get('selectedLocation');
      const user = this.get('selectedUser');

      const message = {
        type, data: data.get('label'), process: process.get('label'), purpose: purpose.get('label'), recipient: recipient.get('level'), location: location.get('level'), user: user.get('label')
      };

      //const message = `${type} for data ${data.get('label')} for process ${process.get('label')} for purpose ${purpose.get('label')} for recipient ${recipient.get('label')} for location ${location.get('label')} by user ${user.get('label')}`;
      console.log("Sending message {%s}", JSON.stringify(message));
    }
  }
});

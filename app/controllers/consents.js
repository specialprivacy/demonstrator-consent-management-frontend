import Controller from '@ember/controller';

export default Controller.extend({
  // UserId and ApplicationId should definitely come from somewhere else but let's mock it for now.
  queryParams: ["applicationId", "userId"],

  // Default query params
  applicationId: "d5aca7a6-ed5f-411c-b927-6f19c36b93c3",
  userId: "9b84f8a5-e37c-4baf-8bdd-92135b1bc0f9",

  refreshSocket: function(){
    Ember.run.next(function(){
      if(this.get("socket")){this.get("socket").close();}
      console.log("app: %s ---- user: %s", this.get("applicationId"), this.get("userId"));
      const socket = this.get('websockets').socketFor("ws://localhost:8081/follow?applicationId="+this.get("applicationId")+"&userId="+this.get("userId"));
      this.set("socket", socket);
      socket.on('open', this.myOpenHandler, this);
      socket.on('message', this.myMessageHandler, this);
      socket.on('close', this.myCloseHandler, this);
    }.bind(this));
  }.on('init'),
  socket: null,

  myOpenHandler: function(event) {
    console.log('On open event has been called: ' + event);
  },
  myCloseHandler: function(event) {
    console.log("On close event has been called: " + event);
    this.get("socket").reconnect();
  },

  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);

    let data = JSON.parse(event.data);
    switch(data["operationType"]){
      case "update":
        let consent = data["consent"];

        if(consent["id"]) {
          console.log('Message: consentid ' + consent["id"]);
          this.get('store').pushPayload("consent",  {consent});
        }
        else {
          this.get('store').createRecord("consent", consent);
        }
        break;
      case "unloadAll":
        this.get('store').unloadAll("consent");
        break;
    }
  },

  actions: {
    unloadAll(){
      this.get('store').unloadAll("consent");
    },
    toggleConsent(consent) {
      consent.toggleProperty("given");
      let message = {
        "id": consent.get("id"),
        "given": consent.get("given"),
        "userId": consent.get("userId"),
        "policyId": consent.get("policyId")
      };
      if(this.get("socket").readyState() === WebSocket.OPEN) {
        this.get("socket").send(JSON.stringify(message));
      }
      else {
        // TODO : Do something, anything
        console.log("Socket is closed.");
      }
    }
  }
});

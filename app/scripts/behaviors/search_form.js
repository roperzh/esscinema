// -------------------------------------------
//   Search Form
//     -> Simple imput wich triggers
//        `search:textChanged` when new text
//        is inserted
// -------------------------------------------

App.SearchForm = Essential.Behavior.extend({
  init: function() {
    setInterval(function() {
      if(this.didChanged) {
        console.log("fired");
        this.send();
      }
    }.bind(this), 500);

    this.text = "padrino";
    this.didChanged = true;
  },

  events: {
    "keyup .search": "notifyTextChanged",
    "submit": "stopSubmission"
  },

  notifyTextChanged: function(e) {
    this.didChanged = true;
    this.text = e.currentTarget.value;
  },

  send: function() {
    this.didChanged = false;
    this.emit({
      channel: "search:textChanged",
      data: {
        text: this.text
      }
    });
  },

  stopSubmission: function(e) {
    e.preventDefault();
  }
});

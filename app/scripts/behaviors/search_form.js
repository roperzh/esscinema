// -------------------------------------------
//   Search Form
//     -> Simple input wich triggers
//        `search:textChanged` when new text
//        is inserted
// -------------------------------------------

App.SearchForm = Essential.Behavior.extend({
  events: {
    "keyup .search": "notify",
    "submit": "stopSubmission"
  },

  notify: function(e) {
    this.emit({
      channel: "search:textChanged",
      data: {
        text: e.currentTarget.value
      }
    });
  },

  stopSubmission: function(e) {
    e.preventDefault();
  }
});

// -------------------------------------------
//   Twitter Share
// -------------------------------------------

App.TwitterShare = Essential.Behavior.extend({
  events: {
    "click": "triggerClick"
  },

  triggerClick: function(e) {
    e.preventDefault();
    window.open(e.currentTarget.getAttribute("href"), 'popUpWindow',
      'width=800,height=270,left=10,top=10');
  }
});

App.TwitterShare = Essential.Behavior.extend({
  events: {
    "click": "triggerClick"
  },

  triggerClick: function(e) {
    e.preventDefault();
    console.log("sadf");
    window.open(e.currentTarget.getAttribute("href"), 'popUpWindow',
      'width=800,height=270,left=10,top=10');
  }
});

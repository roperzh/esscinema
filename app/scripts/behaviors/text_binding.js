App.ResultBinding = Essential.Behavior.extend({

  channels: {
    "search:textChanged": "setText",
    "search:performed": "setStat"
  },

  setText: function(e) {
    this.el.getElementsByClassName("name")[0].innerHTML = "\"" + e.detail.text + "\"";
  },

  setStat: function(e) {
    this.el.getElementsByClassName("stat")[0].innerHTML = e.detail.count + " results";
  }
});

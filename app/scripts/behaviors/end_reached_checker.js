App.EndReachedChecker = Essential.Behavior.extend({
  init: function() {
    this.lazyEmit = App.Helper.debounce(this.emit, 250);
  },

  events: {
    "scroll": "check"
  },

  check: function() {
    if(App.Helper.documentHeigth() / this.el.scrollY < 2) {
      this.lazyEmit({
        channel: "end:reached",
        context: document
      });
    }
  }
});

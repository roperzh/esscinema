// -------------------------------------------
//   Facebook Share
//     -> Snippet to share an url
// -------------------------------------------

App.FacebookShare = Essential.Behavior.extend({
  events: {
    "click": "share"
  },

  init: function() {
    /* Local Variables */
    this.url = this.el.getAttribute("data-share-url");
  },

  share: function(e) {
    e.preventDefault();
    FB.ui({
        method: 'share',
        href: this.url,
      },
      function(response) {
        if(typeof response !== "undefined") {
          console.log(response);
        }
      });
  }
});

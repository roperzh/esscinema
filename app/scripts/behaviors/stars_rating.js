// -------------------------------------------
//   Stars rating
//     -> Simple rating based on stars
// -------------------------------------------

App.StarsRating = Essential.Behavior.extend({
  init: function() {
    this.rating = this.el.getAttribute("data-rating");
    this.el.className += " star-" + Math.round(this.rating / 2);
  },

  events: {
    "mouseover .fa-star": "markSelection",
    "mouseout": "reset",
    "click .fa-star": "sendVote"
  },

  markSelection: function(e) {
    this.setStars(e.currentTarget.dataset.index);
  },

  reset: function() {
    this.setStars(Math.round(this.rating / 2));
  },

  setStars: function(number) {
    this.el.className = this.el.className.replace(/star-[0-9]/, "star-" + number);
  },

  sendVote: function(e) {
    this.rating = parseInt(e.currentTarget.dataset.index) * 2;
  }
});

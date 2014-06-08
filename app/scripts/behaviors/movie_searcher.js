// ------------------------------------------------
//   Movie Searcher
//     -> Search for movies and display the results
// ------------------------------------------------

App.MovieSearcher = Essential.Behavior.extend({

  init: function() {
    this.apiKey = this.el.getAttribute("data-api-key");
    this.baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey;
    this.template = document.getElementById("testTemplate").innerHTML;
    this.compiler = doT.template(this.template);
  },

  channels: {
    "search:textChanged #search-form": "search"
  },

  search: function(e) {
    App.Ajax.request({
      url: this.baseUrl + "&query=" + e.detail.text + "&search_type=ngram",
      method: "GET",
      success: this.setContents.bind(this)
    });
  },

  setContents: function(rawResponse) {
    var response = JSON.parse(rawResponse);
    this.el.innerHTML = this.compiler(response.results);

    Essential.loadBehaviors({
      application: App,
      context: this.el
    });

    this.emit({
      channel: "search:performed",
      data: {
        count: response.total_results
      }
    });
  }
});

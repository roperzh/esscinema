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
    this.lazySearch = App.Helper.debounce(this.search, 500);
  },

  channels: {
    "search:textChanged #search-form": "changeText",
    "end:reached": "loadNextPage"
  },

  changeText: function(e) {
    this.page = 1;
    this.text = e.detail.text;
    this.results = [];
    this.lazySearch();
  },

  loadNextPage: function() {
    if(this.page >= this.totalPages) {
      return;
    }
    this.page += 1;
    this.search();
  },

  search: function() {
    App.Ajax.request({
      method: "GET",
      url: this.baseUrl + "&query=" + this.text + "&search_type=ngram" + "&page=" + this.page,
      success: this.setContents.bind(this),
      error: function(error) {
        console.log(error);
      }
    });
  },

  setContents: function(rawResponse) {
    var response = JSON.parse(rawResponse);
    this.results = this.results.concat(response.results)
    this.el.innerHTML = this.compiler(this.results);
    this.totalPages = response.total_pages;

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

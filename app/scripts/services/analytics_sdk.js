// -------------------------------------------
//   Google Analytics tracking
// -------------------------------------------

App.AnalyticsSdk = {
  load: function(options) {
    App.Ajax.getScript("//www.google-analytics.com/ga.js", function() {
      _gaq.push(["_setAccount", "UA-" + options.appId + "-1"]);
      _gaq.push(["_trackPageview"]);
    });
  }
};

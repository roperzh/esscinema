// -------------------------------------------
//   Facebook SDK
// -------------------------------------------

App.FacebookSdk = {
  load: function(options) {
    App.Ajax.getScript("//connect.facebook.net/" + options.lang + "/all.js", function() {
      FB.init({
        appId: options.appId,
        xfbml: true,
        version: "v2.0"
      });
    });
  }
};

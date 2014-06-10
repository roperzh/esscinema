App.FacebookSdk.load({
  appId: "271828396337653",
  lang: "en_UK"
});

App.AnalyticsSdk.load({
  appId: "51741194"
});

document.addEventListener('DOMContentLoaded', function() {
  Essential.loadBehaviors({
    application: App
  });

  App.EndReachedChecker.new(window);
});


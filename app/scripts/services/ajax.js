App.Ajax = {
  request: function(options) {
    var request = new XMLHttpRequest();
    request.open(options.method, options.url, true);

    request.onload = function() {
      if(request.status >= 200 && request.status < 400) {
        options.success(request.response);
      } else {
        options.error(request.response);
      }
    };

    request.onerror = function() {
      options.error(request.response);
    };

    request.send(options.data);
  },

  getScript: function(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  }
};

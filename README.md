EssCinema
=========

This repo tries to serve as a guide to how you can organize an application using [essential.js](https://github.com/roperzh/essential.js)
behaviors are under `app/scripts/behaviors`, but here is a reference:

- [`search-form`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/search_form.js) behavior
  emits a custom event everytime the text changes, the form at the top have this behavior attached.
  
- [`results-binding`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/results_binding.js) behavior
  listen to the events emmited by `search-form` & `movie-searcher` and updates this contents according to it, giving a sort of real-time
  text binding.
  
- [`movie-searcher`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/movie_searcher.js) behavior
  listen to changes in `search-form` & `end-reached-checker` and performs a search based on the user's input.
  
- [`facebook-share`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/facebook_share.js) behavior
  allows to share an URL using facebook's SDK.
  
- [`twitter-share`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/twitter_share.js) behavior
  allows to tweet an URL.

- [`stars-rating`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/stars_rating.js) behavior
  simulates a classic rating based on stars.
  
- [`end-reached-checker`](https://github.com/roperzh/esscinema/blob/master/app/scripts/behaviors/end_reached_checker.js) behavior
  fires a custom event everytime the end of the page is close to be reached.
  
Dependencies
===========

This project only depends on [doT](https://github.com/olado/doT), a tiny template engine in order to make the code a little more readable.


Contributing
============

Contributions are welcome!, just fork the repo and make a pull request.

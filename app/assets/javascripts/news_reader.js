window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new NewsReader.Routers.FeedRouter({ rootEl: '#content'});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});

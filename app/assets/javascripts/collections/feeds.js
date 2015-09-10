NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function (id) {
    var collection = this;
    var feed = collection.get(id);
    if (feed) {
      feed.fetch();
    } else {
      feed = new collection.model({ id: id });
      collection.add(feed);
      feed.fetch({
        error: function() { collection.remove(feed); }
      });
    }
    return feed;
  }
});

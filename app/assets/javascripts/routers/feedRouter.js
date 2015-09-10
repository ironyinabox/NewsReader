NewsReader.Routers.FeedRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = new NewsReader.Collections.Feeds();
    this.collection.fetch({ reset: true });
    this.$rootEl = $(options.rootEl);
  },

  routes: {
    "": "feedsIndex",
    'feeds/:id': "feedsShow"
  },

  feedsIndex: function(callback) {
    this.indexView =
      new NewsReader.Views.FeedsIndex({ collection: this.collection });
    // this.indexView.collection.fetch({
    //   success: callback,
    //   reset: true
    // });
    this.$rootEl.html(this.indexView.render().$el)
  },

  feedsShow: function(id) {
    // if (this.indexView === undefined) {
    //   this.feedsIndex(this.feedsShow.bind(this, id));
    //   return;
    // }
    var model = this.collection.getOrFetch(id);
    // model.entries().fetch();
    this.showView = new NewsReader.Views.FeedsShow({ model: model });

    this.$rootEl.html(this.showView.render().$el);
  }
});

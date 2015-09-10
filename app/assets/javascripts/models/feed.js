NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",
  url: function () {
    return this.urlRoot + "/" + this.id;
  },

  entries: function(){
    this._entries = this._entries ||
      new NewsReader.Collections.Entries([], { feed: this });

    return this._entries;
  },

  parse: function (res) {
    if (res.latest_entries) {
      this.entries().set(res.latest_entries);
      delete res.latest_entries;
    }
    return res;
  }
});

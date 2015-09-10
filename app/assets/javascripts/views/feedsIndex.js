NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],
  tagName: 'ul',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.collection.forEach(function(model) {
      this.$el.append(
        this.template({ model: model })
      );
    }.bind(this));



    return this;
  }
});

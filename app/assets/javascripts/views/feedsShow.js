NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function(options){
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.model.entries(), 'sync', this.render);
    // this.listenTo(this.model.fetch(), 'sync', this.render);
  },

  render: function() {
    var content = this.template({ model: this.model })
    this.$el.html(content);
    return this;
  }
});

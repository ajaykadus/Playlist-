define(['App', 'backbone', 'marionette', 'views/PlayListsView'],
  function (App, Backbone, Marionette, PlayListView) {
    return Backbone.Marionette.Controller.extend({

      initialize: function (options) {
        this.region = options.region;
        this.playListCollection = options.playlistCollection;
      },

      show: function () {
        var view = new PlayListView({
          collection: this.playListCollection
        });

        //console.log(view.el)
        this.region.show(view.render());
      }

    });
  });

define(['App', 'backbone', 'marionette', 'views/SongsListView'],
  function (App, Backbone, Marionette, SongsListView) {
    return Backbone.Marionette.Controller.extend({

      initialize: function (options) {
        this.region = options.region;
        this.songsListCollection = options.songsListCollection;
      },

      show: function () {
        console.log(this.songsListCollection)
        var view = new SongsListView({
          collection: this.songsListCollection
        });

        //console.log(view.el)
        this.region.show(view.render());
      }

    });
  });

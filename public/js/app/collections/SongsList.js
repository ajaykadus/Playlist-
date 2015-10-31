define(["jquery","backbone","models/Song"],
  function($, Backbone, SongModel) {
    // Creates a new Backbone Collection class object
    var SongsListCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: SongModel
    });

    return SongsListCollection;
  });
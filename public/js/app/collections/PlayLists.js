define(["jquery","backbone","models/PlayList"],
  function($, Backbone, PlayListModel) {
    // Creates a new Backbone Collection class object
    var PlayListCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: PlayListModel
    });

    return PlayListCollection;
  });
define(['App', 'backbone', 'marionette',  'views/HeaderView','controllers/PlayListController', 'fixtures/Fixtures'],
    function (App, Backbone, Marionette, HeaderView,PlayListController, Fixtures) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            new PlayListController({region: App.sideRegion, playlistCollection: Fixtures.PlayListCollection}).show();
        },
        list: function () {
            new PlayListController({region: App.sideRegion, playlistCollection: Fixtures.PlayListCollection}).show();
        }
    });
});
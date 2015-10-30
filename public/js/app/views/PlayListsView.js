define([ 'marionette', 'views/PlayListItemView'],
  function (Marionette, PlayListItemView) {
    //ItemView provides some default rendering logic
    return Marionette.CollectionView.extend({
      itemView: PlayListItemView,
      tagName: 'ul'
    });
  });
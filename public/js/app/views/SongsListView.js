define([ 'marionette', 'views/SongListItemView'],
  function (Marionette, SongListItemView) {
    //ItemView provides some default rendering logic
    return Marionette.CollectionView.extend({
      itemView: SongListItemView,
      tagName: 'ul',
      className: 'list-group'
    });
  });
define(['marionette', 'collections/PlayLists', 'collections/SongsList'],
  function (Marionette, PlayListCollection, SongsList) {
    //ItemView provides some default rendering logic
    var PlayListSongs = {'1001':[{title:'Its my life'}, {title:'Bed of Roses'}],'1002':[{title:'Here I am'},{title:'Best Of Me'}] };
    var getSongs = function (id) {
      return new SongsList(PlayListSongs[id]);
    };
    return {
      PlayListCollection: new PlayListCollection([{id: '1001',title: "Bon Jovi"}, {id: '1002',title: "Brayn Adams"}]),
      SongsCollection: getSongs
    };
  });


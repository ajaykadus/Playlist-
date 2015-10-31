define([ 'marionette', 'handlebars', 'text!templates/songlist-item-view-template.html'],
  function (Marionette, Handlebars, template) {
    //ItemView provides some default rendering logic
    return Marionette.ItemView.extend({
      tagName: 'li',
      template:Handlebars.compile(template),
      className: 'list-group-item'
    });
  });
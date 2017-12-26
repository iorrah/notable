const noteRoutes = require('./note-routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
}

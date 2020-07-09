const db = require("../models");

// User controllers will check for a user session and
// will return empty object if not authenticated

module.exports = {
  // Updates zip code. Must be passed a user id and zip code
  updateZip: (req, res) => {
    !req.user
      ? res.json({})
      : db.User.update(
          { zip: req.body.zip },
          { where: { id: req.body.id } }
        ).then((dbUser) => res.send(dbUser));
  },
  // Returns user data from session.
  getData: (req, res) => {
    !req.user
      ? res.json({})
      : res.json({
          email: req.user.email,
          userId: req.user.id,
          zip: req.user.zip,
        });
  },
};

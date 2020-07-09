const db = require("../models");

module.exports = {
  updateZip: (req, res) => {
    !req.user
      ? res.json({})
      : db.User.update(
          { zip: req.body.zip },
          { where: { id: req.body.id } }
        ).then((dbUser) => res.send(dbUser));
  },

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

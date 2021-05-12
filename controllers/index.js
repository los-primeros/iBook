const User = require("../db/models/user.js") 

exports.add = async (req, res) => {
    try {
      const signed = await User.create(req.body);
      res.send(signed);
    } catch (err) {
      console.error(err);
    }
  };
const User = require("../db/models/user.js") 

exports.add = async (req, res) => {
  console.log(req.body)
    try {
      const signed = await User.create(req.body);
      res.send(signed);
    } catch (err) {
      console.error(err);
    }
  }; 

  exports.getAll = (req, res) => {
  
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.error(err);
      });
  };
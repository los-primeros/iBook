const userlogin = require("../db/models/userlogin.js") 

exports.add = async (req, res) => {
    try {
      const signed = await userlogin.create(req.body);
      res.send(signed);
    } catch (err) {
      console.error(err);
    }
  }; 

  exports.getAll = (req, res) => {
    // your code here
    userlogin.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.error(err);
      });
  };
const Hotel = require("../db/models/hotel.js") 

exports.add = async (req, res) => {
    try {
      const addhotel = await Hotel.create(req.body);
      res.send(addhotel);
    } catch (err) {
      console.error(err);
    }
  }; 

  exports.getbyId = (req, res) => {
    Hotel.findById()
      .then((Hotels) => {
        res.send(Hotels);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  exports.getAll = (req, res) => {
    Hotel.find()
      .then((Hotels) => {
        res.send(Hotels);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  exports.update = async (req, res) => {
    try {
      const updateHotel = await Hotel.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        {
          new: true,
        }
      );
      res.send(updateHotel);
    } catch (err) {
      console.error(err);
    }
  };
  
  
  exports.delete = async (req, res) => {
    try {
      const deleteHotel = await Hotel.findOneAndDelete({ _id: req.params._id });
      res.send(deleteHotel);
    } catch (err) {
      console.error(err);
    }
  };
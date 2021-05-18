// const express = require("express");
// const router = express.Router();
// const use_Controller = require("../use_Controllers.js") ///controller

// router.post('/signup', login_output.signup);
// router.post('/login', login_output.login);


// const Hotel = require("../models/hotel");

// // to add a new hotel 
// // router.post("/", (req, res) => {
// //   console.log(req.body);
// //   let newHotel = new Hotel(req.body);
// //   newHotel.save(() => {
// //     res.send("New hotel ");
// //   });
// // });

// router.get("/data", (req, res) => {
//     Hotel.find({})
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => console.log(err));
// });

// router.get("/data/:id", (req, res) => {
//     Hotel.findById(req.params.id)
//         .then((hotel) => res.send(hotel))
//         .catch((err) => {
//             console.log(err);
//         });
// });



// module.exports = router;
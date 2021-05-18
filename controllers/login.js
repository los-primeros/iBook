const Login = require("../db/models/userLogin.js");


exports.add = async (req, res) => {
    try {
        const logged = await Login.create(req.body);
        res.send(logged);
    } catch (err) {
        console.error(err);
    }
};

exports.getAll = (req, res) => {
    Login.find()
        .then((loggers) => {
            res.send(loggers);
        })
        .catch((err) => {
            console.error(err);
        });
};
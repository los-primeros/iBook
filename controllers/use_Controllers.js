const User = require('db/models/User.js')
const bcrypt = require('bcrypt');

const login_output = {
    singnUp: async (req, res) => {
        try {

            const passwordHash = await bcrypt.hash(password, 10);

            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: passwordHash ,
                password2 : passwordHash
            });
            await newUser.save();


        } catch (err) {
            return res.status(500).json({ res: "err" })
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) return res.status(200).json({ res: "do not exist" });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(200).json({ res: " not correct" });
        } catch (err) {
            return res.status(500).json({ res: "error try again" })
        }
    }

}
module.exports = login_output;


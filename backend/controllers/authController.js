const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = (req, res) => {
  const { name, dob, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (name, dob, email, password) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, dob, email, hashedPassword], (err, result) => {
    if (err) return res.json({ success: false, message: err });

    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "1d" });

    res.json({
      success: true,
      token,
      user: { name, dob, email }
    });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) return res.json({ success: false, message: err });
    if (result.length === 0)
      return res.json({ success: false, message: "User not found" });

    const user = result[0];

    const validPass = bcrypt.compareSync(password, user.password);
    if (!validPass)
      return res.json({ success: false, message: "Invalid password" });

    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: "1d" });

    res.json({
      success: true,
      token,
      user: {
        name: user.name,
        dob: user.dob,
        email: user.email
      }
    });
  });
};

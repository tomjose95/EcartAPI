const jwt = require("jsonwebtoken");

module.exports.createSession = async function (req, res) {
  try {
    const user = {
      username: "Admin",
      password: "12345",
    };

    if (
      user.username != req.body.username ||
      user.password != req.body.password
    ) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }
    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(user, "ecart", { expiresIn: "100000" }),
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

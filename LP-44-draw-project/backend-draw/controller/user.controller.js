const Users = require("../models/users");
const { generateHashedPass, comparePassword } = require("../utility/helper");

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const { username, email, password } = body;

    const hashPassword = await generateHashedPass(password);

    const createUser = new Users({
      username,
      email,
      password: hashPassword,
    });

    await createUser.save();

    const token = jwt.sign(
      {
        email: userDetails.email,
      },
      jwtSecret,
      {
        expiresIn: "1d",
      },
    );

    res.cookie("auth", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax", // works on same-site localhost
    });

    res.status(200).json({
      message: "Success",
      data: { userDetails: createUser, token },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userDetails = await Users.findOne({
    email: email,
  }).lean();

  if (!userDetails) {
    return res.status(400).json({
      message: "Invalid email/password",
    });
  }

  const isValid = await comparePassword(password, userDetails.password);

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid email/password",
    });
  }

  delete userDetails.password;

  const token = jwt.sign(
    {
      email: userDetails.email,
    },
    jwtSecret,
    {
      expiresIn: "1d",
    },
  );

  res.cookie("auth", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax", // works on same-site localhost
  });

  res.status(200).json({
    data: { userDetails, token },
  });
};

const validateToken = async (req, res) => {
  const token = req.cookies.auth;
  if (!token) {
    res.status(403).json({
      message: "Unauthorized",
    });
  }

  const decoded = jwt.verify(token, jwtSecret);
  const { email } = decoded;

  const user = await Users.findOne({
    email,
  }).lean();

  delete user.password;

  res.status(200).json({
    data: { userDetails: user },
  });
};

const logoutUser = (req, res) => {
  res.clearCookie("auth");

  res.status(200).json({
    message: "logged out",
  });
};

module.exports = {
  createUser,
  loginUser,
  validateToken,
  logoutUser,
};

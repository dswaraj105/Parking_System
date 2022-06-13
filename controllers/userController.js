const User = require('../models/user');


exports.createUser = async (req, res, next) => {
  console.log("Creating a user", req.body);

  const user = await User.create(req.body);

  res.json(user);
};

exports.getUser = async (req, res, next) => {
  console.log("Getting users");

  const users = await User.find({});

  res.json(users);
}
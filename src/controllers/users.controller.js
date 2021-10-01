const User = require("../models/User");
const Post = require("../models/Post");
const base = require("./base.controller");

exports.deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      active: false,
    });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserPosts = async (req, res, next) => {
  try {
    const fullPost = await Post.find().populate("userId");
    const postByUser = fullPost.filter(
      (item) => item.userId.id === req.params.id
    );

    res.status(200).json({
      status: "success",
      data: postByUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = base.getAll(User);
exports.getUser = base.getOne(User);

exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User);
exports.deleteUser = base.deleteOne(User);

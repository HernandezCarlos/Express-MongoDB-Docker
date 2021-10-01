const Post = require('../models/Post');
const base = require('./base.controller');

exports.getAllPosts = base.getAll(Post);
exports.getPost = base.getOne(Post);

exports.createPost = base.createOne(Post);
exports.updatePost = base.updateOne(Post);
exports.deletePost = base.deleteOne(Post);
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.route("/").get(postsController.getAllPosts);
router.route("/").post(postsController.createPost);
router
  .route("/:id")
  .get(postsController.getPost)
  .patch(postsController.updatePost)
  .delete(postsController.deletePost);

module.exports = router;

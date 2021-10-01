const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.route("/").get(usersController.getAllUsers);
router.route("/:id/posts").get(usersController.getUserPosts);
router.route("/").post(usersController.createUser);
router
  .route("/:id")
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;

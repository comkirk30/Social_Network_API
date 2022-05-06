const router = require("express").Router();

const {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  getAllusers,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").get().post();

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

router.route("/").get(getAllusers).post(createUser);

module.exports = router;

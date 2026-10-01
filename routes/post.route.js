const express = require("express");
const router = express.Router();
const  { createPost , getPosts, updatePost, deletePost} = require("../controllers/post.controller");



router.route("/create").post(createPost);
router.route("/getPosts").post(getPosts);
router.route("/update").patch(updatePost);
router.route("/delete").patch(deletePost);


module.exports= router;
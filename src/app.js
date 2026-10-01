const  userRouter = require("../routes/user.route");
const postRouter = require("../routes/post.route");
const express = require("express");

const app = express();

app.use(express.json());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/posts",postRouter);

//  http:localhost:4000/api/v1/users/register
module.exports = app;

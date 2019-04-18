const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");

const User = users.model;

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    title: String,
    content: String,
    created: {
        type: Date,
        default: Date.now
    },
});

const Post = mongoose.model('Post', postSchema);

// create post
router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    // check parameters
    if (!req.body.title)
        return res.status(400).send({
            message: "Posts must have titles."
        });

    const post = new Post({
        user: req.user,
        title: req.body.title,
        content: req.body.content,
    });
    try {
        await post.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get my posts
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
    // return posts
    try {
        let posts = await Post.find({
            user: req.user
        }).sort({
            created: -1
        });
        return res.send(posts);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get all posts
router.get("/all", async (req, res) => {
    try {
        let posts = await Post.find().sort({
            created: -1
        }).populate('user');
        return res.send(posts);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    model: Post,
    routes: router,
}

const express = require('express'),
bodyParser = require('body-parser'),
postRouter = express.Router();

const Posts = require('../models/posts');
postRouter.use(bodyParser.json());

var authenticate = require('../auth');

postRouter.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
    Posts.find(req.query)
    .then((posts) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(posts);
    }, (err) => next(err))
    .catch((err)=>next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    Posts.create(req.body)
    .then((post) => {
        console.log('Post Added', post);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
});

postRouter.route('/:postId')
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.findById(req.params.postId)
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
    Posts.findByIdAndUpdate(req.params.postId, {
        $set: req.body
    }, { new: true })
    .then((post) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(post);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    Posts.findByIdAndRemove(req.params.postId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = postRouter;

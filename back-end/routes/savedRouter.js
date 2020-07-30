const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../auth');
const SavedPosts = require('../models/savedPosts');

const savedPostRouter = express.Router();

savedPostRouter.use(bodyParser.json());

savedPostRouter.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
    SavedPosts.find({})
        .populate('user')
        .populate('posts')
        .then((savedPosts) => {
            // extract savedPosts that match the req.user.id
            if (savedPosts) {
                user_favorites = savedPosts.filter(fav => fav.user._id.toString() === req.user.id.toString())[0];
                if(!user_favorites) {
                    var err = new Error('You have no savedPosts!');
                    err.status = 404;
                    return next(err);
                }
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(user_favorites);
            } else {
                var err = new Error('There are no savedPosts');
                err.status = 404;
                return next(err);
            }
            
        }, (err) => next(err))
        .catch((err) => next(err));
});

savedPostRouter.route('/:postId')
.post(authenticate.verifyUser, (req, res, next) => {
        SavedPosts.find({})
            .populate('user')
            .populate('posts')
            .then((savedPosts) => {
                var user;
                if(savedPosts)
                    user = savedPosts.filter(fav => fav.user._id.toString() === req.user.id.toString())[0];
                if(!user) 
                    user = new SavedPosts({user: req.user.id});
                if(!user.posts.find((p_id) => {
                    if(p_id._id)
                        return p_id._id.toString() === req.params.postId.toString();
                }))
                    user.posts.push(req.params.postId);
                
                user.save()
                    .then((userFavs) => {
                        res.statusCode = 201;
                        res.setHeader("Content-Type", "application/json");
                        res.json(userFavs);
                        console.log("SavedPosts Created");
                    }, (err) => next(err))
                    .catch((err) => next(err));

            })
            .catch((err) => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    SavedPosts.find({})
        .populate('user')
        .populate('posts')
        .then((savedPosts) => {
            var user;
            if(savedPosts)
                user = savedPosts.filter(fav => fav.user._id.toString() === req.user.id.toString())[0];
            if(user){
                user.posts = user.posts.filter((postid) => postid._id.toString() !== req.params.postId);
                user.save()
                    .then((result) => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.json(result);
                    }, (err) => next(err));
                
            } else {
                var err = new Error('You do not have any savedPosts');
                err.status = 404;
                return next(err);
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = savedPostRouter;

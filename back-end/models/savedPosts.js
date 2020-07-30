const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedPostSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        posts: 
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]
    }
);

var SavedPosts = mongoose.model('SavedPosts', SavedPostSchema);

module.exports = SavedPosts;

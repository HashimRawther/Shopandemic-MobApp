const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: '',
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: false
    },
    contents: {
        type: String,
        default: ''
    }
});

var Posts = mongoose.model('Post', postSchema);

module.exports = Posts;
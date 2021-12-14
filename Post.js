import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    text: { type: String, required: true },
});

export default mongoose.model('Post', Post)
import mongoose from 'mongoose';

const Video = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    tag: String,
    videoURL: String,
    uploadedBy: String,
    contactEmail: String
});

export default mongoose.model('Video', Video);
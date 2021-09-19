import mongoose from 'mongoose';

const imgSchema = mongoose.Schema({
    label: String,
    url: String,
}, {collection: 'images'});

const Image = mongoose.model('Image', imgSchema);

export default Image;
import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

var Note = mongoose.model('User',NotesSchema);

module.exports = Note;

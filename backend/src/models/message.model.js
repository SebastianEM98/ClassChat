import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    senderId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    classroomId: {
        type: mongoose.Schema.ObjectId,
        ref: "Classroom",
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
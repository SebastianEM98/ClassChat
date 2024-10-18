import mongoose from 'mongoose'

const classroomSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    videoUrl: {
        type: String,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    creatorId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: "ESTUDIANTE",
        enum: {
            values: ["ESTUDIANTE", "MODERADOR", "ADMINISTRADOR"],
            message: "Rol no valido"
        }
    }
});

const User = mongoose.model("User", userSchema);

export default User;
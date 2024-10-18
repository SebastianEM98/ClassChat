import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'



const singUp = async (req, res) => {

    try {
        const { name, username, role, password, confirmPassword } = req.body;

        if (!name || !username || !password || !confirmPassword) {
            return res.status(400).send({
                status: "error",
                message: "Faltan datos por diligenciar"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).send({
                status: "error",
                message: "Las contraseñas no coinciden"
            });
        }

        var validRole = role;

        if (role !== "ESTUDIANTE" && role !== "MODERADOR" && role !== "ADMINISTRADOR") {

            if (role === null || role.trim() === "") {
                validRole = "ESTUDIANTE";
            } else {
                return res.status(400).send({
                    status: "error",
                    message: "Rol no valido"
                });
            }
        }

        // Check existing user
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).send({
                status: "error",
                message: "El usuario ingresado ya se encuentra registrado"
            });
        }

        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            username: username.toLowerCase(),
            role: validRole,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).send({
            status: "success",
            message: "Usuario registrado con éxito",
            user: {
                name,
                username: newUser.username,
                role: validRole
            }
        });

    } catch (error) {
        console.log("Error in SignUp controller: " + error.message);

        return res.status(500).send({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}

const singIn = async (req, res) => {

    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({
                status: "error",
                message: "Faltan datos por diligenciar"
            });
        }

        const user = await User.findOne({ username: username.toLowerCase() });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).send({
                status: "error",
                message: "El usuario o la contraseña son incorrectos"
            });
        }

        // Token Creation
        const token = generateToken(user._id);

        return res.status(200).send({
            status: "success",
            message: "Inicio de sesión correcto",
            token,
            user: {
                _id: user._id,
                name: user.name,
                username: user.username,
                role: user.role
            }
        });

    } catch (error) {
        console.log("Error in SignIn controller: " + error.message);

        res.status(500).send({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}

export default {
    singUp,
    singIn,
}
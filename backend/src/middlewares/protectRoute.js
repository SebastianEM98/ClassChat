import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRoute = async (req, res, next) => {

    const headerToken = req.headers.authorization;

    if (!headerToken || !headerToken.startsWith("Bearer ")) {
        return res.status(401).send({
            status: "error",
            message: "Acceso denegado"
        });
    }

    // Get token only by removing 'Bearer '
    const bearerToken = headerToken.slice(7);

    try {
        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).send({
                status: "error",
                message: "Token invalido"
            });
        }

        const user = await User.findById(decoded.userId).select("-password -__v");

        if (!user) {
            return res.status(404).send({
                status: "error",
                message: "Usuario no encontrado"
            });
        }

        req.user = user;

        next();

    } catch (error) {

        if (error.message === "jwt expired") {
            return res.status(401).send({
                status: "error",
                message: "La sesón ha expirado"
            });

        } else if (error.message === "invalid signature" || error.message === "invalid token") {
            return res.status(401).send({
                status: "error",
                message: "Token invalido"
            });

        } else {
            console.log("Error in protectRoute middleware: " + error.message);

            return res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}

export default protectRoute;
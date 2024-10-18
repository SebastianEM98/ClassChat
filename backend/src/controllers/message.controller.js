import Message from '../models/message.model.js'
import Classroom from '../models/classroom.model.js'

const saveMessage = async (req, res) => {

    try {
        const { content, classroomId } = req.body;

        if (!content || !classroomId) {
            return res.status(400).send({
                status: "error",
                message: "Faltan datos por diligenciar"
            });
        }

        const classroom = await Classroom.findById(classroomId);

        if (!classroom) {
            return res.status(404).send({
                status: "error",
                message: "Clase no encontrada"
            });
        }

        const newMessage = new Message({
            content,
            senderId: req.user._id,
            classroomId: classroom._id
        });

        await newMessage.save();

        return res.status(201).send({
            status: "success",
            message: "Mensaje almacenado con éxito",
            savedMessage: newMessage
        });

    } catch (error) {
        console.log("Error in saveMessage Controller: " + error.message);

        res.status(500).json({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}


const getMessagesByClassroom = async (req, res) => {

    const classroomId = req.params.id;

    try {

        const classroom = await Classroom.findById(classroomId).select("-__v");

        if (!classroom) {
            return res.status(404).send({
                status: "error",
                message: "Clase no encontrada"
            });
        }

        const messagesByClasrrom = await Message.find({ classroomId: classroom._id })
            .select("-__v")
            .populate("senderId", "name username type")
            .sort({ created_at: 1 });


        return res.status(200).send({
            status: "success",
            message: "Mensajes por clase especifica",
            classroomMessages: messagesByClasrrom
        });

    } catch (error) {

        if (classroomId.length !== 24) {
            return res.status(404).send({
                status: "error",
                message: "Clase no encontrada - Id invalido"
            });
        } else {
            console.log("Error in getMessagesByClassroom Controller: " + error.message);

            return res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}


export default {
    saveMessage,
    getMessagesByClassroom
}
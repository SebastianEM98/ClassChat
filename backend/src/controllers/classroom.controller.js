import Classroom from '../models/classroom.model.js'

const create = async (req, res) => {

    try {
        const { title, videoUrl, isActive, creatorId } = req.body;

        if (!title || !videoUrl || !isActive || !creatorId) {
            return res.status(400).send({
                status: "error",
                message: "Faltan datos por diligenciar"
            });
        }

        // Only YouTube URL videos
        if (!videoUrl.startsWith("https://www.youtube.com/watch?v=")) {
            return res.status(400).send({
                status: "error",
                message: "URL no valida"
            });
        }

        // Convert to Embed Youtube URL
        const videoEmbedUrl = videoUrl.replace("watch?v=", "embed/");

        // Check existing classroom
        const existingClassroom = await Classroom.findOne({ videoUrl: videoEmbedUrl });

        if (existingClassroom) {
            return res.status(400).send({
                status: "error",
                message: "La URL del video ya se encuentra registrada"
            });
        }

        const newClassroom = new Classroom({
            title,
            videoUrl: videoEmbedUrl,
            isActive,
            creatorId
        });

        await newClassroom.save();

        return res.status(201).send({
            status: "success",
            message: "Clase creada correctamente",
            classroom: newClassroom
        });

    } catch (error) {
        console.log("Error in Create Classroom controller: " + error.message);

        return res.status(500).send({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}


const getAll = async (req, res) => {

    try {
        const classrooms = await Classroom.find().select("-__v");

        if (!classrooms) {
            return res.status(404).send({
                status: "error",
                message: "No hay clases por mostrar"
            });
        }

        return res.status(200).send({
            status: "success",
            classrooms
        });

    } catch (error) {
        console.log("Error in getAll Classrooms controller: " + error.message);

        return res.status(500).send({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}

const getClassroomById = async (req, res) => {

    const classroomId = req.params.id;

    try {

        const classroom = await Classroom.findById(classroomId).select("-__v");

        if (!classroom) {
            return res.status(404).send({
                status: "error",
                message: "Clase no encontrada"
            });
        }

        return res.status(200).send({
            status: "success",
            classroom
        });

    } catch (error) {
        sendResponseError(res, classroomId, error.message, "getClassroomById");
    }
}

const updateClassroom = async (req, res) => {

    const classroomId = req.params.id;

    try {

        const { title, videoUrl, isActive } = req.body;

        if (!title || !videoUrl || !isActive) {
            return res.status(400).send({
                status: "error",
                message: "Faltan datos por diligenciar"
            });
        }

        // Only YouTube URL videos
        if (!videoUrl.startsWith("https://www.youtube.com/watch?v=") && !videoUrl.startsWith("https://www.youtube.com/embed")) {
            return res.status(400).send({
                status: "error",
                message: "URL no valida"
            });
        }

        // Convert to Embed Youtube URL
        const videoEmbedUrl = videoUrl.replace("watch?v=", "embed/");

        // Check existing classroom
        const existingClassroom = await Classroom.findOne({ videoUrl: videoEmbedUrl, _id: { "$ne": classroomId } });

        if (existingClassroom) {
            return res.status(400).send({
                status: "error",
                message: "La URL del video ya se encuentra registrada"
            });
        }

        var clasroomToUpdate = {
            title,
            videoUrl: videoEmbedUrl,
            isActive
        }

        const updatedClassroom = await Classroom.findByIdAndUpdate(classroomId, clasroomToUpdate, { new: true }).select("-__v");

        if (!updatedClassroom) {
            return res.status(404).send({
                status: "error",
                message: "La clase a modificar no existe"
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Clase actualizada con éxito",
            classroom: updatedClassroom
        });

    } catch (error) {
        sendResponseError(res, classroomId, error.message, "updateClassroom");
    }
}

const removeById = async (req, res) => {

    const classroomId = req.params.id;

    try {

        const classroom = await Classroom.findByIdAndDelete(classroomId);

        if (!classroom) {
            return res.status(404).send({
                status: "error",
                message: "Clase no encontrada"
            });
        }

        return res.status(200).send({
            status: "success",
            message: "Clase eliminada con éxito",
            classroom
        });

    } catch (error) {
        sendResponseError(res, classroomId, error.message, "removeById");
    }
}


const sendResponseError = (res, classroomId, errorMessage, methodName) => {

    if (classroomId.length !== 24) {
        return res.status(404).send({
            status: "error",
            message: "Clase no encontrada - Id invalido"
        });
    } else {
        console.log(`Error in ${methodName} Classroom controller: ${errorMessage}`);

        return res.status(500).send({
            status: "error",
            message: "Error interno del servidor"
        });
    }
}


export default {
    create,
    getAll,
    getClassroomById,
    updateClassroom,
    removeById
}
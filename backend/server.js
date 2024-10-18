import express from 'express'
import dotenv from 'dotenv'

import connectToMongoDB from './src/db/connectToMongoDB.js'

// Import Routes
import AuthRoutes from './src/routes/auth.routes.js'
import ClassroomRoutes from './src/routes/classroom.routes.js'
import MessageRoutes from './src/routes/message.routes.js'


// dotenv config
dotenv.config();

var app = express();
const PORT = process.env.PORT || 3000;

// CORS Config


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes Setup
app.use("/api/auth", AuthRoutes);
app.use("/api/classrooms", ClassroomRoutes);
app.use("/api/messages", MessageRoutes);


// Server creation and http request listening
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`########## Server running on port ${PORT} ##########`);
})
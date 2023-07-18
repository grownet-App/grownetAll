// backend/index.js



require("dotenv").config();
require("./db")

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { required } = require("joi");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const { DB_HOST, DB_APP } = process.env;

const MONGODB_URL = `mongodb://${DB_HOST}/${DB_APP}`;

console.log(MONGODB_URL);
// Conexión a la base de datos MongoDB
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
    console.log('Conexión a la base de datos establecida correctamente');
});

mongoose.connection.on('error', (err) => {
    console.error('Error al conectar a la base de datos:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de la base de datos');
});


const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Ruta de registro de usuario
app.post('/register', async (req, res) => {

    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ firstName, lastName, email, password: hashedPassword });
        console.log(user);
        await user.save();

        res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrió un error al registrar el usuario' });
    }
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend en funcionamiento en http://localhost:${port}`);
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new Error('Contraseña incorrecta');
        }

        const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

/* ________________________________________________________________________________ */

/* app.listen(app.get('port'), () =>{
    console.log("puerto", app.get('port'));
}) */
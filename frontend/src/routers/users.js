const router = require('express').Router();
const bcrypt = require('bcrypt')
const { User, validate } = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const { error } = validate.req.body;
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(409).send({ message: "El usuario registrado con este correo ya existe" })
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));

        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        await new User({...req.body, password: hashedPassword}).save();
        res.status(201).send({message: "Usuario creado con éxito"})
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al registrar el usuario' });
    }
});
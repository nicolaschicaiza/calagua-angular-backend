const Alerta = require("../models/Alerta")

exports.crearAlerta = async (req, res) => {
    try {
        let alerta;

        // Creamos nuestra alerta 
        alerta = new Alerta(req.body); 

        await alerta.save();
        res.send(alerta);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerAlertas = async (req, res) => {
    try {
        const alertas = await Alerta.find();
        res.json(alertas);
    } catch (error) {
        console.log(error);
        res.status(500).sed('Hubo un error');
    }
}

exports.actualizarAlerta = async (req, res) => {
    try {
        const { name, station, sensor, umbral, validation, observation } = req.body;

        let alerta = await Alerta.findById(req.params.id);

        if(!alerta) {
            res.status(404).json({ msg: 'No existe la alerta' });
        }

        alerta.name = name;
        alerta.station = station;
        alerta.sensor = sensor;
        alerta.umbral = umbral;
        alerta.validation = validation;
        alerta.observation = observation;

        alerta = await Alerta.findOneAndUpdate({ _id: req.params.id },alerta, { new: true} );
        res.json(alerta);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerAlerta = async (req, res) => {
    try {
        let alerta = await Alerta.findById(req.params.id);

        if(!alerta) {
            res.status(400).json({ msg: "No existe la alerta" });
        }

        res.json(alerta);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarAlerta = async (req, res) => {
    try {
        let alerta = await Alerta.findById(req.params.id);

        if(!alerta) {
            res.status(400).json({ msg: "No existe la alerta" });
        }

        await Alerta.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Alerta eliminada con exito" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

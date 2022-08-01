const Estacion = require("../models/Estacion")

exports.crearEstacion = async (req, res) => {
    try {
        let estacion;

        // Creamos nuestra estación
        estacion = new Estacion(req.body); 

        await estacion.save();
        res.send(estacion);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerEstaciones = async (req, res) => {
    try {
        const estaciones = await Estacion.find();
        res.json(estaciones);
    } catch (error) {
        console.log(error);
        res.status(500).sed('Hubo un error');
    }
}

exports.actualizarEstacion = async (req, res) => {
    try {
        const { name, location, status } = req.body;

        let estacion = await Estacion.findById(req.params.id);

        if(!estacion) {
            res.status(404).json({ msg: 'No existe la estación' });
        }

        estacion.name = name;
        estacion.location = location;
        estacion.status = status;

        estacion = await Estacion.findOneAndUpdate({ _id: req.params.id },estacion, { new: true} );
        res.json(estacion);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerEstacion = async (req, res) => {
    try {
        let estacion = await Estacion.findById(req.params.id);

        if(!estacion) {
            res.status(400).json({ msg: "No existe la estación" });
        }

        res.json(estacion);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarEstacion = async (req, res) => {
    try {
        let estacion = await Estacion.findById(req.params.id);

        if(!estacion) {
            res.status(400).json({ msg: "No existe la estación" });
        }

        await Estacion.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Estación eliminada con exito" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

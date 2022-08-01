const Sensor = require("../models/Sensor");

exports.crearSensor = async (req, res) => {
    try {
        let sensor;

        // Creamos nuestro sensor
        sensor = new Sensor(req.body); 

        await sensor.save();
        res.send(sensor);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerEstacionSensores = async (req, res) => {
    try {
        let idStation = req.params.id;
        let sensor = await Sensor.find({ station: idStation});

        if(!sensor) {
            res.status(400).json({ msg: "No existe el sensor" });
        }

        res.json(sensor);

    } catch (error) {
        console.log(error);
        res.status(500).sed('Hubo un error');
    }
}

exports.obtenerVariableValores = async (req, res) => {
    try {
        let variable = req.params.id;
        let sensor;
        if(variable == "CONDUCTIVITY") {
            sensor = await Sensor.find({ CONDUCTIVITY: {$exists:true}},{station:1,CONDUCTIVITY:1});
        }
        if(variable == "PH") {
            console.log("Aqui")
            sensor = await Sensor.find({ PH: {'$exists':true}},{station:1,PH:1});
        }
        if(variable == "TEMPERATURE") {
            sensor = await Sensor.find({ TEMPERATURE: {$exists:true}},{station:1,TEMPERATURE:1});
        }
        if(variable == "TSS") {
            sensor = await Sensor.find({ TSS: {$exists:true}},{station:1,TSS:1});
        }


        if(!sensor) {
            res.status(400).json({ msg: "No existe el sensor" });
        }

        res.json(sensor);

    } catch (error) {
        console.log(error);
        res.status(500).sed('Hubo un error');
    }
}

exports.obtenerSensores = async (req, res) => {
    try {
        const sensores = await Sensor.find();
        res.json(sensores);
    } catch (error) {
        console.log(error);
        res.status(500).sed('Hubo un error');
    }
}

exports.actualizarSensor = async (req, res) => {
    try {
        const { name, location, status } = req.body;

        let sensor = await Sensor.findById(req.params.id);

        if(!sensor) {
            res.status(404).json({ msg: 'No existe el sensor' });
        }

        sensor.name = name;
        sensor.location = location;
        sensor.status = status;

        sensor = await Sensor.findOneAndUpdate({ _id: req.params.id },sensor, { new: true} );
        res.json(sensor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerSensor = async (req, res) => {
    try {
        let sensor = await Sensor.findById(req.params.id);

        if(!sensor) {
            res.status(400).json({ msg: "No existe el sensor" });
        }

        res.json(sensor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarSensor = async (req, res) => {
    try {
        let sensor = await Sensor.findById(req.params.id);

        if(!sensor) {
            res.status(400).json({ msg: "No existe el sensor" });
        }

        await Sensor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Sensor eliminada con exito" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

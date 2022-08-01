// Rutas para sensor 
const express = require('express');
const router = express.Router();
const sensorController = require("../controllers/sensorController");

// api/sensor
router.post('/', sensorController.crearSensor); 
router.get('/', sensorController.obtenerSensores); 
router.put('/:id', sensorController.actualizarSensor); 
router.get('/:id', sensorController.obtenerSensor); 
router.delete('/:id', sensorController.eliminarSensor); 
router.get('/station/:id', sensorController.obtenerEstacionSensores); 
router.get('/variable/:id', sensorController.obtenerVariableValores); 

module.exports = router;

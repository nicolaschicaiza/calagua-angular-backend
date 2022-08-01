const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path:'./variables.env' });

const conectarDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO);
        console.log("DB Conectada");
    } catch (error) {
        console.log(error);
        process.exit(1); //Detenemos la app
    } 

}


module.exports = conectarDB;

const { default: mongoose } = require("mongoose");

const conexion = async()=>{ //importaciones ES5
try {
    await mongoose.connect("mongodb+srv://AlanAtenco:AlanAB2502@cluster0.knk4zhr.mongodb.net/agenda");//aqui ingresamos nuestro usuario y contraseña
    console.log("se conecto a mongodb atlas");
    
} catch (error) {
    console.log(error);
    throw new Error("Error al conectarse a mongodb atlas");
    
}
}

module.exports = conexion;      //exportacion en ES5
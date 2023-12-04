const conexion = require("./database/config");
const express = require('express');
const {obtenerContactos, crearContacto, actualizarContacto, eliminarContactos} = require("./controllers/contacto");
const app = express();

conexion();
app.use(express.json());

app.get("/",obtenerContactos)
app.put("/:id",actualizarContacto)
app.post("/",crearContacto) 
app.delete("/:id",eliminarContactos)


app.listen(3001, () => {
    console.log('servidor corriendo en puerto 3001');
});
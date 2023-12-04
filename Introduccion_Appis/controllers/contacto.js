const Contacto = require('../models/Contacto');

const obtenerContactos= async(req,res)=>{
    const contactos = await Contacto.find({});

    res.json({
        msg:"contactos obtenidos con exito",
        contactos: contactos
    })
}

const crearContacto=async(req,res)=>{
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.json('contacto guardado');
}

const actualizarContacto=async(req,res)=>{
    const contactoId= req.params.id;

    await Contacto.findByIdAndDelete(contactoId,req.body);
    res.json({
        msg: "contacto actualizadpo con exito"
    })
}

const eliminarContactos=async(req,res)=>{
    const contactoId= req.params.id;
    
    await Contacto.findByIdAndDelete(contactoId,req.body);
    res.json({
        msg: "contacto eliminado con exito"
    })
}

module.exports= {
    obtenerContactos,
    crearContacto,
    actualizarContacto,
    eliminarContactos
}

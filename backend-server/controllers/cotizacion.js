
const { response } = require ('express');

const Cotizacion = require('../models/cotizacion');


const getCotizacion = async (req,res) => {

  const cotizacion = await Cotizacion.find();
  res.json(
    {
      ok:true,
      cotizacion
    }
  )
}

const postCotizacion = async (req,res = response) => {
  console.log(req.body);
  const {nombre,email,celular,departamento,municipio,modelos}= req.body;
  try {
      const cotizacion = new Cotizacion(req.body);
      await cotizacion.save();
      res.json(
        {
          cotizacion
        }
      )
  } catch (error) {
    res.status(500).json({
      ok:false,
      mensaje:"Error inesperado... revisar log"
    })
  }

}
module.exports={
  getCotizacion,
  postCotizacion
}

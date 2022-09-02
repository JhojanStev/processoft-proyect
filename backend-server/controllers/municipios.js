
const { response } = require ('express');

const Municipio = require('../models/municipio');


const getMunicipio = async (req,res) => {

  const municipio = await Municipio.find();
  res.json(
    {
      ok:true,
      municipio
    }
  )
}

const postMunicipio = async (req,res = response) => {
  console.log(req.body);
  const {nombreModelo}= req.body;
  try {
      const municipio = new Municipio(req.body);
      await municipio.save();
      res.json(
        {
          municipio
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
  getMunicipio,
  postMunicipio
}


// {
//   "nombre":"Jhojan Cordoba",
//   "email":"stevsjhos@gmail.com",
//   "celular":3163165514,
//   "municipio":"Cali",
//   "departamento":"Cali - Valle",
//   "modelos":"Ssanyong"
// }

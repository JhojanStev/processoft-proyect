
const { response } = require ('express');

const Modelo = require('../models/modelos');


const getModelo = async (req,res) => {

  const modelo = await Modelo.find();
  res.json(
    {
      ok:true,
      modelo
    }
  )
}

const postModelo = async (req,res = response) => {
  console.log(req.body);
  const {nombreModelo}= req.body;
  try {
      const modelo = new Modelo(req.body);
      await modelo.save();
      res.json(
        {
          modelo
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
  getModelo,
  postModelo
}


// {
//   "nombre":"Jhojan Cordoba",
//   "email":"stevsjhos@gmail.com",
//   "celular":3163165514,
//   "municipio":"Cali",
//   "departamento":"Cali - Valle",
//   "modelos":"Ssanyong"
// }

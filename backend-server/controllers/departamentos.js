
const { response } = require ('express');

const Departamento = require('../models/departamento');


const getDepartamento = async (req,res) => {

  const departamento = await Departamento.find();
  res.json(
    {
      ok:true,
      departamento
    }
  )
}

const postDepartamento = async (req,res = response) => {
  console.log(req.body);
  const {nombreDepartamento}= req.body;
  try {
      const departamento = new Departamento(req.body);
      await departamento.save();
      res.json(
        {
          departamento
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
  getDepartamento,
  postDepartamento
}

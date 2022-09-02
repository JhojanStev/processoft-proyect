
const nodeMailer = require ('nodemailer')
const { response } = require ('express');


const postEmail = async (req,res = response) => {
  console.log(req.body);

  let body = req.body;

  let config = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    post:465,
    secure:true,
    auth:{
      user:'stevsjhos534@gmail.com',
      pass:'tddtvomjubisydff'
    }
  });

  var maillist = [
    'stevsjhos534@gmail.com',
    'jesithcordoba@gmail.com',
    'paolabucheli09@gmail.com',
    'stevsjhos@gmail.com',
  ];

  // var maillist = [
  //   'jaguilar@processoft.com.co',
  //   'jcastro@processoft.com.co',
  //   'mahernandez@processoft.com.co',
  //   'stevsjhos@gmail.com',
  // ];
  maillist.toString();
    const opciones = {
    from: 'Processoft',
    subject: body.asunto,
    to: maillist,
    html:`
    <div style="width:400px; height:600px; box-shadow: 5px 1px 5px #222; text-align: center; padding: 20px; background-color: #333; border: 1px solid #000; border-radius: 30px;">
      <h2 style="color:#fff;"> Cotización vehiculos del cliente: </h2>
      <h2 style="color:#fff;">Nombre:</h2><h3 style="color:#fff;">   ${body.mensaje.nombre} </h3>
      <h2 style="color:#fff;">Correo:</h2><h3 style="color:#fff;">   ${body.mensaje.correo} </h3>
      <h2 style="color:#fff;">Celular:</h2><h3 style="color:#fff;"> ${body.mensaje.celular} </h3>
      <h2 style="color:#fff;">Municipio:</h2><h3 style="color:#fff;"> ${body.mensaje.municipio} </h3>
      <h2 style="color:#fff;">Departamento:</h2><h3 style="color:#fff;">  ${body.mensaje.departamento} </h3>
      <h2 style="color:#fff;">Modelo de vehiculo:</h2><h3 style="color:#fff;">  ${body.mensaje.modelos} </h3>
    </div>
    `, // html body
  }
  config.sendMail(opciones,function(error,result){
    if(error) return res.json({ok:false,msg:error})
    return res.json({
      msg:result
    })
  });

}


module.exports={
  // getEmail,
  postEmail
}


// {
//   "nombre":"Jhojan Cordoba",
//   "email":"stevsjhos@gmail.com",
//   "celular":3163165514,
//   "municipio":"Cali",
//   "departamento":"Cali - Valle",
//   "modelos":"Ssanyong"
// }

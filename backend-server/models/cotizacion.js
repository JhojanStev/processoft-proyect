const {Schema, model} = require('mongoose');

const CotizacionSchema = Schema ({
  nombre:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  celular:{
    type:String,
    required:true,
  },
  municipio:{
    type:String,
    required:true,
  },
  departamento:{
    type:String,
    required:true,
  },
  modelos:{
    type:String,
    required:true,
  }

});

CotizacionSchema.method('toJSON',function(){
  const { __v, _id, ...object} = this.toObject();
  object.uid = _id;
  return object
})

module.exports = model('Cotizacion', CotizacionSchema);

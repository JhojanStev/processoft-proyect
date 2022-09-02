const {Schema, model} = require('mongoose');

const ModeloSchema = Schema ({
  nombreModelo:{
    type:String,
    required:true,
  }

});
ModeloSchema.method('toJSON',function(){
  const { __v, _id, ...object} = this.toObject();
  object.uid = _id;
  return object
})
module.exports = model('Modelo', ModeloSchema);

const {Schema, model} = require('mongoose');

const MunicipioSchema = Schema ({
  nombreMunicipio:{
    type:String,
    required:true,
  },

});
MunicipioSchema.method('toJSON',function(){
  const { __v, _id, ...object} = this.toObject();
  object.uid = _id;
  return object
})
module.exports = model('Municipio', MunicipioSchema);

import api from '@framework/api'

export default async function provincia(req, res) {
  const { ubigeo, id } = req.query;
  if ( ubigeo == 'provincia'){
    const data = await api.getProvinces(id)
    res.status(200).json(data)
  }else if(ubigeo == 'distrito'){
    const { id2 } = req.query;
    const data = await api.getDistricts(id, id2)
    res.status(200).json(data)
  }else{
    res.status(200).json({status:false,data:null})
  }
}
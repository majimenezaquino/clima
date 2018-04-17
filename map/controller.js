const  axios=require("axios");

const getLocation= async (descripcion)=>{
    descripcion=encodeURI(descripcion)
      
    let conexion = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${descripcion}&key=AIzaSyB8vV2WtJ8XfOtsH1oVI8-yZhCm1E5s6Wc`);
    let comando =conexion.data.results[0];
    let coords = comando.geometry.location;
    if(conexion.status==='ZERO_RESULTS'){
         console.log(conexion.reults)
         throw new Error(`${descripcion} No tiene resultado`);
     }


     return {
        direccion: comando.formatted_address,
        lat: coords.lat,
        lng:coords.lng
}}
module.exports={
    getLocation
}
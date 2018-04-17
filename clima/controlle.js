const  axios=require("axios");

const getClima= async (lat,lng)=>{
    descripcion=encodeURI(lat,lng)
    let conexion = await axios
    .get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04d2e546212c3daffc41afa8ce1af639`);

     return conexion;
    }
module.exports={
    getClima
}
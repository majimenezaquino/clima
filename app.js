//obteber controlador de temperatura
const pais =require("./map/controller")
const clima =require("./clima/controlle");
 const color =require("colors");
const yargs=require("yargs").options(
   {
       descripcion:{
           alias: 'd',
           desc: "Esto  el nombre del pais del cual queremos el clima",
           demand:true
       }
   }
).argv;

//console.log(yargs.descripcion)
pais.getLocation(yargs.descripcion).then(function(data){
    console.log(data.lat,data.lng)
    let descripcion =data.direccion;
    clima.getClima(data.lat,data.lng).then(function(data){
        let temperatura =data.data.main;
     console.log(color.green(`La temperatura en ${descripcion} es ${(temperatura.temp_min+temperatura.temp_max)/2} kevin`));
    }).catch(function(err){
        console.log(err)
    })
}).catch(function(err){
    console.log(err)
})
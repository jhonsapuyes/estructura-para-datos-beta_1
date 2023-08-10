

const {Router}= require('express')
const route= Router()

const {lenguajes_get,framewors_get,basedatos_get}= require('../control/leer/leer')

// http://localhost:9000/lenguajes/javascript/nombre_script_1
// http://localhost:9000/basedatos/sql/nombre_script_1
route.get('/:principal/:secundario/:terciario/', async(req,res)=>{
    let principal= req.params.principal
    let secundario= req.params.secundario
    let terciario= req.params.terciario

    let res_peticion
    if(principal == "lenguajes"){
        function search_language(obj,lenguaje,script) {
            let res_data
            for (let i = 0; i < obj.length; i++) {
                const element_1 = obj[i];
                if (element_1[lenguaje] != undefined) {
                    for (let j = 0; j < element_1[lenguaje].length; j++) {
                        const element_2 = element_1[lenguaje][j];
                        if( element_2[script] != undefined){
                            res_data= element_2[script]
                        }
                    }
                }
            }
            return res_data
        }
        res_peticion= search_language(lenguajes_get(),secundario,terciario)
    }

    if(principal == "basedatos"){
        function search_basedato(obj,lenguaje,script) {
            let res_data
            for (let i = 0; i < obj.length; i++) {
                const element_1 = obj[i];
                if (element_1[lenguaje] != undefined) {
                    for (let j = 0; j < element_1[lenguaje].length; j++) {
                        const element_2 = element_1[lenguaje][j];
                        if( element_2[script] != undefined){
                            res_data= element_2[script]
                       }
                    }
                }
            }
            return res_data
        }
        res_peticion= search_basedato(basedatos_get(),secundario,terciario)
    }

    res.send(res_peticion)
})

// http://localhost:9000/framewors/javascript/node/nombre_script_1
route.get('/:principal/:secundario/:terciario/:cuaternario', async(req,res)=>{
    let principal= req.params.principal
    let secundario= req.params.secundario
    let terciario= req.params.terciario
    let cuaternario= req.params.cuaternario

    let res_peticion
    if(principal == "framewors"){
        //res.send(framewors_get())
        //console.log(framewors_get())
        function search_framewor(obj,lenguaje,framewor,script) {
            let res_data
            for (let i = 0; i < obj.length; i++) {
                const element_1 = obj[i];
                if (element_1[lenguaje] != undefined) {
                    //console.log(element_1[lenguaje])
                    for (let j = 0; j < element_1[lenguaje].length; j++) {
                        const element_2 = element_1[lenguaje][j];
                        if( element_2[framewor] != undefined){
                            //console.log(element_2[framewor])
                            //res_data= element_2[framewor]
                            for (let z = 0; z < element_2[framewor].length; z++) {
                                const element_3 = element_2[framewor][z];
                                if( element_3[script] != undefined){
                                    //console.log(element_3[script])
                                    res_data= element_2[framewor]
                                } 
                            }
                        }
                    }
                }
            }
            return res_data
        }
        res_peticion= search_framewor(framewors_get(),secundario,terciario,cuaternario)
    }

    res.send(res_peticion)
})

route.get('/save',(req,res)=>{

})

module.exports= route;
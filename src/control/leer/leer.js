

let lenguajes_get = ()=>{ 
    let data_get= require('../../files/lenguajes.json')
    return data_get
}

let framewors_get = ()=>{  
    let data_get= require('../../files/frameworks.json')
    return data_get
}

let basedatos_get = ()=>{  
    let data_get= require('../../files/base_datos.json')
    return data_get
}

module.exports= {lenguajes_get,framewors_get,basedatos_get};

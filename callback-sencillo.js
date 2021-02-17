
/**
 * 
 * @param {Numero1 a dividir} a 
 * @param {Numero2 a dividir} b 
 * @param {Función para ejecutar el resultado solicitado} callBack 
 */
const divideDosNumeros=(a,b,callback)=>{
    if (b === 0){
       return callback('error');
    }
    const result=a/b;
    callback(null,result);
}

divideDosNumeros(5,8,(err,result)=>{
    if (err) console.log(err)
    else console.log(result)
})
function range_vision(numero){
    //evitamos que el usuario ingrese un valor negativo
    if(numero < 0){
        return "Ingrese un valor positovo";
    }

    //con String convertimos el numero y con split lo separamos
    const digitos = String(numero).split('')
    let minimoValorVision
    for(let i = 0; i < digitos.length; i++){
        const num = Number(digitos[i]);
        const visionIzquierda = digitos.slice(Math.max(0, i - num), i);
        const visionDerecha = digitos.slice(i + 1).slice(0, num);
        //working
        const rangoDeVision = visionIzquierda.concat(visionDerecha).reduce((acc, curr) => acc + Number(curr), 0)

        //verificamos en la primer vuelta que minimoValorVision sea el rango de vision
        if(i === 0){
            minimoValorVision = rangoDeVision;
        }
        //guardamos el minimoValorDeVision
        if(minimoValorVision > rangoDeVision){
            minimoValorVision = rangoDeVision;
        }
        //si es igual a 1 y el minimoValorVision es igual o menor que rangoDeVision es true
        if(num === 1 && minimoValorVision <= rangoDeVision){
            return true
        }
    }
    return false
}


module.exports = range_vision;
function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number) : number {
   let resultado =  numero1 + numero2;
   return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPoreleMesmo(numero: number): number {
    return numero / numero;
}

function jogaErro(erro: string, codigo: number): never { // never é um código que nunca é finalizado
    throw{error: erro, code: codigo}
}

jogaErro('deu erro', 500);

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 3, dividirPoreleMesmo))


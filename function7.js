
/* CREAR LA FUNCIÓN CON PARÁMETROS DE SALIDA
EN LA MISMA
SE PIDEN DOS VALORES
ME MUESTRA LA SIGUIENTE OPCIÓN ¿QUE OPERACIÓN DESEA REALIZAR?
RESTA O SUMA
LA FUNCIÓN TIENE COMO PARAMETRO DE SALIDA EL RESULTADO DE LA OPERACIÓN
EN EL FLUJO DEL CÓDIGO, MOSTRAR EL RESULTADO CON H1 Y COLOR ROJO */

function calcular() {

    let dato1=parseInt(window.prompt("Ingrese un primer valor"));
    let dato2=parseInt(window.prompt("Ingrese un segundo valor"));

    let operacion=window.prompt("¿Qué operación desea realizar, suma o resta?");
    
    if(operacion=="suma"){
        let suma=(dato1+dato2);
        return suma;
    }
        else if(operacion=="resta"){
            let resta=(dato1-dato2);
            return resta;
    }
    else{
        let nula="incorrecto, debe indicar suma o resta";
        return nula;
    }
}

let resultado=calcular();

document.write("<h1 style='color:red;'> El resultado de la operación indicada es " + resultado + "</h1>");


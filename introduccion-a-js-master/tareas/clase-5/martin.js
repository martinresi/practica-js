function crearIngresante(numero) {
    const $div = document.createElement('div');
    $div.className = "ingresantes";
    const $label = document.createElement("label");
    $label.textContent = 'Edad del integrante #: ' + (numero + 1);
    const $input = document.createElement("input");

    $input.type = "number";
    $input.setAttribute("class", "ingresantes-input");

    $div.appendChild($label);
    $div.appendChild($input);

    const $cantIngresante = document.querySelector("#cantintegrantes");
    $cantIngresante.appendChild($div);

}


document.querySelector('#boton-siguiente').onclick = function (event) { //boton para calcular las edades
    event.preventDefault();

    const $cantidadIngresantes = document.querySelector("#ingreso-integrantes");
    const cantIngresantes = Number($cantidadIngresantes.value);

    removerIngreso();
    ingresar(cantIngresantes);

    // event.preventDefault();

};
document.querySelector('#calcular').onclick = function (event) {
    event.preventDefault();
    
    // const numero = obtenerEdades();
    const numero = obtenerEdad();
    document.querySelector('#edad-mayor').textContent = `la edad del mayor es ${obtenerMayor(numero)} `;
    document.querySelector('#edad-menor').textContent = `la edad del menor es ${obtenerMenor(numero)}`;
    document.querySelector('#edad-promedio').textContent = `la edad promedio' ${obtenerPromedio(numero)}`;
    mostrarResultados();
    // event.preventDefault();
};

function ingresar(ingresantes) {
    if (ingresantes > 0) {
        mostrarBotonCalcular();

    }
    else {
        reset();
    }
    for (let i = 0; i < ingresantes; i++) {
        crearIngresante(i);// me crea un ingreso en cada posicion       
    }

}


function obtenerMayor(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }

    return mayorNumero;
}

function obtenerMenor(numeros) {
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

function obtenerPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    const promedio = acumulador / numeros.length;

    return promedio;
}

function obtenerEdad() {
    // const $ingreso = document.querySelector('.ingresantes input');
    const $ingreso = document.getElementsByClassName('ingresantes-input');

    const edades = [];
    for (let i = 0; i < $ingreso.length; i++) {
        edades.push(Number($ingreso[i].value));
    }
    return edades;
}

function removerIngreso() {
    /*
    const $ingresos = document.querySelector(".ingresantes");
    for (let i = 0; i < ingresos.length; i++) {
        ingresos[i].remove();
    }
    */
    document.querySelector("#cantintegrantes").innerHTML = "";

}
function ocultarBotonCalcular() {
    document.querySelector("#calcular").className = 'oculto';
}


function mostrarBotonCalcular() {
    document.querySelector("#calcular").className = '';
}

function ocultarResultados() {
    document.querySelector("#resultadosCalculos").className = 'oculto';
}
function mostrarResultados() {
    document.querySelector("#resultadosCalculos").className = '';
}

function reset() {
    removerIngreso();
    ocultarBotonCalcular();
    ocultarResultados();
}
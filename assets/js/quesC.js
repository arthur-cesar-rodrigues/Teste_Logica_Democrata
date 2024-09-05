function questaoC() {
    function criaParagrafo() {
        const paragrafo = document.createElement("p");
        return paragrafo;
    }

    function adicionaTexto(num, valor) {
        return `O array de números pares até o número ${num}: [${valor}].`;
    }

    function numPares(num) {
        const arrayPares = [];

        for(let i = 1; i <= num; i++) {
            if (i % 2 === 0) arrayPares.push(i);
        }

        return arrayPares;
    }

    function manipulaNumero(num) {
        const paragrafo = criaParagrafo();
        artigoResultado.innerHTML = "";
        paragrafo.innerText = adicionaTexto(num, numPares(num));
        artigoResultado.appendChild(paragrafo);
    }
    
    function limpaInput() {
        inputNumero.value = "";
        inputNumero.focus();
    }
    
    const botaoEnviar = document.querySelector(".botao-enviar");

    const artigoResultado = document.querySelector(".resultado");

    const inputNumero = document.querySelector(".input-numero");
    
    botaoEnviar.addEventListener("click", () => {
        if (!Number(inputNumero.value) || Number(inputNumero.value) < 0) return;
        manipulaNumero(Number(inputNumero.value));
        limpaInput();
    });

    document.addEventListener("keypress", evento => {
        if (evento.key === "Enter") {
            if (!Number(inputNumero.value) || Number(inputNumero.value) < 0) return;
            manipulaNumero(Number(inputNumero.value));
            limpaInput();
        }
    });
}
questaoC();
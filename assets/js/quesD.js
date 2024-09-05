function questaoD() {
    function criaParagrafo() {
        const paragrafo = document.createElement("p");
        return paragrafo;
    }

    adicionaTexto = string => string.toLowerCase() === reversoString(string.toLowerCase()) ? `A string "${string}"  é um palíndromo.` : `A string "${string}"  não é um palíndromo.`;
    
    function reversoString(string) {
        let stringInvertida = "";
        for (let i = string.length - 1; i >= 0; i--) {
            stringInvertida += string[i];
        }
        return stringInvertida;
    }

    function manipulaString(string) {
        const paragrafo = criaParagrafo();
        artigoResultado.innerHTML = "";
        paragrafo.innerText = adicionaTexto(string);
        artigoResultado.appendChild(paragrafo);
    }
    
    function limpaInput() {
        inputString.value = "";
        inputString.focus();
    }
    
    const botaoEnviar = document.querySelector(".botao-enviar");

    const artigoResultado = document.querySelector(".resultado");

    const inputString = document.querySelector(".input-string");
    
    botaoEnviar.addEventListener("click", () => {
        if (!inputString.value) return;
        manipulaString(inputString.value);
        limpaInput();
    });

    document.addEventListener("keypress", evento => {
        if (evento.key === "Enter") {
            if (!inputString.value) return;
            manipulaString(inputString.value);
            limpaInput();
        }
    });
}
questaoD();
function questaoB() {
    function criaParagrafo() {
        const paragrafo = document.createElement("p");
        return paragrafo;
    }

    function adicionaTexto(string, valor) {
        return `O total de vogais de "${string}" é: ${valor}.`;
    }
    
    function contagemVogais(string) {
        let contVogais = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") contVogais++;
        }
        return contVogais;
    }

    function manipulaString(string) {
        const paragrafo = criaParagrafo();
        artigoResultado.innerHTML = "";
        paragrafo.innerText = adicionaTexto(string , contagemVogais(string));
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
questaoB();
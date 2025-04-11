function toggleFontSize() {
    const fontbutton = document.getElementById("fontbutton");
    let body = document.body;
    let tamanhoAtual = window.getComputedStyle(body).fontSize;
    
    if (tamanhoAtual === "12px") {
        body.style.fontSize = "14px";
        fontbutton.textContent = "Diminuir Fonte"
    } else {
        body.style.fontSize = "12px";
        fontbutton.textContent = "Aumentar Fonte"
    }
}
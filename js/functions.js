function toggleFontSize() {
  const fontbutton = document.getElementById("fontbutton");
  let body = document.body;
  let tamanhoAtual = window.getComputedStyle(body).fontSize;

  if (tamanhoAtual === "12px") {
    body.style.fontSize = "14px";
    fontbutton.textContent = "Diminuir Fonte";
  } else {
    body.style.fontSize = "12px";
    fontbutton.textContent = "Aumentar Fonte";
  }
}

function toggleTrimestre(btnId, divId) {
  const btn = document.getElementById(btnId);
  const div = document.getElementById(divId);

  div.style.display = "none";
  btn.textContent = `Mostrar ${btn.dataset.label}`;

  btn.addEventListener("click", () => {
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "block";
      btn.textContent = `Ocultar ${btn.dataset.label}`;
    } else {
      div.style.display = "none";
      btn.textContent = `Mostrar ${btn.dataset.label}`;
    }
  });
}

toggleTrimestre("btn-trimestre1", "trimestre1");
toggleTrimestre("btn-trimestre2", "trimestre2");
toggleTrimestre("btn-trimestre3", "trimestre3");
toggleTrimestre("btn-trimestre4", "trimestre4");

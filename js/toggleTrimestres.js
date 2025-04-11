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
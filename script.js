mostrarDatos = () => {
    const infoNombre = document.getElementById("inputNombres");
    const infoEdad = document.getElementById("inputEdad");
    const infoObra = document.getElementById("infoObra");
    if(infoNombre.value === "" || infoEdad.value === "" || infoObra.value === "0"){
        alert('COMPLETE LOS ESPACIOS QUE FALTAN !');
    }else{
        edad = parseInt(infoEdad.value);
        let entrada = 18;
        // Validando en caso se estudiante o tenga menos de 12 paga 7 soles
        // sino 18 soles
        let esEstudiante = document.getElementById("optionNo");
        const tipodePago = document.getElementById("tipoDePago");
        if (esEstudiante.checked === false || edad < 12) {
            entrada = 7;
            esEstudiante = document.getElementById("optionSi");
        }
        if (tipodePago.checked === false) {
            entrada -= entrada * 0.1;
        }
        const outputNombre = document.getElementById("outputNombres");
        outputNombre.textContent = infoNombre.value;
        const outputObra = document.getElementById("outputObra");
        outputObra.textContent = infoObra.value;
        const outputCosto = document.getElementById("outputCosto");
        outputCosto.textContent = `S/.${entrada} soles`;
    }
}
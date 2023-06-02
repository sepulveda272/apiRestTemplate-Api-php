import { newCamper } from "../apiConnection/API.js";

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit',validarCampers)


 function validarCampers(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const promedio = document.querySelector('#promedio').value;
    const edad= document.querySelector('#edad').value;
    const nivelIngles= document.querySelector('#nivelIngles').value;
    const especialidad = document.querySelector('#especialidad').value;
    const nivelCampus = document.querySelector('#nivelCampus').value;
    const expertoTecnologia= document.querySelector('#expertoTecnologia').value;

    //literal ibject enhancent 
    const camper = {
        nombre,
        promedio,
        edad,
        nivelIngles,
        especialidad,
        nivelCampus,
        expertoTecnologia,

    }

    if(validate(camper)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    newCamper (camper)

}

function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

}
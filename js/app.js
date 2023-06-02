//3.Inpor la funcion HTTP -get
import {getCampers,adeleteCampers} from '../apiConnection/API.js'


//1.fincion iife 
(function(){
    const lista = document.querySelector('.lista');
    document.addEventListener('DOMContentLoaded',ShouwCampers)
    lista.addEventListener('click',confirmDelete);



    async function ShouwCampers (){
        /* console.log("hola"); */
        const campers = await getCampers();
        console.log(campers);
        const  contenedor = document.querySelector('tbody')
        campers.forEach(element => {
            const {imagen,nombre,edad,promedio,especialidad,expertoTecnologia,id} = element 
            const rows = document.createElement('tr');
            rows.innerHTML =`
            <th scope="row"> ${id} </th>
            <td><img src="img/${imagen}" class="cuenta"</img> </td>
            <td> ${nombre} </td>
            <td> ${promedio} </td>
            <td> ${especialidad} </td>
            <td> ${expertoTecnologia} </td>
            <td> <button type="button" class="btn btn-warning">Detalle</button> </td>
            <td> <button type="button" data-camper="${id}" class="btn btn-danger delete" >Borrar</button> </td>
         `
         contenedor.appendChild(rows)
            
        });
        
    }


    function confirmDelete(e){
        if(e.target.classList.contains('delete')){
            const camperId = parseInt(e.target.dataset.camper) 
            const confirmar = confirm('¿DESEAS ELIMNAR AL CAMPER PARA QUE SE QUEDE EN CASA')
            if(confirmar){
                adeleteCampers(camperId)
            }
            
        }
        


    }
})();

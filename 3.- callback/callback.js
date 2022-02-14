/*
Proceso inscripción a kodemia
1.- Entrevista
2.- Oferta
3.- Inscripción
4.- Asistir a clases
*/

// Constantes del proceso de inscripcion de kodemia
const kodemia = {
    entrevistado : false,
    ofertado : false, 
    inscrito : false,
    asistirAClases : false,
}

//Aqui comienzas las funciones
function entrevistar(koderEntrevistado, callback){
    console.log('Entrevistando a la persona ...');
    setTimeout(() => {
        let error = null;
        koderEntrevistado.entrevistado = true;
        if(koderEntrevistado.entrevistado === false){
            error = "No se ha entrevistado al new koder";
        }
        callback(error, koderEntrevistado);
    }, 3000);
}

function ofertar(koderOfertado,callback){
    console.log("Ofertando al nuevo koder...");
    setTimeout(() => {
        let error = null;
        koderOfertado.ofertado = true;
        if(koderOfertado.ofertado === false){
            console.log("No se ha ofertado al new koder");
        }
        callback(error,koderOfertado);
    }, 3000);
}

function inscribir(koderInscrito, callback){
    console.log("Inscribiendo al new koder...");
    setTimeout(() => {
        let error = null;
        koderInscrito.inscrito = true;
        if(koderInscrito.inscrito === false){
            console.log("El nuevo koder no se ha podido inscribir");
        }
        callback(error,koderInscrito);
    }, 3000);
}

function asistirAClases(koderAsistio, callback){
    console.log("El new koder esta asistiendo a sus clase...");
    setTimeout(() => {
        let error = null;
        koderAsistio.asistirAClases = true;
        if(koderAsistio.asistirAClases === false){
            console.log("El koder no asiste a sus clases");
        }
        callback(error,koderAsistio);
    }, 3000);
}
//Aqui termina las funciones

entrevistar(kodemia, (error, koderEntrevistado) =>{
    if(error){
        console.log("Error", error)
        return
    }
    console.log("Koder entrevistado: ", koderEntrevistado);
    ofertar(koderEntrevistado,(error, koderOfertado) =>{
        if(error){
            console.log("Error", error);
            return
        }
        console.log("Koder ofertado: ", koderOfertado);
    });
    inscribir(koderEntrevistado,(error, koderInscrito)=>{
        if(error){
            console.log("Error", error);
            return
        }
        console.log("Koder Entrevistado", koderInscrito);
    });
    asistirAClases(koderEntrevistado,(error,koderAsistio)=>{
        if(error){
            console.log("Error", error);
            return
        }
        console.log("Koder Asistió: ", koderAsistio);
    })
});
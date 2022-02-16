// Declaramos la constantes
const kodemia = {
    entrevistado : false,
    ofertado : false, 
    inscrito : false,
    asistirAClases : false,
}

// Generamos las funciones 
function entrevistar(koderAEntrevistar){
    console.log("Entrevistando al nuevo koder...");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            koderAEntrevistar.entrevistado = true;
            if(koderAEntrevistar.entrevistado){
                resolve(koderAEntrevistar);
            } else {
                reject("No se ha podido entreviistar al koder");
            }
        }, 2000);
    });
}

function ofertar(koderOfertado){
    console.log("Ofertando al neew koder...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderOfertado.ofertado = true;
            if(koderOfertado.ofertado){
                resolve(koderOfertado);
            } else {
                reject("No se ha podido ofertar al koder");
            }
        }, 2000);
    });
}

function inscribir(koderInscrito){
    console.log("Inscribiendo al new koder...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderInscrito.inscrito = true;
            if(koderInscrito.inscrito){
                resolve(koderInscrito);
            } else {
                reject("No se ha podido inscribir al new koder");
            }
        }, 2000);
    });
}

function asistirAClases(koderAsistio){
    console.log("El new koder esta asistiendo a sus clases...");
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            koderAsistio.asistirAClases = true;
            if(koderAsistio.asistirAClases){
                resolve(koderAsistio);
            } else {
                reject("El koder no asiste a clases");
            }
        }, 2000);
    });
}

// Proceso con then catch
/*
entrevistar(kodemia)
    .then((koderAgregado) =>{
        console.log("Koder Agregado: ", koderAgregado);
        ofertar(koderAgregado) 
            .then((koderOfertado) => {
                console.log("Koder Ofertado: ", koderOfertado);
                inscribir(koderOfertado)
                    .then((koderInscrito) => {
                        console.log("koder Inscrito: ", koderInscrito)
                        asistirAClases(koderInscrito)
                            .then((koderAsistio) => {
                                console.log("Koder Asiste a Clases: ", koderAsistio)
                            })
                            .catch((error) => {console.log("No se pudo acceder a clases")})
                    })
                    .catch((error) => {console.log("No se pudo inscribir al new koder")})
            })
            .catch((error) => {console.log("No se pudo ofertar al new koder")})
    })
    .catch((error) => {console.log("No se pudo agregar new Koder");})
*/

// async / await

/*
async -> marca a una funcion como asincrona
await -> esperar la ejecucion de una promesa

PARA USAR AWAIT NECESITAMOS UNA FUNCION A LA QUE MARCAREMOS COMO ASYNCRONA

LAS FUNCIONES QUE MARQUEMOS COMO ASYNCRONAS POR DEFECTO REGRESAN UNA PROMESA
*/

async function main(){
    const koderAgregado = await entrevistar(kodemia);
    console.log("Koder entrevistado: ", koderAgregado);
    const koderOfertado = await ofertar(koderAgregado);
    console.log("Koder ofertado: ", koderOfertado);
    const koderInscrito = await  inscribir(koderOfertado);
    console.log("Koder inscrito: ", koderInscrito);
    const koderAsistio = await asistirAClases(koderInscrito);
    console.log("Koder asiste: ", koderAsistio);
}

main()
    .then(() => {console.log("Todo ok")})
    .catch((error) => {console.log("Olvidalo, no es lo tuyo")})
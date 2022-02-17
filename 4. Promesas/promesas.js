// la promesas son objeto

//constructor ->
// resolve - Es una funcion que nos permitira pasar la promesa de pendiente a resuleta
// reject - Es una funcion que nos permitira pasar la promesa de pendiente a rechazada
const myPromise = new Promise((resolve, reject) => {
    //logica interna
    const todoBien = true;
    if(todoBien){
        resolve("ok")
    } else {
        reject("no salio bien")
    }
})
//Los objetos de tipo promesa cuentan con 2 metodos

//then() -> Se ejecuta cuando la promesa se resolvio exitosamente
    //Recibe lo que mandamos en la funcion resolve()
// catch() -> Se ejecuta cuando la promesa ha sido rechazada
    //Recibe la que mandamos en la funcion reject() -> Se ejecuta cuando la promesa

myPromise
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})

//wrapper en una funcion

function myFirstPromise(){
    return new Promise((resolve, reject) => {
        const todoBien = false
        if(todoBien){
            resolve("ok2")
        } else {
            reject("no salio bien2")
        }
    })
}

myFirstPromise()
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})
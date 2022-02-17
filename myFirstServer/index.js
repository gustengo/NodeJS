const http = require("http");
const { Server } = require("tls");

const server = http.createServer((request, response) => {
    console.log('url: ', request.url)
    console.log('method: ', request.method)
    response.write("Hola desde mi servidor con Node.JS")
    response.end()
})

server.listen(8080, () => {
    console.log("Servidor escuchando en el puerto: 8080")
})
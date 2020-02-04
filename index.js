const {app, port} = require("./server/index");

// Usar el dotenv en la aplicacion
var dotenv = require('dotenv');
dotenv.config();

// Importar la coneccion a mongo
require("./database/index");

// Arrancar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});



//  Backend con Express JS & MongoDB
//     1) Crear una base de datos para un supermercado que pueda 
//     almacenar lo siguiente:
//     - Artículo
//         -Nombre (string)
//         -Precio (number)
//         -Existencias (number)
//     - Ticket
//         -subtotal (number)
//         -IVA (number)
//         -total (number)
//         -articulos (articulo)



//    2) Crear una API que permita realizar las operaciones      
//        elementales CRUD sobre artículos y ticket.
//    

// 3) Mediante un ENDPOINT calcular el subtotal, IVA y total de
//        algún ticket.
//     COMO REGLA DE NEGOCIO los documentos "Ticket" deben inicializar
//     subtotal, IVA y total en 0.
//     NOTA: Al hacer la petición del paso 3) se debe actualizar
//     el contenido del ticket según los artículos que contengas

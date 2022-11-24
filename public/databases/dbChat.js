const mysql = require('mysql');
const connectionChat = mysql.createConnection({
    host: "localhost", //dpg-cdkraikgqg43pc4kgvg0-a
    user: "root",
    password: "password", //jGLR2SxQVN9iWJEfaGyqlSGGMs4vGqKW
    database: "chat",
})

connectionChat.connect((error)=>{
    if(error){
        console.log("El error de conexion es: " + error);
        return;
    }
    console.log("> Conexion a la base del chat exitosa \n-------------------------------------------\n");
});

module.exports = connectionChat;
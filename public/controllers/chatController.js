const Chatcontroller = {};
const ChatConnection = require('../database/dbChat');

var OptionsButtons = [];
var DialogCharacter = [];

Chatcontroller.getTime = (req, res)=>{
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + minutes
     }

    let time = hours + ':' + minutes;
    return time;
}

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + minutes
     }

    let time = hours + ':' + minutes;
    return time;
}

Chatcontroller.firstOptions = (req, res) => {
    ChatConnection.query('SELECT * FROM chat1', (error, results)=>{
        if(error){
            console.log("El error SQL (chat) es: " + error)
        }
        else{
            console.log(results)
            return res.render("Chat-3", {time: getTime(), data: results});
        }
    })
}

Chatcontroller.history = (req, res) =>{
    ChatConnection.query("SELECT * FROM chat_history", (error, results) =>{
        if(error){
            console.log("El error de conexion es: " + error);
        }
        else{
            console.log(results);
            return res.render("Chat-3", {time: getTime(), History:results});
        }
    })
}

Chatcontroller.secondOptions = (req, res) => {
    OptionsButtons = ['Jugar', 'Hablar', 'Necesito un consejo', 'Chistes', 'Amor', 'Adivinanzas!'];
    DialogCharacter = 'Dime, que quieres hacer ahora?';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TalkOptions = (req, res) => {
    OptionsButtons = ['Problemas', 'Familia', 'Amigos', 'Mascotas', 'Amor', 'Juegos!'];
    DialogCharacter = 'Dime, ¿De qué quieres hablar?';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['Problemas', 'Familia', 'La Vida', 'Bullying', 'Amor', '']; //FALTA
    DialogCharacter = 'Decime, ¿Sobre qué necesitas un consejo?'
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.Chistes = (req, res) => { //Ni puta idea
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.LoveOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = 'Ten en cuenta que el gran amor y los grandes logros, requieren grandes riesgos';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.RiddleOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = 'Tengo agujas, y no se coser, tengo números y no se leer... ¿Qué soy?';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.push(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}



module.exports = Chatcontroller;
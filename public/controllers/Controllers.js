const controller = {};
const connection = require('../databases/db');

controller.login = (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    connection.query('SELECT * FROM USERS WHERE name_user = ?', [user], (error, results) =>{
        if (results[0] === undefined){
            return res.render('login', {
                alert: true,
                alertTitle: "Error",
                alertMessage: "Usuario y/o contraseña incorrectos",
                alertIcon: "error",
                showConfirmButton: true,
                timer: 1500,
                ruta: ''
            })
            return;
        }
        else{
            if (pass != results[0].passwor) {
                return res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrectos",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: ''
                });
            }
            else {
                const UserId = results[0].user_id;
                console.log(UserId)
                connection.query('TRUNCATE TABLE tempUser;')
                connection.query('INSERT INTO tempUser VALUES (' + UserId + ', ' + 1 + ');', (error, results) =>{
                })
                return res.render('login', {
                    alert: true,
                    alertTitle: "Bienvenido",
                    alertMessage: "¡Login correcto!",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 900,
                    ruta: 'home',
                });
            }
        }
    })
};


controller.selectCharacter1 = (req, res) =>{
    connection.query('SELECT * FROM tempUser;', (error, results) =>{
        const user = results[0].user_id;
        const character = results[0].characterID;
        const newCharID = 1;

        connection.query('SELECT characterID FROM USERS WHERE user_id = ?;', [user], (error, results) =>{
            console.log("ID Personaje Anterior: " + character);
            console.log("ID Personaje Actual: " + results[0].characterID)

            if(results[0].characterID == newCharID){
                return res.render('characters', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El compañero ya está seleccionado",
                    alertIcon: "warning",
                    showConfirmButton: true,
                    timer: 2500,
                    ruta: 'shop'
                })
            }
            if (results[0] === undefined){
                return res.render('characters', {
                    alert: true,
                    alertTitle: "Lo sentimos, hubo un error",
                    alertMessage: "Inténtelo más tarde",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: 'shop'
                })
                return;
            } 
            else{
                connection.query('UPDATE USERS SET characterID = ' + newCharID + ' WHERE user_id = ' + user + ';', (error, results) =>{
                    if(error){
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Lo sentimos, hubo un error",
                            alertMessage: "Intentá de nuevo más tarde",
                            alertIcon: "error",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'shop'
                        });
                    }
                    else {
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Seleccionado y en uso",
                            alertMessage: "¡Disfruta con tu nuevo compañero!",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: '/'
                        });
                    }
                })
            }    
        })

    })
}

controller.selectCharacter2 = (req, res) =>{
    connection.query('SELECT * FROM tempUser;', (error, results) =>{
        const user = results[0].user_id;
        const character = results[0].characterID;
        const newCharID = 2;

        connection.query('SELECT characterID FROM USERS WHERE user_id = ?;', [user], (error, results) =>{
            if(results[0].characterID == newCharID){
                return res.render('Seal-characters', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El compañero ya está seleccionado",
                    alertIcon: "warning",
                    showConfirmButton: true,
                    timer: 2500,
                    ruta: 'sealShop'
                })
            }
            if (results[0] === undefined){
                return res.render('next_home', {
                    alert: true,
                    alertTitle: "Lo sentimos, hubo un error",
                    alertMessage: "Inténtelo más tarde",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: 'shop'
                })
                return;
            } 
            else{
                connection.query('UPDATE USERS SET characterID = ' + newCharID + ' WHERE user_id = ' + user + ';', (error, results) =>{
                    if(error){
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Lo sentimos, hubo un error",
                            alertMessage: "Intentá de nuevo más tarde",
                            alertIcon: "error",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'shop'
                        });
                    }
                    else {
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Seleccionado y en uso",
                            alertMessage: "¡Disfruta con tu nuevo compañero!",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'sealShop'
                        });
                    }
                })
            }    
        })

    })
}

controller.selectCharacter3 = (req, res) =>{
    connection.query('SELECT * FROM tempUser;', (error, results) =>{
        const user = results[0].user_id;
        const character = results[0].characterID;
        const newCharID = 3;

        connection.query('SELECT characterID FROM USERS WHERE user_id = ?;', [user], (error, results) =>{
            if(results[0].characterID == newCharID){
                return res.render('Otter-Characters', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El compañero ya está seleccionado",
                    alertIcon: "warning",
                    showConfirmButton: true,
                    timer: 2500,
                    ruta: 'otterShop'
                })
            }
            if (results[0] === undefined){
                return res.render('next_home', {
                    alert: true,
                    alertTitle: "Lo sentimos, hubo un error",
                    alertMessage: "Inténtelo más tarde",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: 'shop'
                })
                return;
            } 
            else{
                connection.query('UPDATE USERS SET characterID = ' + newCharID + ' WHERE user_id = ' + user + ';', (error, results) =>{
                    if(error){
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Lo sentimos, hubo un error",
                            alertMessage: "Intentá de nuevo más tarde",
                            alertIcon: "error",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'shop'
                        });
                    }
                    else {
                        return res.render('Otter-Characters', {
                            alert: true,
                            alertTitle: "Seleccionado y en uso",
                            alertMessage: "¡Disfruta con tu nuevo compañero!",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'otterShop'
                        });
                    }
                })
            }    
        })

    })
}

controller.selectCharacter4 = (req, res) =>{
    connection.query('SELECT * FROM tempUser;', (error, results) =>{
        const user = results[0].user_id;
        const character = results[0].characterID;
        const newCharID = 4;

        connection.query('SELECT characterID FROM USERS WHERE user_id = ?;', [user], (error, results) =>{
            console.log(results)
                        if(results[0].characterID == newCharID){
                return res.render('Octopus-Characters', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "El compañero ya está seleccionado",
                    alertIcon: "warning",
                    showConfirmButton: true,
                    timer: 2500,
                    ruta: 'octopusShop'
                })
            }
            if (results[0] === undefined){
                return res.render('next_home', {
                    alert: true,
                    alertTitle: "Lo sentimos, hubo un error",
                    alertMessage: "Inténtelo más tarde",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: 'shop'
                })
                return;
            } 
            else{
                connection.query('UPDATE USERS SET characterID = ' + newCharID + ' WHERE user_id = ' + user + ';', (error, results) =>{
                    if(error){
                        return res.render('characters', {
                            alert: true,
                            alertTitle: "Lo sentimos, hubo un error",
                            alertMessage: "Intentá de nuevo más tarde",
                            alertIcon: "error",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'shop'
                        });
                    }
                    else {
                        return res.render('Octopus-Characters', {
                            alert: true,
                            alertTitle: "Seleccionado y en uso",
                            alertMessage: "¡Disfruta con tu nuevo compañero!",
                            alertIcon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                            ruta: 'octopusShop'
                        });
                    }
                })
            }    
        })

    })
}
// EXPORT || EXPORTACION
module.exports = controller;

//https://www.youtube.com/watch?v=FX2gtyB9Jw0
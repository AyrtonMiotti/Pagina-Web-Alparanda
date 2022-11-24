/*
function charge(datos){
    var parTable = document.getElementById('participanTable')  
    for(let i = 0; i<datos.length; i++){
        var newParTableRow = parTable.insertRow(-1);
        for(let x=0; x<3; x++){
            var newParTableCell = newParTableRow.insertCell(x)
            datoFila = datos[i][x];
            newParTableCell.textContent = datoFila;
        }
    }
}

app.get('/', (req, res)=>{
    connection.query('SELECT * FROM alumnos', (error, results) =>{
        console.log(results)
        if(error){console.log("El error que devolvió SQL es: " + error);
            return;}

        else{
            datos = []
            for(let i = 0; i<results.length; i++){
                var IDA = results[i].IDA;
                var APE = results[i].apellido;
                var NOM = results[i].nombre;
                var DNI = results[i].DNI;

                console.log(IDA, APE, NOM, DNI);
                newArray = []
                newArray.push(IDA, APE, NOM, DNI);
                datos[i] = newArray;
            }
            console.log('-----------------------------------------\n', datos)
        }
    })
})
*/




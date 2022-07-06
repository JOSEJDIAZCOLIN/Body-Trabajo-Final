// Make a request for a user with a given ID

// creamos una varibale que contenga la informacion de la respuesta y la procesamos
let estudiantes = '';

// llamamos a la API por el metodo GET y la ruta estudiantes
axios.get('https://trabajo-final.katerine-paolap.repl.co/estudiantes')
  .then(function (response) {
    
    // preguntamos si la consulta fué exitosa con la respuesta de status = 200
    if (response.status==200){
      // mostramos en consola la informacion de la api que se encuentra en data
      console.log(response.data);
      // asignamos directamente el resultado al componente div en la pagina
      //document.getElementById("dvEstudiantes").innerHTML = JSON.stringify(response.data)

      // recorremos todos los elementos del resultado de la api
      for(var i=0; i<= response.data.length-1; i++){
        // console.log(response.data[i], i)
        // vamos agregando uno a uno cada uno de los resutados
        estudiantes = estudiantes+ "<br>"+  response.data[i].nombre1 + " " +response.data[i].apellido1
      }
    }
    // le asignamos a la vista en el documento HTML al elemento div el resultado del procesamiento
    document.getElementById("lsEstudiantes").innerHTML = estudiantes
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
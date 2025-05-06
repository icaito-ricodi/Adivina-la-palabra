//Arreglo que contiene las palabras para jugar
let arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA",
  "COMPUTADORA", "ESCRITORIO", "VENTANA", "JARDIN", "ESCUELA", "UNIVERSIDAD",
  "LIBRO", "CUADERNO", "PENCIL", "GOMA", "REGLA", "MOCHILA",
  "ZAPATO", "CAMISA", "PANTALON", "VESTIDO", "SOMBRERO", "BUFANDA",
  "PLAYA", "MONTANA", "BOSQUE", "RIO", "LAGO", "CASCADA",
  "SOL", "LUNA", "ESTRELLA", "NUBE", "LLUVIA", "VIENTO",
  "CASA", "EDIFICIO", "CALLE", "AVENIDA", "PARQUE", "PLAZA",
  "COMIDA", "BEBIDA", "FRUTA", "VERDURA", "CARNE", "PESCADO",
  "DEPORTE", "FUTBOL", "BASQUETBOL", "TENIS", "NATACION", "CICLISMO",
  "PELICULA", "SERIE", "MUSICA", "CANCIÓN", "BAILE", "TEATRO",
  "AMIGO", "FAMILIA", "HERMANO", "MADRE", "PADRE", "ABUELO",
  "TRABAJO", "OFICINA", "EMPLEADO", "JEFE", "REUNION", "PROYECTO",
  "DINERO", "BANCO", "CREDITO", "DEBITO", "AHORRO", "INVERSION",
  "SALUD", "MEDICO", "HOSPITAL", "FARMACIA", "ENFERMEDAD", "VACUNA",
  "TIEMPO", "HORA", "MINUTO", "SEGUNDO", "DIA", "MES",
  "PLANETA", "TIERRA", "MARTE", "JUPITER", "SATURNO", "NEPTUNO",
  "IDIOMA", "ESPAÑOL", "INGLES", "FRANCES", "ALEMAN", "ITALIANO",
  "NUMERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO"];
//Arreglo que contiene las ayudas de cada palabra
let ayudas = [
"Instrumento Musical",
"Animal de la selva",
"Es un color",
"Nombre de mujer",
"Hardware de computadora",
"Es un Pais",
"Equipo electrónico",
"Mueble para trabajar",
"Parte de una casa",
"Espacio verde",
"Lugar para aprender",
"Institución educativa superior",
"Objeto para leer",
"Útil escolar para escribir",
"Útil escolar para dibujar",
"Útil escolar para borrar",
"Útil escolar para medir",
"Objeto para llevar cosas",
"Calzado",
"Prenda de vestir superior",
"Prenda de vestir inferior",
"Prenda de vestir femenina",
"Accesorio para la cabeza",
"Accesorio para el cuello",
"Lugar con arena y mar",
"Elevación natural de la tierra",
"Terreno con árboles",
"Corriente de agua dulce",
"Cuerpo de agua rodeado de tierra",
"Caída de agua",
"Astro rey",
"Satélite natural de la Tierra",
"Cuerpo celeste brillante",
"Masa de vapor de agua en la atmósfera",
"Precipitación líquida",
"Movimiento del aire",
"Lugar para vivir",
"Construcción grande",
"Vía urbana",
"Vía principal",
"Espacio público con vegetación",
"Espacio público abierto",
"Alimento",
"Líquido para beber",
"Producto vegetal comestible",
"Producto vegetal comestible",
"Producto animal comestible",
"Producto acuático comestible",
"Actividad física",
"Deporte de pelota con pies",
"Deporte de pelota con manos",
"Deporte con raqueta y pelota",
"Deporte acuático",
"Deporte de dos ruedas",
"Obra cinematográfica",
"Producción televisiva episódica",
"Arte sonoro",
"Composición musical",
"Movimiento rítmico del cuerpo",
"Arte escénico",
"Persona cercana",
"Grupo de personas unidas por lazos de sangre o afecto",
"Pariente masculino",
"Progenitora femenina",
"Progenitor masculino",
"Padre o madre de los padres",
"Actividad laboral",
"Lugar donde se trabaja",
"Persona que trabaja para una empresa",
"Persona a cargo de un grupo de trabajo",
"Encuentro formal para discutir temas",
"Tarea específica con un objetivo",
"Medio de intercambio económico",
"Institución financiera",
"Instrumento financiero para obtener fondos",
"Instrumento financiero para pagos directos",
"Guardar dinero para el futuro",
"Colocar dinero para obtener ganancias",
"Estado de bienestar físico y mental",
"Profesional de la salud",
"Institución de salud",
"Establecimiento para dispensar medicamentos",
"Alteración de la salud",
"Preparado para prevenir enfermedades",
"Dimensión temporal",
"Unidad de tiempo",
"Fracción de una hora",
"Fracción de un minuto",
"Unidad de tiempo de 24 horas",
"División del año",
"Cuerpo celeste que orbita una estrella",
"Planeta donde vivimos",
"Planeta rojo",
"Planeta gigante gaseoso",
"Planeta con anillos",
"Planeta azul distante",
"Sistema de comunicación verbal",
"Idioma hablado en España",
"Idioma hablado en muchos países",
"Idioma hablado en Francia",
"Idioma hablado en Alemania",
"Idioma hablado en Italia",
"Símbolo matemático",
"Primer número natural",
"Número que sigue al uno",
"Número que sigue al dos",
"Número que sigue al tres",
"Número que sigue al cuatro"
];

//variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

//Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 5;

//variable que guarda el indice de la Palabra actual
let posActual;

//arreglo que contiene la palabra actual con la que estoy judando
let arrayPalabraActual = [];

//Cantidad de de letras acertadas por cada jugada
let cantidadAcertadas = 0;

//Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

//Cantidad de palabras acertadas en total
let palabrasAcertadas = 0; // <--- Nueva variable para contar las palabras acertadas

//Cantidad de letras que debe acertar en cada jugada.
let totalQueDebeAcertar;

// Obtener la cantidad total inicial de palabras
const totalPalabrasInicial = arrayPalabras.length;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra(){
  //Aumento en uno cantidad de palabras jugadas y controlo si llego a su limite
  cantPalabrasJugadas++;
  if(cantPalabrasJugadas>totalPalabrasInicial){ // Ahora comparamos con la longitud total inicial
      //volvemos a cargar el arreglo
      arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA",
                          "COMPUTADORA", "ESCRITORIO", "VENTANA", "JARDIN", "ESCUELA", "UNIVERSIDAD",
                          "LIBRO", "CUADERNO", "PENCIL", "GOMA", "REGLA", "MOCHILA",
                          "ZAPATO", "CAMISA", "PANTALON", "VESTIDO", "SOMBRERO", "BUFANDA",
                          "PLAYA", "MONTANA", "BOSQUE", "RIO", "LAGO", "CASCADA",
                          "SOL", "LUNA", "ESTRELLA", "NUBE", "LLUVIA", "VIENTO",
                          "CASA", "EDIFICIO", "CALLE", "AVENIDA", "PARQUE", "PLAZA",
                          "COMIDA", "BEBIDA", "FRUTA", "VERDURA", "CARNE", "PESCADO",
                          "DEPORTE", "FUTBOL", "BASQUETBOL", "TENIS", "NATACION", "CICLISMO",
                          "PELICULA", "SERIE", "MUSICA", "CANCIÓN", "BAILE", "TEATRO",
                          "AMIGO", "FAMILIA", "HERMANO", "MADRE", "PADRE", "ABUELO",
                          "TRABAJO", "OFICINA", "EMPLEADO", "JEFE", "REUNION", "PROYECTO",
                          "DINERO", "BANCO", "CREDITO", "DEBITO", "AHORRO", "INVERSION",
                          "SALUD", "MEDICO", "HOSPITAL", "FARMACIA", "ENFERMEDAD", "VACUNA",
                          "TIEMPO", "HORA", "MINUTO", "SEGUNDO", "DIA", "MES",
                          "PLANETA", "TIERRA", "MARTE", "JUPITER", "SATURNO", "NEPTUNO",
                          "IDIOMA", "ESPAÑOL", "INGLES", "FRANCES", "ALEMAN", "ITALIANO",
                          "NUMERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO"];
      ayudas = [
          "Instrumento Musical",
          "Animal de la selva",
          "Es un color",
          "Nombre de mujer",
          "Hardware de computadora",
          "Es un Pais",
          "Equipo electrónico",
          "Mueble para trabajar",
          "Parte de una casa",
          "Espacio verde",
          "Lugar para aprender",
          "Institución educativa superior",
          "Objeto para leer",
          "Útil escolar para escribir",
          "Útil escolar para dibujar",
          "Útil escolar para borrar",
          "Útil escolar para medir",
          "Objeto para llevar cosas",
          "Calzado",
          "Prenda de vestir superior",
          "Prenda de vestir inferior",
          "Prenda de vestir femenina",
          "Accesorio para la cabeza",
          "Accesorio para el cuello",
          "Lugar con arena y mar",
          "Elevación natural de la tierra",
          "Terreno con árboles",
          "Corriente de agua dulce",
          "Cuerpo de agua rodeado de tierra",
          "Caída de agua",
          "Astro rey",
          "Satélite natural de la Tierra",
          "Cuerpo celeste brillante",
          "Masa de vapor de agua en la atmósfera",
          "Precipitación líquida",
          "Movimiento del aire",
          "Lugar para vivir",
          "Construcción grande",
          "Vía urbana",
          "Vía principal",
          "Espacio público con vegetación",
          "Espacio público abierto",
          "Alimento",
          "Líquido para beber",
          "Producto vegetal comestible",
          "Producto vegetal comestible",
          "Producto animal comestible",
          "Producto acuático comestible",
          "Actividad física",
          "Deporte de pelota con pies",
          "Deporte de pelota con manos",
          "Deporte con raqueta y pelota",
          "Deporte acuático",
          "Deporte de dos ruedas",
          "Obra cinematográfica",
          "Producción televisiva episódica",
          "Arte sonoro",
          "Composición musical",
          "Movimiento rítmico del cuerpo",
          "Arte escénico",
          "Persona cercana",
          "Grupo de personas unidas por lazos de sangre o afecto",
          "Pariente masculino",
          "Progenitora femenina",
          "Progenitor masculino",
          "Padre o madre de los padres",
          "Actividad laboral",
          "Lugar donde se trabaja",
          "Persona que trabaja para una empresa",
          "Persona a cargo de un grupo de trabajo",
          "Encuentro formal para discutir temas",
          "Tarea específica con un objetivo",
          "Medio de intercambio económico",
          "Institución financiera",
          "Instrumento financiero para obtener fondos",
          "Instrumento financiero para pagos directos",
          "Guardar dinero para el futuro",
          "Colocar dinero para obtener ganancias",
          "Estado de bienestar físico y mental",
          "Profesional de la salud",
          "Institución de salud",
          "Establecimiento para dispensar medicamentos",
          "Alteración de la salud",
          "Preparado para prevenir enfermedades",
          "Dimensión temporal",
          "Unidad de tiempo",
          "Fracción de una hora",
          "Fracción de un minuto",
          "Unidad de tiempo de 24 horas",
          "División del año",
          "Cuerpo celeste que orbita una estrella",
          "Planeta donde vivimos",
          "Planeta rojo",
          "Planeta gigante gaseoso",
          "Planeta con anillos",
          "Planeta azul distante",
          "Sistema de comunicación verbal",
          "Idioma hablado en España",
          "Idioma hablado en muchos países",
          "Idioma hablado en Francia",
          "Idioma hablado en Alemania",
          "Idioma hablado en Italia",
          "Símbolo matemático",
          "Primer número natural",
          "Número que sigue al uno",
          "Número que sigue al dos",
          "Número que sigue al tres",
          "Número que sigue al cuatro"
      ];
  }

  //Selecciono una posicion random
  posActual = Math.floor(Math.random()*arrayPalabras.length);

  //Tomamos la palabra nueva
  let palabra = arrayPalabras[posActual];
  //cantidad de letras que tiene esa palabra
  totalQueDebeAcertar = palabra.length;
  //coloco en 0 la cantidad acertadas hata el momento
  cantidadAcertadas = 0;

  //Guardamos la palabra que esta en formato string en un arreglo
  arrayPalabraActual = palabra.split('');

  //limpiamos los contenedores que quedaron cargadas con la palabra anterior
  document.getElementById("palabra").innerHTML = "";
  document.getElementById("letrasIngresadas").innerHTML = "";

  //Cargamos la cantidad de divs (letras) que tiene la palabra
  for(i=0;i<palabra.length;i++){
      var divLetra = document.createElement("div");
      divLetra.className = "letra";
      document.getElementById("palabra").appendChild(divLetra);
  }

  //Selecciono todos los divs de la palabra
  divsPalabraActual = document.getElementsByClassName("letra");

  //setemos los intentos
  intentosRestantes = 5;
  document.getElementById("intentos").innerHTML = intentosRestantes;

  //Cargamos la ayuda de la pregunta
  document.getElementById("ayuda").innerHTML = ayudas[posActual];

 //elimino el elemento ya seleccionado del arreglo.
  //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
  arrayPalabras.splice(posActual,1);
  ayudas.splice(posActual,1);

  // Actualizamos el contador al cargar la primera palabra
  document.getElementById("palabrasAcertadas").innerHTML = palabrasAcertadas + " de " + totalPalabrasInicial;
}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {
  //Controlo si la tecla presionada es una letra
  if(isLetter(event.key)){
      //Tomo las letras ya ingresadas hasta el momento
      let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
      //arma un a arreglo con las letras ingresadas
      letrasIngresadas = letrasIngresadas.split('');

      //controlo si la letra presionada ya ha sido ingresada
      if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
          //variable bandera para saber si la letra ingresada
          let acerto = false;

          //Recorro el arreglo que contiene la palabra para verificar si la palabra ingresada esta
          for(i=0;i<arrayPalabraActual.length;i++){
              if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                  divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                  acerto = true;
                  //Aumento en uno la cantidad de letras acertadas
                  cantidadAcertadas = cantidadAcertadas + 1;
              }
          }

          //Controlo si acerto al menos una letra
          if(acerto==true){
              //controlamos si ya acerto todas
              if(totalQueDebeAcertar == cantidadAcertadas){
                  //asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                  for(i=0;i<arrayPalabraActual.length;i++){
                      divsPalabraActual[i].className="letra pintar";
                  }
                  // Incrementamos el contador de palabras acertadas
                  palabrasAcertadas++;
                  // Actualizamos el elemento en el HTML mostrando "acertadas de total"
                  document.getElementById("palabrasAcertadas").innerHTML = palabrasAcertadas + " de " + totalPalabrasInicial;
              }
          }else{
              //No acerto, decremento los intentos restantes
              intentosRestantes = intentosRestantes - 1;
              document.getElementById("intentos").innerHTML = intentosRestantes;

              //controlamos si ya acabo todas la oportunidades
              if(intentosRestantes<=0){
                  // Mostramos la palabra correcta
                  for(i=0;i<arrayPalabraActual.length;i++){
                      divsPalabraActual[i].innerHTML = arrayPalabraActual[i];
                      divsPalabraActual[i].className="letra pintarError";
                  }
              }
          }

          //agrega la letra ingresada a las letras ya ingresadas que se visualizan
          document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
      }
  }
});

//Funcion que me determina si un caracter es una letra
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
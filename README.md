# Juego de Adivinar Palabras

Este es un sencillo juego de adivinar palabras creado con HTML, CSS y JavaScript. El juego selecciona aleatoriamente una palabra de una lista y el jugador debe adivinarla letra por letra antes de que se agoten sus intentos.

## Cómo jugar

1.  El juego carga una palabra oculta, mostrando un número de espacios igual al número de letras de la palabra. También se muestra una pista relacionada con la palabra.
2.  El jugador ingresa letras a través del teclado.
3.  Si la letra ingresada se encuentra en la palabra, se revelan todas las instancias de esa letra en la pantalla.
4.  Si la letra ingresada no está en la palabra, se descuenta un intento.
5.  El jugador tiene un número limitado de intentos (inicialmente 5) para adivinar la palabra completa.
6.  Si el jugador adivina la palabra correctamente, las letras se resaltan en verde y se actualiza el contador de palabras acertadas.
7.  Si el jugador agota sus intentos sin adivinar la palabra, la palabra correcta se revela en rojo.
8.  Para jugar la siguiente palabra, el jugador debe hacer clic en el botón "Siguiente Palabra".

## Estructura de archivos

* `index.html`: Contiene la estructura HTML del juego, incluyendo los elementos para mostrar la pista, la palabra oculta, los intentos restantes, las letras ingresadas, el contador de palabras acertadas y el botón para la siguiente palabra.
* `style.css` (opcional): Contiene los estilos CSS para la presentación visual del juego.
* `script.js`: Contiene la lógica JavaScript del juego, incluyendo la selección de palabras, la gestión de los intentos, la verificación de las letras ingresadas y la actualización de la interfaz de usuario.

## Listas de palabras y ayudas

Las palabras para adivinar y sus correspondientes pistas se encuentran definidas en los arreglos JavaScript `arrayPalabras` y `ayudas` dentro del archivo `script.js`.

## Contador de palabras acertadas

El juego mantiene un registro del número de palabras que el jugador ha adivinado correctamente, mostrando el progreso en relación con el número total de palabras disponibles inicialmente.

## Control de la siguiente palabra

El juego no avanza automáticamente a la siguiente palabra después de un acierto o un fallo. El jugador debe interactuar con el botón "Siguiente Palabra" para cargar una nueva palabra y continuar jugando.

## Créditos

Este juego fue desarrollado como un ejercicio de programación en JavaScript.
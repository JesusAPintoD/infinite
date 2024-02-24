document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 640;
  const canvasWidth = canvas.width; // Ancho del canvas (ajusta según tus necesidades)
  
  // Crea una nueva imagen
  const img = new Image();
  let imgNewWidth = 80;
  let posX = (canvasWidth - imgNewWidth) / 2 ; // Coordenada X inicial
  let posY = 5; // Coordenada Y inicial
  let nextPosition = 0;
  let proportion, imgNewHeight
  // Cuando la imagen se cargue, dibújala en el canvas
  img.onload = function() {
    proportion = img.width / img.height;
    imgNewHeight = imgNewWidth / proportion;
    ctx.fillStyle = 'transparent'; 
    ctx.drawImage(img, posX, posY, imgNewWidth, imgNewHeight);
  };

  // Establece la fuente de la imagen como el archivo SVG
  img.src = './assets/vikingoPixelArt.svg';

  const movementDistance = canvasWidth / 3;

    // Escucha los eventos de teclado
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      // Tecla izquierda
      nextPosition = posX - movementDistance; 
    } else if (event.key === 'ArrowRight') {
      // Tecla derecha
      nextPosition = posX + movementDistance; 
    } else {
      return
    }

    if (nextPosition < 0) {
      nextPosition = posX; // No permitas que la imagen se salga por la izquierda
    } else if (nextPosition > canvasWidth - imgNewWidth) {
      nextPosition = posX; // No permitas que la imagen se salga por la derecha
    }
    posX = nextPosition // se actualiza el valor de x
 
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    ctx.drawImage(img, posX, posY, imgNewWidth, imgNewHeight);
  });



// acciones de ganar o perder, activacion del score detener fondo

// Obtén el elemento que tiene la animación 
const boxElement = document.querySelector(".background-displacement");

// Escucha el evento de tecla Espacio
document.addEventListener("keydown", function(event) {
  document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // simula perder
      boxElement.style.animationPlayState = "paused";
    } else if (event.key === "Enter") { //simula ganar
      boxElement.style.animationPlayState = "running";
    }
  });
});



});
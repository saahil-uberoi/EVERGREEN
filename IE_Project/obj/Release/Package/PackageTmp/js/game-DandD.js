/*
 * Image Puzzle
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 * This is from a Puzzle game I made in college. I cleaned it a bit but the majority of bugs are still there 🐛. 
 * Plus by that time I used to code in spanish mostly so guess in which language are the comments and function names 🙄. 
 * I thought of changing and improving the code but I did not want to lose the essence of it.
 */
///            ///             ///              ///            ///            ///             ///              ///
///VARIABLES GLOBALES/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///
var canvasBueno;
var canvasClave;
var tamPieza = 60;
var anchoPieza;
var altoPieza;
var imagenPuzzle;
var piezas;
var piezaActual;
var piezas;
var imagenElegida;
var colorLinea = "#000";
var piezaDropActual;
var moves;
var secs;
var ratoncito;
var anchoPuzzle = 360;
var altoPuzzle = 240;
var dificultadElegida;
var stop;
var piezasMal;
var piezasX = 8;
var piezasY = 6;
var totalPiezas = 48;
///            ///             ///              ///            ///            ///             ///              ///
///RECOGIDA DE IMAGEN/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///
//preparear el drag and drop
function prepararDnD() {
    changeFavicon(); // Extra stuff
    var img = document.getElementById("img");
    var imgContainer = document.getElementById("img-container");
    var input = document.getElementById("foto");
    var canvas = document.getElementById("canvas-puzzle");
    empezar = false;
    var elemOrigen = "";
    //para recoger la imagen
    //drageando
    imgContainer.ondragover = function () {
        this.style.opacity = '0.4';
        return false;
    };
    imgContainer.ondragleave = function () {
        this.style.opacity = '1';
        return false;
    };
    imgContainer.ondrop = function (event) {
        //ahora comprobamos si esta permitida, tipo y tamaño
        event.preventDefault && event.preventDefault();
        this.className = '';
        var files = event.dataTransfer.files;
        extensiones_permitidas = new Array(".gif", ".jpg", ".jpeg", ".png");
        var archivo = files[0].name;
        var extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
        var permitida = false;
        for (var i = 0; i < extensiones_permitidas.length; i++) {
            if (extensiones_permitidas[i] == extension) {
                permitida = true;
            }
        }
        if (permitida) {
            var archivo_select = files[0];
            var size = archivo_select.size;
            if ((size / 1024) <= 500) {
                var lector = new FileReader();
                var img = document.getElementById("img");
                //la ponemos en el lugar de la imagen y que ocupe el tamaño justo
                lector.onload = function (event) {
                    img.src = event.target.result;
                    img.style.width = "360px";
                    img.style.height = "240px";
                    document.getElementById("img-container").style.backgroundImage = "none";
                    document.getElementById("comenzarBut").removeAttribute("disabled");
                    document.getElementById("comenzarBut").style.backgroundColor = "#3207bf";
                    setTimeout(function () {
                        document.getElementById("facil").click();
                    }, 100);

                    montarTablero();
                }
                imagenElegida = true;
                document.getElementById("msg-emergente1").innerHTML = "";
                document.getElementById("btn-cerrar").style.display = "none";
                lector.readAsDataURL(archivo_select);
            } else {
                document.getElementById("btn-cerrar").style.display = "inline";
                document.getElementById("msg-emergente1").innerHTML = "File size must be less than 500kb";
                input.value = "";
                imagen = "";
            }
        } else {
            document.getElementById("btn-cerrar").style.display = "inline";
            document.getElementById("msg-emergente1").innerHTML = "Just images on these formats please( .jpg, .jpeg, .png y .gif)";
            input.value = "";
            imagen = "";
        }
        this.style.opacity = '1';
        return false;
    };
}

function dragOver(e) {
    e.preventDefault();
}

function introducirImagen() {
    var input = document.getElementById("foto");
    input.click();
}

function archivoSubido(event, input) {
    extensiones_permitidas = new Array(".gif", ".jpg", ".jpeg", ".png");
    var archivo = document.getElementById("foto").value;
    var extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
    var permitida = false;
    for (var i = 0; i < extensiones_permitidas.length; i++) {
        if (extensiones_permitidas[i] == extension) {
            permitida = true;
        }
    }
    if (permitida) {
        var archivo_select = event.target.files[0];
        var size = archivo_select.size;
        if ((size / 1024) <= 500) {
            var lector = new FileReader();
            var img = document.getElementById("img");
            lector.onload = function (event) {
                img.src = event.target.result;
                img.style.width = "360px";
                img.style.height = "240px";

                document.getElementById("img-container").style.backgroundImage = "none";
                document.getElementById("comenzarBut").removeAttribute("disabled");
                document.getElementById("comenzarBut").style.backgroundColor = "#3207bf";
                setTimeout(function () {
                    document.getElementById("facil").click();
                }, 100);
                montarTablero();
            }
            imagenElegida = true;
            document.getElementById("msg-emergente1").innerHTML = "";
            document.getElementById("btn-cerrar").style.display = "none";
            lector.readAsDataURL(archivo_select);
        } else {
            document.getElementById("btn-cerrar").style.display = "inline";
            document.getElementById("msg-emergente1").innerHTML = "File size must be less than 500kb";
            input.value = "";
            imagen = "";
        }
    } else {
        document.getElementById("btn-cerrar").style.display = "inline";
        document.getElementById("msg-emergente1").innerHTML = "Just images on these formats please( .jpg, .jpeg, .png y .gif)";
    }
}
//cuando el tamaño es muy grande
function largeSize() {

}

///            ///             ///              ///            ///            ///             ///              ///
///ELECCION DE DIFICULTAD Y MONTAR TABLERO/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///
//priemro elegimos la dificultad
function chupao() {
    dificultadElegida = true;
    anchoPieza = 120;
    altoPieza = 120;
    limpiarTablero();
    piezasX = 3;
    piezasY = 2;
    tamPieza = 120;
    totalPiezas = 6;
    piezasPuzzle = new Array(piezasX);
    for (var i = 0; i < piezasX; i++) {
        piezasPuzzle[i] = new Array(piezasY);
    }
    prepararDnD();
    montarTablero();
}

function facil() {
    dificultadElegida = true;
    anchoPieza = 60;
    altoPieza = 60;
    limpiarTablero();
    piezasX = 6;
    piezasY = 4;
    tamPieza = 60;
    totalPiezas = 24;
    piezasPuzzle = new Array(piezasX);
    for (var i = 0; i < piezasX; i++) {
        piezasPuzzle[i] = new Array(piezasY);
    }
    prepararDnD();
    montarTablero();
}

function media() {
    dificultadElegida = true;
    anchoPieza = 40;
    altoPieza = 40;
    limpiarTablero();
    piezasX = 9;
    piezasY = 6;
    tamPieza = 40;
    totalPiezas = 54;
    piezasPuzzle = new Array(piezasX);
    for (var i = 0; i < piezasX; i++) {
        piezasPuzzle[i] = new Array(piezasY);
    }
    prepararDnD();
    montarTablero();
}

function dificil() {
    dificultadElegida = true;
    anchoPieza = 30;
    altoPieza = 30;
    limpiarTablero();
    piezasX = 12;
    piezasY = 8;
    tamPieza = 30;
    totalPiezas = 96;
    piezasPuzzle = new Array(piezasX);
    for (var i = 0; i < piezasX; i++) {
        piezasPuzzle[i] = new Array(piezasY);
    }
    prepararDnD();
    montarTablero();
}
/// MONTAR EL TABLERO
function cambiarColorlina(e) {
    colorLinea = document.getElementById("colLinea").value;
    if (imagenElegida == true) {
        montarTablero();
    }
}
//MONTAR TABLERO CON LA IMAGEN
function montarTablero() {
    //primero limpio el tablero
    document.getElementById("canvas-puzzle").getContext('2d').clearRect(0, 0, 360, 240);
    // Se accede al elemento <canvas> en el que dibujar
    var cv = document.getElementById("canvas-puzzle");
    //cogemos la imagen y la ponemos de fondo (si hay)
    var imagen = new Image();
    imagen.src = document.getElementById("img").src;
    // Se obtiene el contexto 2D del canvas
    var cntxt = cv.getContext('2d');
    cntxt.drawImage(imagen, 0, 0, 360, 240);
    colorLinea = document.getElementById("colLinea").value;
    cntxt.strokeStyle = colorLinea;
    cntxt.lineWidth = 3;
    // vertixales y horzontales
    for (i = 2; i < 360; i = i + tamPieza) {
        cntxt.moveTo(i, 0);
        cntxt.lineTo(i, 240);
    }
    for (i = 2; i < 240; i = i + tamPieza) {
        cntxt.moveTo(0, i);
        cntxt.lineTo(360, i);
    }
    //ñineas fuera del for
    cntxt.moveTo(358, 0);
    cntxt.lineTo(358, 240);
    cntxt.moveTo(0, 238);
    cntxt.lineTo(358, 238);
    cntxt.stroke();
}
///            ///             ///              ///            ///            ///             ///              ///
///COMIENZO/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///

//cogemos la imagen
function comenzar() {
    document.getElementById("comenzarBut").setAttribute("disabled", "");
    document.getElementById("comenzarBut").style.backgroundColor = "#c3c3c3";
    document.getElementById("terminarBut").removeAttribute("disabled");
    document.getElementById("terminarBut").style.backgroundColor = "#c73f22";
    document.getElementById("ayudaBut").removeAttribute("disabled");
    document.getElementById("ayudaBut").style.backgroundColor = "#c722b1";
    //comprobamos que se ha elegido la dificultad
    if (dificultadElegida == true) {
        if (imagenElegida == true) {
            document.getElementById("msg-emergente2").innerHTML = "";
            document.getElementById("btn-cerrar2").style.display = "none";
            document.getElementById("introducirImg").style.display = "none";
            document.getElementById("seleccionDificultad").style.display = "none";
            document.getElementById("img-container2").style.display = "block";
            document.getElementById("mov-container").style.display = "block";
            moves = 0;
            secs = 0
            piezasMal = 0;
            temporizador("on");
            empezar = true;
            document.getElementById("paLimpiar").style.display = "none";
            inicio();

        } else {
            document.getElementById("btn-cerrar2").style.display = "inline";
            document.getElementById("msg-emergente2").innerHTML = "You must introduce an image";
        }

    } else {
        document.getElementById("btn-cerrar2").style.display = "inline";
        document.getElementById("msg-emergente2").innerHTML = "You must choose a difficulty";
    }
}
//inicio del juego
function inicio() {
    var img25 = document.getElementById("img").src;
    var cv25 = document.getElementById("canvas-puzzle25");
    var cntxt25 = cv25.getContext('2d');
    var imagen25 = new Image();
    imagen25.src = img25;
    cntxt25.drawImage(imagen25, 0, 0, 360, 240);
    document.getElementById("imgAyuda").src = img25;
    imagenPuzzle = new Image();
    imagenPuzzle.addEventListener('load', onImage, false);
    imagenPuzzle.src = cv25.toDataURL();
    imagenPuzzle.width = "360px";
    imagenPuzzle.height = "240px";
    imagenPuzzle.style.width = "360px";
    imagenPuzzle.style.height = "240px";


}
//cuando la imagen esta cargada seteamos el canvas y iniciamos el puzzle
function onImage(e) {
    setCanvasBueno();
    initPuzzle();

}
//elegimos el canvas
function setCanvasBueno() {
    canvasBueno = document.getElementById('canvas-puzzle3');
    canvasBueno.style.display = "inline";
    canvasClave = canvasBueno.getContext('2d');
}
//iniciamos el puzzle
function initPuzzle() {
    piezas = [];
    ratoncito = {
        x: 0,
        y: 0
    };
    piezaActual = null;
    piezaDropActual = null;
    canvasClave.drawImage(imagenPuzzle, 0, 0, anchoPuzzle, altoPuzzle, 0, 0, anchoPuzzle, altoPuzzle);
    buildPieces();
}
//contruimos un array de piezas
function buildPieces() {
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0; i < totalPiezas; i++) {
        piece = {};
        piece.sx = xPos;
        piece.sy = yPos;
        piezas.push(piece);
        xPos += anchoPieza;
        if (xPos >= anchoPuzzle) {
            xPos = 0;
            yPos += altoPieza;
        }
    }
    // document.onmousedown = shufflePuzzle;
    shufflePuzzle();
}
//creamos el array desordenado
function shufflePuzzle() {
    piezas = desordenar(piezas);
    canvasClave.clearRect(0, 0, anchoPuzzle, altoPuzzle);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0; i < piezas.length; i++) {
        piece = piezas[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        canvasClave.drawImage(imagenPuzzle, piece.sx, piece.sy, anchoPieza, altoPieza, xPos, yPos, anchoPieza, altoPieza);
        canvasClave.strokeStyle = colorLinea;
        canvasClave.lineWidth = 3;
        canvasClave.strokeRect(xPos, yPos, anchoPieza, altoPieza);
        xPos += anchoPieza;
        if (xPos >= anchoPuzzle) {
            xPos = 0;
            yPos += altoPieza;
        }
    }
    document.onmousedown = onPuzzleClick;
    resetearPuzzleYCheckWin();
}
//para desordenar las piezas
function desordenar(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

//chekear que pieza clikamos y donde esta el raton
function onPuzzleClick(e) {
    if (e.layerX || e.layerX == 0) {
        ratoncito.x = e.layerX;
        ratoncito.y = e.layerY;
    } else if (e.offsetX || e.offsetX == 0) {
        ratoncito.x = e.offsetX;
        ratoncito.y = e.offsetY;
    }
    piezaActual = checkPieceClicked(); //comprobamos la pieza clickada
    if (piezaActual != null) {
        canvasClave.clearRect(piezaActual.xPos, piezaActual.yPos, anchoPieza, altoPieza);
        canvasClave.save(); //lo guardamos para no sobrescribirlo mienras drageamos
        canvasClave.globalAlpha = .9;
        canvasClave.drawImage(imagenPuzzle, piezaActual.sx, piezaActual.sy, anchoPieza, altoPieza, ratoncito.x - (anchoPieza / 2), ratoncito.y - (altoPieza / 2), anchoPieza, altoPieza);
        canvasClave.restore();
        document.onmousemove = updatePuzzle;
        document.onmouseup = pieceDropped;
    }
}
//para coger la pieza que clickamos
function checkPieceClicked() {
    var i;
    var piece;
    for (i = 0; i < piezas.length; i++) {
        piece = piezas[i];
        if (ratoncito.x < piece.xPos || ratoncito.x > (piece.xPos + anchoPieza) || ratoncito.y < piece.yPos || ratoncito.y > (piece.yPos + altoPieza)) {
            //PIECE NOT HIT
        } else {
            return piece;
        }
    }
    return null;
}
//Actualizamos el puzzle
function updatePuzzle(e) {
    piezaDropActual = null;
    if (e.layerX || e.layerX == 0) {
        ratoncito.x = e.layerX;
        ratoncito.y = e.layerY;
    } else if (e.offsetX || e.offsetX == 0) {
        ratoncito.x = e.offsetX;
        ratoncito.y = e.offsetY;
    }
    canvasClave.clearRect(0, 0, anchoPuzzle, altoPuzzle);
    var i;
    var piece;
    for (i = 0; i < piezas.length; i++) {
        piece = piezas[i];
        if (piece == piezaActual) {
            continue;
        }
        canvasClave.drawImage(imagenPuzzle, piece.sx, piece.sy, anchoPieza, altoPieza, piece.xPos, piece.yPos, anchoPieza, altoPieza);
        canvasClave.strokeRect(piece.xPos, piece.yPos, anchoPieza, altoPieza);
        if (piezaDropActual == null) {
            if (ratoncito.x < piece.xPos || ratoncito.x > (piece.xPos + anchoPieza) || ratoncito.y < piece.yPos || ratoncito.y > (piece.yPos + altoPieza)) {
                //NOT OVER
            } else {
                piezaDropActual = piece;
                canvasClave.save();
                canvasClave.globalAlpha = .4;
                canvasClave.fillStyle = "#a2ade4";
                canvasClave.fillRect(piezaDropActual.xPos, piezaDropActual.yPos, anchoPieza, altoPieza);
                canvasClave.restore();
            }
        }
    }
    canvasClave.save();
    canvasClave.globalAlpha = .6;
    canvasClave.drawImage(imagenPuzzle, piezaActual.sx, piezaActual.sy, anchoPieza, altoPieza, ratoncito.x - (anchoPieza / 2), ratoncito.y - (altoPieza / 2), anchoPieza, altoPieza);
    canvasClave.restore();
    canvasClave.strokeRect(ratoncito.x - (anchoPieza / 2), ratoncito.y - (altoPieza / 2), anchoPieza, altoPieza);
}
//cuando se suelta la pieza
function pieceDropped(e) {
    document.onmousemove = null;
    document.onmouseup = null;
    if (piezaDropActual != null) {
        var tmp = {
            xPos: piezaActual.xPos,
            yPos: piezaActual.yPos
        };
        piezaActual.xPos = piezaDropActual.xPos;
        piezaActual.yPos = piezaDropActual.yPos;
        piezaDropActual.xPos = tmp.xPos;
        piezaDropActual.yPos = tmp.yPos;
    }
    moves++;
    document.getElementById("movimientos").innerHTML = "";
    document.getElementById("movimientos").innerHTML = moves;
    resetearPuzzleYCheckWin();
}
//resetear el puzlle y comprobar si hemos ganado
function resetearPuzzleYCheckWin() {
    canvasClave.clearRect(0, 0, anchoPuzzle, altoPuzzle);
    var gameWin = true;
    var i;
    var piece;
    piezasMal = 0;
    for (i = 0; i < piezas.length; i++) {
        piece = piezas[i];
        canvasClave.drawImage(imagenPuzzle, piece.sx, piece.sy, anchoPieza, altoPieza, piece.xPos, piece.yPos, anchoPieza, altoPieza);
        canvasClave.strokeStyle = colorLinea;
        canvasClave.strokeRect(piece.xPos, piece.yPos, anchoPieza, altoPieza);
        if (piece.xPos != piece.sx || piece.yPos != piece.sy) {

            piezasMal++;
            gameWin = false;
        }
    }
    document.getElementById("piezasMal").innerHTML = "";
    document.getElementById("piezasMal").innerHTML = piezasMal;
    if (gameWin) {
        temporizador("off");
        crearMensaje("sacabo");

    }
}
///            ///             ///              ///            ///            ///             ///              ///
///FINAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///
//finalizar antes de acabar
function finalizar() {
    temporizador("off");
    crearMensaje("finalizar");
}
//reiniciar el juego mediante un get a el mismo html del principio
//Asi me ahorro mucho work :D
function reiniciar() {
    stop = false;
    moves = 0;
    secs = 0;
    piezasMal = 0;
    let xhr = new XMLHttpRequest();
    let urlReinicio = 'https://raw.githubusercontent.com/reymon359/web-experiments/master/Image%20Puzzle/reinicio.html';
    xhr.open('GET', urlReinicio, true);
    xhr.send();
    xhr.onload = function () {
        document.getElementById("sectionPpal").innerHTML = "";
        document.getElementById("sectionPpal").innerHTML = xhr.responseText;
    }

}
///            ///             ///              ///            ///            ///             ///              ///
///UTILES/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///            ///             ///              ///            ///            ///             ///              ///
//PARA LIMPIAR EL TABLERO
function limpiarTablero() {
    var canvasPuzzle = "<canvas id='canvas-puzzle' width='360' height='240' ></canvas>"
    document.getElementById("paLimpiar").innerHTML = "";
    document.getElementById("paLimpiar").innerHTML = canvasPuzzle;
}
//ayuda para ver que piezas faltan
function ayuda() {
    var i;
    var piece;
    for (i = 0; i < piezas.length; i++) {
        piece = piezas[i];
        if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
            canvasClave.strokeStyle = "red";
            canvasClave.strokeRect(piece.xPos, piece.yPos, anchoPieza, altoPieza);
        }
    }
}
//FUNCION TEMPORIZADOR
function temporizador(aux) {
    if (aux == "off") {
        stop = true;
    }
    if (aux == "on") {
        setTimeout(function () {
            secs++;
            document.getElementById("segundos").innerHTML = "";
            document.getElementById("segundos").innerHTML = secs;
            if (stop != true) {
                temporizador("on");
            }
        }, 1000);
    }

}

///-------------MENSAJE--------------------------------------------
function crearMensaje(aux) {
    let capa_fondo = document.createElement('div'),
        capa_frente = document.createElement('div'),
        html = '';
    capa_fondo.appendChild(capa_frente);
    //finalizar
    if (aux == 'finalizar') {
        html +=
            '<h2>Game ended</h2>';
        html +=
            "<p> You left " + piezasMal + "  pieces in wrong place after " + (moves) + " moves and " + (secs + 1) + " seconds. </p>"
        html +=
            '<button id="boton" onclick="this.parentNode.parentNode.remove();reiniciar();">Close</button>';
    }
    if (aux == 'sacabo') {
        html +=
            '<h2>¡¡¡Great Job!!! </h2>';
        html +=
            "<p> You solved the puzzle in " + moves + " moves and " + (secs + 1) + " seconds. </p>"
        html +=
            '<button id="boton" onclick="this.parentNode.parentNode.remove();reiniciar();">Close</button>';
    }
    //le añadimos el html a la capa del mensaje
    capa_frente.innerHTML = html;
    capa_fondo.classList.add('capa-fondo'); // le ponemos clase para darle estilo luego
    capa_frente.classList.add('capa-frente');
    document.body.appendChild(capa_fondo); // le ponemos al body la capa de fondo como hijo
    document.getElementById('boton').focus();

}
//para los mensajes de los div
function cerrarMsg() {
    document.getElementById("btn-cerrar").style.display = "none";
    document.getElementById("btn-cerrar2").style.display = "none";
    document.getElementById("msg-emergente1").innerHTML = "";
    document.getElementById("msg-emergente2").innerHTML = "";
}

///-------------EXTRA--------------------------------------------
document.head || (document.head = document.getElementsByTagName('head')[0]);

function changeFavicon() {
    let link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = `https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/jigsaw-puzzle-piece_1f9e9.png`;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}
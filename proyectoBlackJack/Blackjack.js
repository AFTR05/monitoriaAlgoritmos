//Proyecto de blackjack 
//permitira jugar entre un jugador y la maquina desde la consola
//Se jugara por 3 rondas, se decidira si toma una carta o no


let player= prompt("Ingrese su nombre: ");
let cardRandom=0;
let playerCardVal=true;
operacion="";
alert("Bienvenido " + player);
alert("Empecemos a jugar");
cardRandom=Math.floor(Math.random() * 10)+1;
let pointsPlayer=cardRandom;
alert(`Sacaste una carta con puntaje de ${cardRandom}, Tu puntaje ahora es: ${pointsPlayer}.\nAhora sigue el turno de la maquina`)
let pointsMachine=Math.floor(Math.random() * 10)+1;
do {
    if (prompt(`Tu puntaje es ${pointsPlayer} desea otra carta? (y/n): `)=="y" ) {
        cardRandom=Math.floor(Math.random() * 10)+1;
        pointsPlayer+=cardRandom;
        alert(`Sacaste una carta con puntaje de ${cardRandom}, Tu puntaje ahora es: ${pointsPlayer}.\nAhora sigue el turno de la maquina`)    
        if (pointsPlayer>=21) {
            playerCardVal=false;
        }
    }else playerCardVal=false;
} while (playerCardVal!=false);
alert("Esta bien, espera las decisiones de tu rival....")

do {
    if (pointsMachine <= 17 ){
        pointsMachine+=Math.floor(Math.random() * 10)+1;
        console.log("Puntaje de maquina: "+pointsMachine);
        operacion= "sigo"
    } else operacion= "finish"
} while (operacion!="finish");
    
alert("Decisiones finalizadas, miremos quien gano"); 
    
if (pointsPlayer>pointsMachine && pointsPlayer<=21 || pointsMachine<pointsPlayer && pointsMachine>21) {
    document.write(`El ganador es: ${player}, con un puntaje de ${pointsPlayer}.\nDebido a que el puntaje del rival fue ${pointsMachine} \n Felicitaciones!!!!`)
} else if(pointsMachine<pointsPlayer && pointsMachine<=21 || pointsPlayer>pointsMachine && pointsPlayer>21) {
    document.write(`Te gano tu rival: la computadora, con un puntaje de ${pointsMachine}.\nYa que tu puntaje fue ${pointsPlayer}\nSuerte en la proxima :(`)
}else document.write(`No hubo ganador.\nTu puntaje es: ${pointsPlayer}\nPuntaje de maquina es ${pointsMachine}`);







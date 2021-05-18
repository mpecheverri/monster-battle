
 //creando funcion para definir valor de golpe
function getRandomNumber(max = 1, min = 1) {
return min + Math.floor(Math.random() * max);
}

//hace el cambio en la salud y en el porcentaje de la barra
function calculateStatus(initial, current, count) {
const newHealth= Math.max(0, current - count);
const newPercentage= Math.ceil((newHealth / initial) * 100);
return {
    newHealth,
    newPercentage,
}
};

//cambiar color de la barra
function calculateBarColor(percentage) {
let color =""
if (percentage > 66) {
    color = "green"
} else if (percentage > 33) {
    color = "orange"
} else {
    color = "red"
}
return color
}     
//Programe to count football points of teams
function footballPoints(win, draw, lose){
    var win = 3*win;
    var draw = 1*draw;
    var lose = 0*lose;
    var total = (win + draw + lose);
    return total;
}
console.log(footballPoints(3, 5, 8))
//Programe that counts number of legs of animals on a farm
function animals(Chicken, Cows, Pigs){
    var chicken = Chicken * 2;
    var cows = Cows * 4;
    var pigs = Pigs *4;
    var animalLegs = (chicken + cows + pigs);
    return animalLegs;
}
console.log(animals(3, 5, 4))
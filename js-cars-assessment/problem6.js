// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.
//   Execute a function and return an array that only contains BMW and Audi cars.
//   Once you have the BMWAndAudi array, use JSON.stringify() to show the results
//  of the array in the console.


function problem6(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        if(inventory[i]["car_make"] === "Audi" || inventory[i]["car_make"] === "BMW"){
            result.push(inventory[i]);
        }
    }
    return result;
}

module.exports = problem6


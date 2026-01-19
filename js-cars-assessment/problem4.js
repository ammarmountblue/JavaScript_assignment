// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
//  Execute a function that will return an array from the dealer data 
// containing only the car years and log the result in the console as it was returned.
function problem4(inventory){
    let model4 = [];
    for(let i = 0 ; i < inventory.length; i++){
        model4.push(inventory[i]["car_year"])
    }
    return model4;
}

module.exports = problem4;
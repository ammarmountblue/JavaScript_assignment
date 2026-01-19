// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
// Execute a function to Sort all the car model names into alphabetical order and 
// log the results in the console as it was returned.

function problem3(inventory) {
    let model3 = [];
    for(let i = 0;i<inventory.length;i++){
        model3.push(inventory[i]["car_model"])
    }
    model3.sort((a,b)=> a.localeCompare(b));
    return model3
}

module.exports = problem3;
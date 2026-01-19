//    Given the dataset of individuals, write a function 
// that accesses and returns the email addresses of all individuals.

function problem1(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        result.push(inventory[i]["email"])
    }
    return result
}

module.exports = problem1;
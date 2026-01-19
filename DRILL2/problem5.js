//    Implement a loop to access and print the ages of all individuals in the dataset.

function problem5(inventory){
    const result = [];
    for(let i = 0;i<inventory.length;i++){
        result.push(inventory[i]["age"])
    }
    return result;
}

module.exports = problem5
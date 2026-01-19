//    Implement a loop to access and log the city and country of each individual in the dataset.


function problem8(inventory){
    const result = [];
    for(let i = 0;i<inventory.length;i++){
        result.push({city : inventory[i]["city"] , country : inventory[i]["country"]})
    }
    return result;
}

module.exports = problem8;
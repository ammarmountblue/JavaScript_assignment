//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function problem6(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        result.push(inventory[i]["hobbies"][0])
    }
    return result;
}
module.exports = problem6
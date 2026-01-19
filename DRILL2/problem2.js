//    Implement a function that retrieves and prints the hobbies 
//    of individuals with a specific age, say 30 years old.

function problem2(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        if(inventory[i]["age"]===30){
            result.push(inventory[i]["hobbies"])
        }
    }
    return result;
}

module.exports = problem2;

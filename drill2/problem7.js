//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function problem7(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        if(inventory[i]["age"] === 25){
            result.push({name : inventory[i]["name"] , email : inventory[i]["email"]})
        }
    }
    return result;
}

module.exports = problem7;
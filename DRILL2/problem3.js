//    Create a function that extracts and displays the names of individuals
//  who are students (`isStudent: true`) and live in Australia.

function problem3(inventory){
    let result = [];
    for(let i = 0;i<inventory.length;i++){
        if(inventory[i]["isStudent"] === true && inventory[i]["country"] === "Australia"){
            result.push(inventory[i]["name"]);
        }
    }
    return result;
}

module.exports = problem3
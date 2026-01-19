// Q2 Find all users staying in Germany.

function problem2(inventory){
    const result = [];
    for(let key in inventory){
        const person = inventory[key];
        const location = person.nationality;
        if(location === "Germany"){
            result.push(person);
        }
    }
    return result;
}

module.exports = problem2
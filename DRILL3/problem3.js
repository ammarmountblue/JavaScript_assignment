// Q3 Find all users with masters Degree.

function problem3(inventory){
    const result = [];
    for(let key in inventory){
        const person = inventory[key];
        const qualification = person.qualification;
        if(qualification === "Masters"){
            result.push(key);
        } 
    }
    return result;
}

module.exports = problem3;
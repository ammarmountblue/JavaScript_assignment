// Q4 Group users based on their Programming language mentioned in their designation.
function groupByLanguage(users) {
    const result = {};
    for (let key in users) {
        const person = users[key];
        const designation = person.desgination;
        let language = designation.split(" ")[0]; 
        if (!result[language]) {
            result[language] = [];
        }
        result[language].push(person);
    }
    return result;
}

module.exports = groupByLanguage;

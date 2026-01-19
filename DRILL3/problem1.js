// Q1 Find all users who are interested in playing video games.
function problem1(inventory) {
    const result = [];
    for (let key in inventory) {
        const person = inventory[key];
        const interests = person.interests;
        for (let i = 0; i < interests.length; i++) {
            if (interests[i].includes("Video Games")) {
                result.push(person);
                break;
            }
        }
    }
    return result;
}
module.exports = problem1;

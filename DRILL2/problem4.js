//    Write a function that accesses and logs the name and
//  city of the individual at the index position 3 in the dataset.

function problem4(inventory){
    const result = [];
    result.push({
        name: inventory[3].name,
        city: inventory[3].city
    });
    return result;
}

module.exports = problem4;
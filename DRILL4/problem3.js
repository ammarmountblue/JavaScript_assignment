  // Return an array with all the full names

  function problem3(inventory){
    const result = [];
    for(let key in inventory){
        const order = inventory[key];
        if(!order.name){
            continue;
        }
        const nameDetail = order.name;
        const firstName = Array.isArray(nameDetail) ? nameDetail[0] 
        : nameDetail
        const lastName = Array.isArray(nameDetail) ? nameDetail[1] 
        : nameDetail
        const fullName = firstName + " " + lastName;
        result.push(fullName);
    }
    return result;
  }
  module.exports = problem3;
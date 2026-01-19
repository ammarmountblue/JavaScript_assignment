function problem1(inventory) {
    const result = {};
    for (let key in inventory) {
        const order = inventory[key];
        if (!order.hr) {
            continue;
        }
        const roleDetail = order.hr;
        const role = Array.isArray(roleDetail) ? roleDetail[0] 
        : roleDetail;
        const name = order.name;
        if (!result[role]) {
            result[role] = [];
        }
        result[role].push(name);
    }
    return result;
}
module.exports = problem1;



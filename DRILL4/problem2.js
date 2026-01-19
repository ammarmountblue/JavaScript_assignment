  // Find average salary based for each role 
  // ( You can find in hr array )
  function problem2(inventory){
    const result = {};
    const avgSalaryOfEachDepartment = {};
    for(let key in inventory){
      const order = inventory[key];
      if(!order.hr){
        continue;
      }
      const roleDetail = order.hr;
      const role = Array.isArray(roleDetail) ? roleDetail[0] 
        : roleDetail
      const salary = Array.isArray(roleDetail) ? roleDetail[1] 
        : roleDetail
      if (!result[role]) {
          result[role] = [];
      }
      result[role].push(salary);
    }
    for(let key in result){
      let role = key;
      let salaryArray = result[key];
      let totalSalary = 0;
      for(let i = 0;i<salaryArray.length;i++){
        let num = parseInt(salaryArray[i].replace("$", "").replace(",", ""));
        totalSalary += num;
      }
      let avgSalary = totalSalary/salaryArray.length;
      avgSalaryOfEachDepartment[role] = avgSalary;
      
    }
     return avgSalaryOfEachDepartment;
  }
  module.exports = problem2;
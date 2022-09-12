function forEach(array, operation) {
	for (let i=0; i<array.length; i++) {
    operation(array, i);
    newEmployeeSalaries.push(array[i])
  }
}

function increase(array, i) {
    array[i] = array[i] + 5000;
    return array[i];
}

  
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
  

forEach(employeeSalaries, increase);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
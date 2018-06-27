//get
$.ajax("http://localhost:3000/employee").then(allEmployee => console.log(allEmployee))
$.ajax("http://localhost:3000/employeeStatus").then(allEmployeeDatabase => console.log(allEmployeeDatabase))

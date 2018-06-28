//get
$.ajax("http://localhost:3000/employee").then(allEmployee => console.log(allEmployee))
$.ajax("http://localhost:3000/employeeStatus").then(allEmployeeDatabase => console.log(allEmployeeDatabase))

const divRef = document.querySelector(".employee-card");
const $artEmployee = ("<article>").addClass("employee").appendTo(divRef)
const $h1Name = ("<h1>").addClass
//variables
const divRef = document.querySelector(".employee-card");
// const $h1Name = $("<h1>").addClass("employee-name").appendTo($artEmployee)

//get functions return ajax gives us the object, ajax without return give us nothing
const getEmployee = (id) =>{
    return $.ajax(`http://localhost:3000/employee/${id}`)
}


const getDepartment =(id) =>{
    return $.ajax(`http://localhost:3000/department/${id}`)
}

const getComputer =(id) =>{
    return $.ajax(`http://localhost:3000/computer/${id}`)
}

const getEmployeeStatus = ()=>{
    return $.ajax("http://localhost:3000/employeeStatus")
}

// function calls for testing

getEmployeeStatus().then((statusResponse)=>{
    console.log("response",statusResponse)
    statusResponse.forEach(element =>{
        console.log("element employee id",element.employeeId)
        const $artEmployee = $("<article>").addClass("employee")
        getEmployee(element.employeeId).then((employeeResponse) =>{
            console.log(employeeResponse.name)
            $artEmployee.text(employeeResponse.name).appendTo(divRef)
            getDepartment(element.departmentId).then((departmentResponse)=>{
                const $paraDepart =$("<p>").addClass("employee-department").text(departmentResponse.department).appendTo($artEmployee)
                    getComputer(element.computerId).then((computerResponse)=>{
                        const $paraComputer =$("<p>").addClass("employee-computer").text(computerResponse.computer).appendTo($artEmployee)
                    
                })
                
            })
        })
    }
)


})
//
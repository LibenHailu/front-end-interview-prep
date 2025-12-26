// import { data } from "./data"
const data = [
    {
        fullName: "Liben",
        role: "Admin",
    }
]


const root = document.getElementById("root")

const employeesContainer = document.createElement("ul")

data.forEach(employee => {
    const employeeContainer = document.createElement("li")
    employeeContainer.classList.add("employee")

    const employeeItem = document.createElement("p")
    employeeItem.textContent = employee.fullName

    const removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.addEventListener("click", () => {
        employeeContainer.removeChild(employeeItem)
        employeeContainer.removeChild(removeButton)
    })

    employeeContainer.appendChild(employeeItem)
    employeeContainer.appendChild(removeButton)
    employeesContainer.appendChild(employeeContainer)
})

root.append(employeesContainer)

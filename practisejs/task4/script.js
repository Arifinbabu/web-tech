
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const departmentInput = document.getElementById("department");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentTable = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

function addStudentRow() {
    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const department = departmentInput.value.trim();
    if (name === "" || roll === "" || department === "") {
        alert("All fields are required.");
        return;
    }
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const rollCell = document.createElement("td");
    rollCell.textContent = roll;
    row.appendChild(rollCell);

    const departmentCell = document.createElement("td");
    departmentCell.textContent = department;
    row.appendChild(departmentCell);
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteStudentRow(row);
    };
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    studentTable.appendChild(row);
    nameInput.value = "";
    rollInput.value = "";
    departmentInput.value = "";
}
function deleteStudentRow(row) {
    studentTable.removeChild(row);
}
addStudentBtn.addEventListener("click", addStudentRow);

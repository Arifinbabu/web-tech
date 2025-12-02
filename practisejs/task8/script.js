
const userTypeSelect = document.getElementById("userType");
const rollNumberDiv = document.getElementById("rollNumberDiv");
const departmentDiv = document.getElementById("departmentDiv");
userTypeSelect.addEventListener("change", function() {
    const userType = userTypeSelect.value;
    if (userType === "student") {
        rollNumberDiv.style.display = "block"; 
        departmentDiv.style.display = "none"; 
    } else if (userType === "teacher") {
        rollNumberDiv.style.display = "none"; 
        departmentDiv.style.display = "block"; 
    }
});
window.onload = function() {
    userTypeSelect.dispatchEvent(new Event("change"));
}

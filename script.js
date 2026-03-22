function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === "") {
        alert("Fill all fields!");
        return false;
    }
}

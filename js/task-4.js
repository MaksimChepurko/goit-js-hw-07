const form = document.querySelector(".login-form");
form.addEventListener("submit", submit)

function submit (event) {
    event.preventDefault();
    const formData = event.target;
    const userData = {};
    userData.email = formData.elements.email.value.trim();
    userData.password = formData.elements.password.value.trim();
    if (userData.email.replace(/ /g, "") !== "" && userData.password.replace(/ /g, "") !== "") {
        console.log(userData);
        formData.reset();
    } else {
        alert("All form must be filled in");
    }
}
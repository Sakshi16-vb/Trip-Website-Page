//html page//

var Today = new Date();

var month = Today.getMonth() + 1;
var day = Today.getDate() + 1;
var year = Today.getFullYear();

if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();

var Date = year + '-' + month + '-' + day;
document.getElementById('checkin').setAttribute('min', Date);

function popUp() {
        alert("Your Booking Successfull!");
}



//registration form//

function validateForm() {
    var fullname = document.getElementById("fullname").value;
    var contact = document.getElementById("contact").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword= document.getElementById("confirmpassword").value;
    var gender = document.getElementById("gender").value;

    // Simple validation
    if (fullname.trim() === "" || contact.trim() === "" || dob.trim() === "" || email.trim() === "" || password.trim() === "" || confirmpassword.trim() === "" || gender === "") {
        alert("All fields are required");
        return false;
    }
    return true;
}
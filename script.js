function isEmail(email) {
    const regex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    return regex.test(email);
}

function isPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function toggleConfirmPassword() {
    const confirmField = document.getElementById("confirmpassword");
    confirmField.type = confirmField.type === "password" ? "text" : "password";
}

$('#submitbutton').click(function () {
    let errorMessage = '';
    let missingField = '';

    $('#error-box').html('');
    $('#success-box').html('');

    if ($('#email').val() === "") {
        missingField += '<p>Email is required.</p>';
    }
    if ($('#phoneno').val() === "") {
        missingField += '<p>Phone number is required.</p>';
    }
    if ($('#password').val() === "") {
        missingField += '<p>Password is required.</p>';
    }
    if ($('#confirmpassword').val() === "") {
        missingField += '<p>Confirm password is required.</p>';
    }

    if (!isEmail($('#email').val())) {
        errorMessage += '<p>Invalid email format.</p>';
    }
    if (!$.isNumeric($('#phoneno').val())) {
        errorMessage += '<p>Phone number must be numeric.</p>';
    }
    if ($('#phoneno').val().length !== 10) {
        errorMessage += '<p>Phone number must be exactly 10 digits.</p>';
    }
    if (!isPassword($('#password').val())) {
        errorMessage += '<p>Password must be 8+ characters and include uppercase, lowercase, and a number.</p>';
    }
    if ($('#password').val() !== $('#confirmpassword').val()) {
        errorMessage += '<p>Passwords do not match.</p>';
    }

    if (missingField || errorMessage) {
        $('#error-box').html(missingField + errorMessage);
        $('#error-box').css('display', 'block');
    } else {
        $('#success-box').html('<p>You are successfully registered!</p>');
        $('#success-box').css('display', 'block');
    }
    if (missingField == "" && errorMessage == "") {
        $('#error-box').css('display', 'none');
    }
});

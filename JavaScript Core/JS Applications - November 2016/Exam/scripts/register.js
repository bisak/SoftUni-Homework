function registerUser() {
    let userData = {
        username: $('#registerUsername').val(),
        password: $('#registerPasswd').val(),
        name: $('#registerName').val()
    };

    if (userData.username.length && userData.password.length) {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: getKinveyAppAuthHeaders(),
            data: userData,
        }).then(registerSuccess).catch(handleAjaxError);

        function registerSuccess(userInfo) {
            showUserHomeView();
            saveAuthInSession(userInfo);
            hideShowMenuLinks();
            $('#registerUsername').val("");
            $('#registerPasswd').val("");
            $('#registerName').val("");
            showUserGreeting();
            showSuccessAlert("User registration successful.");
        }
    }
}

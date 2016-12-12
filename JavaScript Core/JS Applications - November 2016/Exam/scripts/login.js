function loginUser() {
    let userData = {
        username: $('#loginUsername').val(),
        password: $('#loginPasswd').val()
    };

    if (userData.username.length && userData.password.length) {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: getKinveyAppAuthHeaders(),
            data: userData
        }).then(loginSuccess).catch(handleAjaxError);

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showUserHomeView();
            hideShowMenuLinks();
            $('#loginUsername').val("");
            $('#loginPasswd').val("");
            showUserGreeting();
            showSuccessAlert("Login successful.");
        }
    }
}

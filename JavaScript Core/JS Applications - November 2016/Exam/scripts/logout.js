function logoutUser() {
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
        headers: getKinveyUserAuthHeaders()
    }).then(logoutSuccess).catch(handleAjaxError);

    function logoutSuccess() {
        sessionStorage.clear();
        showAppHomeView();
        hideShowMenuLinks();
        showSuccessAlert("Logout successful.")
    }
}
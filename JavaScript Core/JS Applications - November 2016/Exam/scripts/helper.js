/*App constants*/
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_Ski3Ou9ml";
const kinveyAppSecret = "ac38685268db4b1ab2760640a8c1ea83";

function getKinveyAppAuthHeaders() {
    return {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };
}

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };
}
function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON &&
        response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showErrorAlert(errorMsg);
}


$(document).on({
    ajaxStart: function () {
        showLoadingAlert();
    },
    ajaxStop: function () {
        hideLoadingAlert();
    }
});

function isUserLoggedIn() {
    return (sessionStorage.getItem("authToken"));
}

function showLoadingAlert(str) {
    $("#loadingBox").show()
}

function hideLoadingAlert(str) {
    $("#loadingBox").hide()
}

function showSuccessAlert(str) {
    $('#infoBox').text(str);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

function showErrorAlert(str) {
    $('#errorBox').text("Error: " + str);
    $('#errorBox').show();
}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    let name = userInfo.name;
    sessionStorage.setItem('name', name);
}

function showUserGreeting() {
    $("#spanMenuLoggedInUser").text(`Welcome, ${sessionStorage.getItem("username")}!`)
    $("#viewUserHomeHeading").text(`Welcome, ${sessionStorage.getItem("username")}!`)
}


function formatDate(dateISO8601) {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate()))
        return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

    function padZeros(num) {
        return ('0' + num).slice(-2);
    }
}

function formatSender(name, username) {
    if (!name)
        return username;
    else
        return username + ' (' + name + ')';
}

function escape(string) {
    let entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}
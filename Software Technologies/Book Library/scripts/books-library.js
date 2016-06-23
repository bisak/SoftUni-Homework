const kinveyBaseUrl = "http://baas.kinvey.com/";
const kinveyAppKey = "kid_S1j1cUFB";
const kinveyAppSecret = "75d9c9c7eb494405920702ecf9437237"

function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHideMenuLinks() {
    $("#linkHome").show();
    if (sessionStorage.getItem('authToken') == null) {
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListBooks").hide();
        $("#linkCreateBook").hide();
        $("#linkLogout").hide();
    } else {
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListBooks").show();
        $("#linkCreateBook").show();
        $("#linkLogout").show();
    }
}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut()
    }, 3000);
}

function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {
    showView('viewLogin');
}

$(function () {
    showHideMenuLinks();
    showView('viewHome')


    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListBooks").click(listBooks);
    $("#linkCreateBook").click(showCreateBookView);
    $("#linkLogout").click(logout);

    $("#formLogin").submit(login);
    $("#formRegister").submit(register);
    $("#formCreateBook").submit(createBook);

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });
})

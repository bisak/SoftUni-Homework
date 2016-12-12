function hideShowMenuLinks() {
    $("#linkMenuUserHome").hide();
    $("#linkMenuMyMessages").hide();
    $("#linkMenuArchiveSent").hide();
    $("#linkMenuSendMessage").hide();
    $("#linkMenuLogout").hide();

    $("#linkMenuAppHome").hide();
    $("#linkMenuLogin").hide();
    $("#linkMenuRegister").hide();
    $("#spanMenuLoggedInUser").hide();

    if (isUserLoggedIn()) {
        $("#linkMenuUserHome").show();
        $("#linkMenuMyMessages").show();
        $("#linkMenuArchiveSent").show();
        $("#linkMenuSendMessage").show();
        $("#linkMenuLogout").show();
        $("#spanMenuLoggedInUser").show();
    } else {
        $("#linkMenuAppHome").show();
        $("#linkMenuLogin").show();
        $("#linkMenuRegister").show();
    }
}


function showAppHomeView() {
    showView("viewAppHome")
}

function showLoginView() {
    showView("viewLogin");
}

function showRegisterView() {
    showView("viewRegister")
}

function showUserHomeView() {
    showView("viewUserHome")
}

function showMyMessagesView() {
    showView("viewMyMessages")
    loadMyMessages()
}

function showArchiveView() {
    showView("viewArchiveSent");
    loadSentMessages();
}

function showSendMeessageView() {
    loadRecipients();
}

function showView(view) {
    $('main > section').hide();
    $(`#${view}`).show();
}
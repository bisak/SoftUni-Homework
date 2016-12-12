$(document).ready(function () {
    $('#formRegister').submit(function (e) {
        e.preventDefault()
    });
    $('#formSendMessage').submit(function (e) {
        e.preventDefault()
    });
    $('#formLogin').submit(function (e) {
        e.preventDefault()
    });
    $("#linkMenuAppHome").click(showAppHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuUserHome").click(showUserHomeView);
    $("#linkMenuMyMessages").click(showMyMessagesView);
    $("#linkUserHomeMyMessages").click(showMyMessagesView);
    $("#linkUserHomeSendMessage").click(showSendMeessageView);
    $("#linkUserHomeArchiveSent").click(showArchiveView);
    $("#linkMenuArchiveSent").click(showArchiveView);
    $("#linkMenuSendMessage").click(showSendMeessageView);
    $('#formRegister input[type=submit]').click(registerUser);
    $('#formSendMessage input[type=submit]').click(sendMessage);
    $('#formLogin input[type=submit]').click(loginUser);
    $("#linkMenuLogout").click(logoutUser);
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });
});
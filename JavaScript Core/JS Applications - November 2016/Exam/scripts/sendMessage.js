function loadRecipients() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey,
        headers: getKinveyUserAuthHeaders()
    }).then(loadRecipientsSuccess).catch(handleAjaxError);

    function loadRecipientsSuccess(users) {
        $("#msgRecipientUsername").empty();
        for (let user of users) {
            let entry = $(`<option value="${escape(user.username)}">${escape(formatSender(user.name, user.username))}</option>`);
            $("#msgRecipientUsername").append(entry)
        }
        showView("viewSendMessage");
    }
}

function sendMessage() {
    let data = {
        sender_username: sessionStorage.getItem("username"),
        sender_name: sessionStorage.getItem("name") || "null",
        recipient_username: $('#msgRecipientUsername').find(":selected").val(),
        text: $('#msgText').val(),
    };

    if (data.text.length) {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            data: data
        }).then(sendMessageSuccess).catch(handleAjaxError);

        function sendMessageSuccess(data) {
            $('#msgText').val("");
            showSuccessAlert("Message Sent.");
            showArchiveView();
        }
    }
}
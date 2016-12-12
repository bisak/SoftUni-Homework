function loadSentMessages() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages?" + `query={"sender_username":"${sessionStorage.getItem("username")}"}`,
        headers: getKinveyUserAuthHeaders()
    }).then(loadSentMessagesSuccess).catch(handleAjaxError);

    function loadSentMessagesSuccess(messages) {
        $('#sentMessages').find("table").find("tbody tr").remove();
        for (let message of messages) {
            let tr = $("<tr>");
            let to = $(`<td>${escape(message.recipient_username)}</td>`);
            let msg = $(`<td>${escape(message.text)}</td>`);
            let date = $(`<td>${escape(formatDate(message._kmd.lmt))}</td>`);
            let button = $(`<button>Delete</button>`).click(function () {
                deleteEntry(message, this);
            });
            let buttonTd = $(`<td>`).append(button);
            tr.append(to).append(msg).append(date).append(buttonTd);
            $('#sentMessages').find("table").find("tbody").append(tr);

        }
    }
}

function deleteEntry(entry, context) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages/" + entry._id,
        headers: getKinveyUserAuthHeaders()
    }).then(deleteSuccess).catch(handleAjaxError);

    function deleteSuccess() {
        showSuccessAlert("Message deleted.");
        $(context).parent().parent().remove();
    }
}
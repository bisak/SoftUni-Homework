function loadMyMessages() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages?" + `query={"recipient_username":"${sessionStorage.getItem("username")}"}`,
        headers: getKinveyUserAuthHeaders()
    }).then(loadSentMessagesSuccess).catch(handleAjaxError);

    function loadSentMessagesSuccess(messages) {
        $('#myMessages').find("table").find("tbody tr").remove();
        for (let message of messages) {
            let tr = $("<tr>");
            let to = $(`<td>${escape(message.sender_username)}</td>`);
            let msg = $(`<td>${escape(message.text)}</td>`);
            let date = $(`<td>${escape(formatDate(message._kmd.lmt))}</td>`);
            tr.append(to).append(msg).append(date);
            $('#myMessages').find("table").find("tbody").append(tr);

        }
    }
}
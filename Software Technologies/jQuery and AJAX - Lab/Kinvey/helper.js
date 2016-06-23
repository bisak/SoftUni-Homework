function cpclick() {
    let USERNAME = "guest", PASSWORD = "guest"
    let authBase64 = btoa(USERNAME + ":" + PASSWORD)
    let postData = {
        title: $('#newPostTitle').val(),
        body: $('#newPostBody').val()
    }
    $.ajax({
        method: "POST",
        url: "https://baas.kinvey.com/appdata/kid_HydvLLOr/posts", //
        headers: {"Authorization": "Basic " + authBase64},
        data: postData,
        success: showSuccess,
        error: showError
    });
}
function spclick() {
    let USERNAME = "guest", PASSWORD = "guest"
    let authBase64 = btoa(USERNAME + ":" + PASSWORD)
    $.ajax({
        method: "GET",
        url: "https://baas.kinvey.com/appdata/kid_HydvLLOr/posts",
        headers: {"Authorization": "Basic " + authBase64},
        success: showPosts,
        error: showError
    });
};
function showSuccess(data, status) {
    let responseMsg = "Created: " + JSON.stringify(data);
    $('body').append($('<div>').text(responseMsg));
}
function showError(data, status) {
    let errorMsg = "Error: " + JSON.stringify(data);
    $('body').append($('<div>').text(errorMsg));
}
function showPosts(data, status) {
    let ul = $('<ul>')
    for (let post of data) {
        ul.append($('<li>').text(
            post.title + " -> " + post.body));
    }
    $('body').append(ul);
}

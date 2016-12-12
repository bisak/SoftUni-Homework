$(function () {

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_BJ816LEGx";
    const kinveyAppSecret = "07244ccc3d6d41bf828c8082f77ddc1f";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    showHomeView();
    bindClickEvents();
    hideShowMenuLinks();


    function hideShowMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem("authToken")) {
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListBooks").show();
            $("#linkCreateBook").show();
            $("#linkLogout").show();
        } else {
            $("#linkListBooks").hide();
            $("#linkCreateBook").hide();
            $("#linkLogout").hide();
            $("#linkLogin").show();
            $("#linkRegister").show();
        }
    }

    function bindClickEvents() {
        $("#linkHome").click(showHomeView);
        $("#linkLogin").click(showLoginView);
        $("#linkRegister").click(showRegisterView);
        $("#linkListBooks").click(showBooksView);
        $("#linkCreateBook").click(showCreateBookView);
        $("#buttonLoginUser").click(loginUser);
        $("#buttonRegisterUser").click(registerUser);
        $("#linkLogout").click(logoutUser);
        $("#buttonCreateBook").click(createBook);
        $("#buttonEditBook").click(editBook);
        $("#infoBox, #errorBox").click(function () {
            $(this).fadeOut();
        });
    }

    function createBook() {
        let bookData = {
            title: $('#formCreateBook input[name=title]').val(),
            author: $('#formCreateBook input[name=author]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        };
        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/appdata/kid_BJ816LEGx/books`,
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            },
            data: bookData
        }).then(createBookSuccess).catch(handleAjaxError);
    }

    function loadBooks() {
        $.ajax({
            method: "GET",
            url: `https://baas.kinvey.com/appdata/kid_BJ816LEGx/books`,
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            }
        }).then(renderBooks).catch(handleAjaxError);
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/user/kid_BJ816LEGx/login`,
            headers: kinveyAppAuthHeaders,
            data: userData,
        }).then(loginSuccess).catch(handleAjaxError);
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/user/kid_BJ816LEGx`,
            headers: kinveyAppAuthHeaders,
            data: userData,
        }).then(registerSuccess).catch(handleAjaxError);
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: `https://baas.kinvey.com/user/kid_BJ816LEGx/_logout`,
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            }
        }).then(logoutSuccess).catch(handleAjaxError);

    }

    function showHomeView() {
        $("section").hide();
        $("#viewHome").show();
    }

    function showLoginView() {
        $("section").hide();
        $('#formLogin').trigger('reset');
        $("#viewLogin").show();
    }

    function showRegisterView() {
        $("section").hide();
        $('#formRegister').trigger('reset');
        $("#viewRegister").show();
    }

    function showBooksView() {
        $("section").hide();
        $("#viewBooks").show();

        $('#books').find("tr:first").nextAll().remove();


        loadBooks();
    }

    function showCreateBookView() {
        $("section").hide();
        $('#formCreateBook').trigger('reset');
        $("#viewCreateBook").show();
    }

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    function deleteBook(book) {
        $.ajax({
            method: "DELETE",
            url: `https://baas.kinvey.com/appdata/kid_BJ816LEGx/books/${book._id}`,
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            }
        }).then(showBooksView).catch();
    }

    function renderBooks(books) {
        for (let book of books) {
            let links = [];
            if (book._acl.creator == sessionStorage['userId']) {
                let deleteLink = $('<a href="#">[Delete]</a>')
                    .click(function () {
                        deleteBook(book)
                    });
                let editLink = $('<a href="#">[Edit]</a>')
                    .click(function () {
                        loadBookForEdit(book)
                    });
                links = [deleteLink, ' ', editLink];
            }
            let tr = $("<tr>");
            tr.append($("<td>").text(book.title))
                .append($("<td>").text(book.author))
                .append($("<td>").text(book.description))
                .append($("<td>").append(links))

            $("#books table").append(tr)
        }
    }


    function loadBookForEdit(book) {
        $.ajax({
            method: "GET",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/books/" + book._id,
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            },
            success: loadBookForEditSuccess,
            error: handleAjaxError
        });
    }

    function loadBookForEditSuccess(book) {
        $('#formEditBook input[name=id]').val(book._id);
        $('#formEditBook input[name=title]').val(book.title);
        $('#formEditBook input[name=author]')
            .val(book.author);
        $('#formEditBook textarea[name=descr]')
            .val(book.description);
        $("section").hide();
        $("#viewEditBook").show();
    }

    function editBook() {
        let bookData = {
            title: $('#formEditBook input[name=title]').val(),
            author: $('#formEditBook input[name=author]').val(),
            description: $('#formEditBook textarea[name=descr]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/books/" + $('#formEditBook input[name=id]').val(),
            headers: {
                "Authorization": `Kinvey ${sessionStorage.getItem("authToken")}`,
            },
            data: bookData,
            success: editBookSuccess,
            error: handleAjaxError
        });


        function editBookSuccess(response) {
            showBooksView();
            showInfo('Book edited.');
        }
    }


    function createBookSuccess(data) {
        showBooksView();
        showInfo("Book Created!")
    }

    function loginSuccess(loginResponse) {
        saveAuthInSession(loginResponse);
        hideShowMenuLinks();
        showHomeView();
        showInfo('Login successful.');
    }

    function registerSuccess(registerResponse) {
        showLoginView();
    }

    function logoutSuccess(data) {
        sessionStorage.clear();
        hideShowMenuLinks();
        showHomeView();
        $('#loggedInUser').text("");
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        $('#loggedInUser').text(
            "Welcome, " + userInfo.username + "!");
    }


    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
});
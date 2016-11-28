function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = 'kid_ry4K8kLMx';
    const kinveyAppSecret = 'd935fca08c4d4a03b71bd94c7e9ce51b';
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };
    const kinveyUserUrl = `${kinveyBaseUrl}user/${kinveyAppKey}/${sessionStorage.getItem("userId")}`;
    showView("#viewHome");
    showHideMenuLinks();
    bindClickEvents();

    function showView(viewName) {
        $('main > section').hide();
        $(viewName).show();
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $("#loggedInUser").show();
        } else {
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $("#loggedInUser").hide();
        }
    }

    function bindClickEvents() {
        $("#linkHome").click(showHomeView);
        $("#linkLogin").click(showLoginView);
        $("#linkRegister").click(showRegisterView);
        $("#linkListAds").click(showListAdsView);
        $("#linkCreateAd").click(showCreateAdView);
        $("#linkLogout").click(logoutUser);
        $("#buttonRegisterUser").click(registerUser);
        $("#buttonLoginUser").click(loginUser);
        $("#buttonCreateAd").click(createAd);
        $("#buttonEditAd").click(editAd);
    }

    function createAd() {
        $.ajax({
            url: kinveyUserUrl,
            method: "GET",
            headers: getKinveyUserAuthHeaders(),
            success: afterPublisherSuccess,
            error: handleAjaxError
        });
        function afterPublisherSuccess(userData) {
            let adData = {
                title: $('#formCreateAd input[name=title]').val(),
                description: $('#formCreateAd textarea[name=description]').val(),
                publisher: $('#formCreateAd textarea[name=description]').val(),
                date: $('#formCreateAd input[name=datePublished]').val(),
                price: $('#formCreateAd input[name=price]').val(),
            };
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
                headers: getKinveyUserAuthHeaders(),
                data: adData,
                success: createAdSuccess,
                error: handleAjaxError
            });
            function createAdSuccess(response) {
                showListAdsView();
                showInfo('Ad created successfully.');
            }
        }
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
            headers: getKinveyUserAuthHeaders()
        }).then(logoutSuccess).catch(handleAjaxError);
        function logoutSuccess(data) {
            sessionStorage.clear();
            showHideMenuLinks();
            showHomeView();
            $('#loggedInUser').text("");
        }
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeView();
            showInfo('Login successful.');
        }
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeView();
            showInfo('User registration successful.');
        }
    }

    function deleteBook(book) {
        $.ajax({
            method: "DELETE",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + book._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteBookSuccess,
            error: handleAjaxError
        });
        function deleteBookSuccess(response) {
            showListAdsView();
            showInfo('Ad deleted.');
        }
    }

    function showHomeView() {
        showView("#viewHome")
    }

    function showLoginView() {
        showView("#viewLogin");
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView("#viewRegister");
        $('#formRegister').trigger('reset');
    }

    function showListAdsView() {
        $('#ads').empty();
        showView("#viewAds");
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });
        function loadAdsSuccess(ads) {
            if (ads.length == 0) {
                $('#ads').text('No ads available.');
            } else {
                showInfo('Ads loaded.');
                let adsTable = $('<table>').append($("<tbody>"))
                    .append($('<tr>').append(
                        '<th>Title</th><th>Publisher</th>',
                        '<th>Description</th><th>Price</th><th>Date Published</th><th>Actions</th>'));
                for (let ad of ads)
                    appendAdRow(ad, adsTable);
                $('#ads').append(adsTable);
            }
        }
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView("#viewCreateAd");
    }


    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

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

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " +
            sessionStorage.getItem('authToken'),
        };
    }

    function appendAdRow(ad, adsTable) {
        let links = [];
        if (ad._acl.creator == sessionStorage['userId']) {
            let deleteLink = $('<a href="#">[Delete]</a>')
                .click(function () {
                    deleteBook(ad)
                });
            let editLink = $('<a href="#">[Edit]</a>')
                .click(function () {
                    loadAdForEdit(ad)
                });
            links = [deleteLink, ' ', editLink];
        }
        adsTable.append($('<tr>').append(
            $('<td>').text(ad.title),
            $('<td>').text(ad.publisher),
            $('<td>').text(ad.description),
            $('<td>').text(ad.price),
            $('<td>').text(ad.date),
            $('<td>').append(links)
        ));
    }

    function loadAdForEdit(ad) {
        $.ajax({
            method: "GET",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });
        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.date);
            $('#formEditAd input[name=price]').val(ad.price);
            showView('#viewEditAd');
        }
    }

    function editAd() {
        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            date: $('#formEditAd input[name=datePublished]').val(),
            price: $('#formEditAd input[name=price]').val(),
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + $('#formEditAd input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editBookSuccess,
            error: handleAjaxError
        });
        function editBookSuccess(response) {
            showListAdsView();
            showInfo('Ad sucessfully edited.');
        }
    }
}



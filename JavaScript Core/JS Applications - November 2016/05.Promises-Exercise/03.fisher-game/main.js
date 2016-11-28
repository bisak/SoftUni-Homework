function attachEvents() {
    const appId = 'kid_H1LILtgGx';
    const username = 'user';
    const password = 'pass';
    const base64Auth = btoa(`${username}:${password}`);
    const authorizationHeader = {Authorization: `Basic ${base64Auth}`};
    const apiUrl = `https://baas.kinvey.com/appdata/${appId}/biggestCatches/`;

    $(".load").click(loadCatches);
    $(".add").click(createCatch);

    function loadCatches() {
        $.get({
            url: apiUrl,
            headers: authorizationHeader
        }).then(displayCatches)
            .catch(logError)
    }

    function displayCatches(data) {
        $("#catches").empty();
        for (let entry of data) {
            let catchElement = $(`
                <div class="catch" data-id="${entry._id}">
                <label>Angler</label>
                <input type="text" class="angler" value="${entry.angler}"/>
                <label>Weight</label>
                <input type="number" class="weight" value="${entry.weight}"/>
                <label>Species</label>
                <input type="text" class="species" value="${entry.species}"/>
                <label>Location</label>
                <input type="text" class="location" value="${entry.location}"/>
                <label>Bait</label>
                <input type="text" class="bait" value="${entry.bait}"/>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${entry.captureTime}"/>
                </div>`);
            catchElement
                .append($('<button>')
                    .addClass('update').text('Update').on('click', () => updateCatch(entry._id)))
                .append($('<button>')
                    .addClass('delete').text('Delete').on('click', () => deleteCatch(entry._id)));
            $("#catches").append(catchElement);
        }
    }

    function getInputData(selector, put = false) {
        if (put) {
            selector = $('#catches').find('[data-id="' + selector + '"]');
        }

        let angler = $(selector).find('.angler').val().trim();
        let weight = $(selector).find('.weight').val().trim();
        let species = $(selector).find('.species').val().trim();
        let location = $(selector).find('.location').val().trim();
        let bait = $(selector).find('.bait').val().trim();
        let captureTime = $(selector).find('.captureTime').val().trim();

        if (angler != '' && weight != '' && species != '' &&
            location != '' && bait != '' && captureTime != '') {
            weight = Number(weight);
            captureTime = Number(captureTime);
            if (Number.isInteger(captureTime)) {
                return JSON.stringify({
                    'angler': angler,
                    'weight': weight,
                    'species': species,
                    'location': location,
                    'bait': bait,
                    'captureTime': captureTime
                });
            }
        }

        return false;
    }


    function createCatch() {
        let data = getInputData("#addForm");
        $.post({
            url: apiUrl,
            headers: authorizationHeader,
            contentType: 'application/json',
            data
        }).then(loadCatches).catch(logError)
    }

    function updateCatch(id) {
        let data = getInputData(id, true);
        $.ajax({
            method: "PUT",
            url: apiUrl+id,
            headers: authorizationHeader,
            contentType: 'application/json',
            data
        }).then(loadCatches).catch(logError)
    }

    function deleteCatch(id) {
        $.ajax({
            method: "DELETE",
            url: apiUrl + id,
            headers: authorizationHeader,
        }).then(loadCatches).catch(logError)
    }

    function logError(data) {
        console.log(data)
    }

}
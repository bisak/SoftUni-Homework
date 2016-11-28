(function exec() {
    const appKey = "kid_BJXTsSi-e";
    const appSecret = "447b8e7046f048039d95610c1b039390";
    const auth = {Authorization: `Basic ${btoa("guest:guest")}`};

    $("#addBtn").click(function () {
        uploadData();
    });

    function getData() {
        $.ajax({
            method: "GET",
            url: "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students",
            headers: auth
        }).then(renderData).catch(logError);
    }

    getData();

    function renderData(data) {
        $('#results').find("tr:first").nextAll().remove();
        let tableRows = [];
        for (let row of data) {
            let tableRow = $("<tr>");
            let id = $("<td>").text(row.ID);
            let firstName = $("<td>").text(row.FirstName);
            let lastName = $("<td>").text(row.LastName);
            let facultyNumber = $("<td>").text(row.FacultyNumber);
            let grade = $("<td>").text(row.Grade);
            tableRow.append(id).append(firstName).append(lastName).append(facultyNumber).append(grade);
            tableRows.push(tableRow);
        }

        tableRows.sort((a, b) => {
            return Number(a.find("td:first").text()) - Number(b.find("td:first").text());
        });

        for (let currentRow of tableRows) {
            $('#results').append(currentRow);
        }
    }

    function uploadData() {
        let data = getInputData();
        $.ajax({
            method: "POST",
            url: "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students",
            headers: auth,
            contentType: 'application/json',
            data
        }).then(getData).catch(logError);
    }

    function getInputData(selector) {
        let id = $('#studentID').val().trim();
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let facultyNumber = $('#facultyNumber').val().trim();
        let grade = $('#grade').val().trim();
        if (id != '' && firstName != '' && lastName != '' &&
            facultyNumber != '' && grade != '') {
            id = Number(id);
            grade = Number(grade);

            return JSON.stringify({
                'ID': id,
                'FirstName': firstName,
                'LastName': lastName,
                'FacultyNumber': facultyNumber,
                'Grade': grade
            });

        }
        return false;
    }

    function logError(err) {
        console.log(err);
    }
})();


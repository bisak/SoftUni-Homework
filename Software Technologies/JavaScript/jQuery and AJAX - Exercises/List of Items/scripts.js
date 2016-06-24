function addItemToList(text) {
    let li = $('<li>')
        .append($("<span>").text(text))
        .append(" ")
        .append($('<input style="margin-left: 5px; margin-top: 5px" type="button" onclick="deleteItem(this)" value="delete" />'));
    $("#items").append(li);
}
function deleteItem(link) {
    $(link).parent().remove();
}
function addItem() {
    let text = $('#newItemText').val();
    addItemToList(text);
    $('#newItemText').val('');
}
$(function () {
    addItemToList("First");
    addItemToList("Second");
});
$(function () {
    $('#newItemText').keypress(
        function (e) {
            if (e.keyCode == 13) {
                $('#btn').click()
            }
        })
})
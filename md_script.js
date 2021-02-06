$(document).ready(() => {
    console.log("gitter")
    var converter = new showdown.Converter();
    $.ajax({
        url: 'statuten.md',
        success: function(data) {
            var html = converter.makeHtml(data);

            $("#md").html(html)
        }
    });

})
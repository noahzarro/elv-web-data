function displayMarkdown(url) {
    var converter = new showdown.Converter();
    $.ajax({
        url: url,
        success: function(data) {
            var html = converter.makeHtml(data);
            $("#md").html(html)
        }
    });
}
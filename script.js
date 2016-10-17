$(document).ready(function (){
    $("#next").click(function() {
        $.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function(response) {
            $("#text").html(response.quote);
            $("#author").html("-" + response.author);
        })
    });
    $("#tweat").click(function() {
        window.open("http://twitter.com/intent/tweet?text=" + $("#text").text() + " " + $("#author").text());
    })
})

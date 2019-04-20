$(document).ready(function () {
    
});

/*
document.getElementById('btn-newsSearch').addEventListener('click', loadNews);

function loadNews() {
    var xhrCall = new XMLHttpRequest();
    var search = $("#newsSearch").val();
    var date = $("#newsDate").val();

    var url = `https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=popularity&apiKey=66f61007ad934e93a8fbfa06b8da7988`;

    xhrCall.open('GET', url, true);

    xhrCall.onload = function() {
        var artTitle = '';
        var artAuthor = '';

        var data = JSON.parse(this.responseText);
        for (var i = 0; i < data.articles.length; i++) {
            news = $('<div id="news"></div>');

            article = $(`<div class="article" id="article${i}"></div>`);

            artTitle = $('<h2 class="artTitle"><br><a href=' + data.articles[i].url + '>' + data.articles[i].title + "</a></h2>");

            artAuthor = $('<h3 class="artAuthor">' + data.articles[i].author + "</h3>");

            news.appendTo("header");
            article.appendTo(`#news`);
            artTitle.appendTo(`#article${i}`);
            artAuthor.appendTo(`#article${i}`);
        }
        console.log(data)

    }
    xhrCall.send()
}
*/
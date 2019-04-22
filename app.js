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

$(document).ready(function() {
    $.ajax({
        url:
        'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=66f61007ad934e93a8fbfa06b8da7988',
        method: "GET",
        error: function() {
          console.log("fucked");
        },
        success: function(data) {
            console.log(data.articles);
            let output = "";

            let latestNews = data.articles;
            for( let i in latestNews){
                output += ` <div class="article-ct">
                <h4>${latestNews[i].title}</h4>
                <h5>${latestNews[i].author}</h5>
                <img src="${latestNews[i].urlToImage}" alt="${latestNews[i].title}"/>
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <div class="articleBtn">
                    <a href="${latestNews[i].url}" target="_blank" >Link</a>
                </div>
                <p>Published on: ${latestNews[i].publishedAt}</p>
            </div>`;
            }
            //error message if no data is returned from the API.
            if (output !== "") {
                $("#newsResults").html(output);
            } else {
                let newsNotFound = "This news isn't available. Please try searching for another topic";
                $("#newsResults").html(`<div class"noNewsError"> ${newsNotFound} </div>`);
            }
        }
      });
      

  });
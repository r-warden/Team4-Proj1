var getQuoteBtn = document.getElementById("get-quote");
var quoteEl = document.getElementById("quote");
var authorEl = document.getElementById("author");

var category = random_category();
var gitArthor = function (category) {
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
    method: "GET", //GET is the default.
    headers: { "X-Api-Key": "s6+WMAEYzVKHWRIkfCszQQ==uBXREA4OMYGwbEC8" },
    contentType: "application/json",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var quote = data[0].quote;
      quoteEl.textContent = quote;

      var author = data[0].author.toString();
      authorEl.textContent = " -" + author;
      console.log(author);
      var names = author;
      arthorInfo(names);
    });
};

var arthorInfo = function (names) {
  fetch("https://api.api-ninjas.com/v1/celebrity?name=" + names, {
    method: "GET",
    headers: { "X-Api-Key": "s6+WMAEYzVKHWRIkfCszQQ==uBXREA4OMYGwbEC8" },
    contentType: "application/json",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]);
      if (data[0] === undefined) {
        fetch("https://api.api-ninjas.com/v1/historicalfigures?name=" + names, {
          method: "GET",
          headers: {
            "X-Api-Key": "s6+WMAEYzVKHWRIkfCszQQ==uBXREA4OMYGwbEC8",
          },
          contentType: "application/json",
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data[0]);

            if (data[0] === undefined) {
              location.reload();
            }
          });
      }
    });
};

function random_category() {
  let categories = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

getQuoteBtn.addEventListener("click", gitArthor(category));
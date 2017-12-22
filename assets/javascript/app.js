  //Create an array of strings, each one related to a topic (athletes). Save it to a variable called topics.
  var topics = ["Lonzo Ball", "Karl Anthony Towns", "Tom Brady", "Grayson Allen", "Klay Thompson", "Michael Jordan" , "Tiger Woods" , "Stephen Curry" ,"Babe Ruth"]
  var athleteBtn;
  var athlete;

  //Take topics in array and create buttons in the HTML.
  //Use a loop that appends a button for each string in the array.
  //Dynamically generate buttons for each athlete in array.
  for (var i=0; i < topics.length; i++) {
    //Create variable for button.
    var athleteBtn = $("<button>");
    //Add athlete's name to button.
    athleteBtn.text(topics[i]);
    //Assign a data attribute to each button.
    athleteBtn.attr("data-name", topics[i]);
    //Add a class of athlete-btn to each button as well as other classes to change the color, padding, and margin of the button.
    athleteBtn.addClass("btn btn-dark p-3 m-3 athlete-btn");
    //append each button to the athlete-btn-div in the HTML.
    $("#athlete-btn-div").append(athleteBtn);
  }


  //When you click an athelete button...
  //displayAthleteImages function re-renders the HTML to display the appropriate content
  $(".athlete-btn").on("click", function() {
    var athlete = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        console.log(response);
        var results = response.data;
        //Each time an athlete button is clicked and data is retrieved, empty out the results-div.
        $("#results-div").empty();

        for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var athleteImage = $("<img>");
          athleteImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(athleteImage);

          $("#results-div").prepend(gifDiv);
        }
      });
  });

  //Create an array of strings, each one related to a topic (athletes). Save it to a variable called topics.
  var topics = ["lonzo ball", "ricky rubio", "jackie robinson", "draymond green", "klay thompson", "aaron rodgers", "stephen curry" ,"babe ruth" ,"lamelo ball" , "shaquille o'neal" , "giannis antetokounmpo"]
  var athleteBtn;
  var athleteImage;

  function createButtons() {
  //Take topics in array and create buttons in the HTML.
  //Use a loop that appends a button for each string in the array.
  //Dynamically generate buttons for each athlete in array.

  //Deleting the initial athletes so I don't have duplicate buttons.
  $("#athlete-btn-div").empty();

  for (var i=0; i < topics.length; i++) {
    //Create variable for button.
    var athleteBtn = $("<button>");
    //Add athlete's name to button.
    athleteBtn.text(topics[i]);
    //Assign a data attribute to each button.
    athleteBtn.attr("data-name", topics[i]);
    //Add a class of athlete-btn to each button as well as other classes to change the color, padding, and margin of the button.
    athleteBtn.addClass("btn btn-primary p-2 mr-3 mb-2 athlete-btn");
    //Append each button to the athlete-btn-div in the HTML.
    $("#athlete-btn-div").append(athleteBtn);
  }
}


  //When you click an athelete button...
  //displayAthleteImages function re-renders the HTML to display the appropriate content
  function displayAthleteImages() {
    //Each time an athlete button is clicked and data is retrieved, empty out the columns in the results-div.
    $("#results-div-col1").empty();
    $("#results-div-col2").empty();
    $("#results-div-col3").empty();
    $("#click-to-play-text").empty();

    var athlete = $(this).attr("data-name");
    //Construct our query URL to access and obtain data from the giphy API.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=dc6zaTOxFJmzC&limit=10";

    //Our jQuery AJAX method. Perform AJAX GET request to the queryURL to get data from giphy API.
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      //After the data from the AJAX request comes back.
      .done(function(response) {
        //debugger
        console.log(response);
        var results = response.data;
        //Display text to the user about how to play and pause a gif in the gif search results section.
        $("#click-to-play-text").append("<h4>" + "Click a gif to play. Click again to pause." + "</h4>");

        for (var i = 0; i < results.length; i++) {

          // Only take action if the gif has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            //Create div element to hold gif image.. 
            var gifDiv = $("<div class='item'>");

            //Save results[i].rating property. Store in rating variable.
            var rating = results[i].rating;

            //Display rating of gif.
            var p = $("<p>").text("Rating: " + rating);

            //Need to give each gif/image some attributes so that the user can play and pause a gif on demand.
            var athleteImage = $("<img>");
            athleteImage.attr("src", results[i].images.fixed_height_still.url);
            athleteImage.attr("data-still", results[i].images.fixed_height_still.url);
            athleteImage.attr("data-animate", results[i].images.fixed_height.url);
            athleteImage.attr("data-state", "still");
            athleteImage.addClass ("img-fluid gif");

            //Prepend rating paragraph to the div created to hold the gif image.
            gifDiv.prepend(p);
            //Prepend gif image to the div created to hold the gif image.
            gifDiv.prepend(athleteImage);

            //Add the first three gifs retrieved from the giphy API call to the results-div-col1 column in the HTML.
            if (i >= 0 && i < 3) {
              $("#results-div-col1").append(gifDiv);
            }

            //Add the next four gifs retrieved from the giphy API call to the results-div-col2 column in the HTML.
            else if (i >= 3 && i < 7) {
              $("#results-div-col2").append(gifDiv);
            }

            //Finally, add the last three gifs retrieved from the giphy API call to the results-div-col3 column in the HTML.
            else {
              $("#results-div-col3").append(gifDiv);
            }
          }


        }

        $(".gif").on("click", function() {
          // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          // Then, set the image's data-state to animate
          // Else set src to the data-still value
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } 
          else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });

      });
}

  //When submit button is clicked, add athlete-input from the search box to topics array.
  $("#submit-button").on("click", function(event) {

    //The following code prevents the submit button from trying to submit the form.
    //Using a form so that the user can press Enter to search instead of clicking the button.
    event.preventDefault();
    //Grab the input from the text box and change the value to lower case.
    var athleteInput = $("#athlete-input").val().toLowerCase();

    //If the input from the search box is already in the topics array, alert to the user that the athlete is already available.
    if (topics.indexOf(athleteInput) > -1) {
      alert(athleteInput + " is already available.");
    }

    //If text box is empty, don't create button. Nothing should happen when user clicks Add icon.
    else if (athleteInput == "") {
      return;
    }

    //else if the input from the search box is not in the topics array, add athlete to topics array and create button for athlete.
    else if (topics.indexOf(athleteInput) === -1) {
    //add or push athleteInput from text box to topics array.
    topics.push(athleteInput);
    console.log(topics);
    //call createButtons, which handles the processing of topics array.
    createButtons();
    }
  });

  //Call createButtons() to display initial buttons.
  createButtons();

//Create click event for all elements with a class of athlete-btn.
$(document).on("click", ".athlete-btn", displayAthleteImages);

function displayHeaderImage () {
    var queryURL = "https://api.giphy.com/v1/stickers/search?q=basketball&api_key=dc6zaTOxFJmzC";
    
  //Our jQuery AJAX method. Perform AJAX GET request to the queryURL to get data from giphy API.
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      //After the data from the AJAX request comes back.
      .done(function(response) {
        console.log(response);
        var results = response.data

        //Create div element to hold gif image.. 
        var gifDiv = $("<div class='item'>");

        //Save response.data[5].fixed_width.url property. Store in headerImageUrl variable.
        var headerImageUrl = results[4].images.fixed_height.url;

        var headerImage = $("<img>");
        headerImage.attr("id", "spinning-ball");
        headerImage.attr("src", headerImageUrl);
        headerImage.addClass ("img-fluid gif");

        //Prepend gif image to the div created to hold the gif image.
        gifDiv.append(headerImage);

        $("#main-header").append(gifDiv);
      });

}

displayHeaderImage();






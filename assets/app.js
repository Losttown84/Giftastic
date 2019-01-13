// pseudocode
// call giphy api
// retrieve the data from giphy
// start with an initial array of subjects for giphy to display
// add in gif rating
// set-up holders for gifs to display
// once data is retrieved, display them on webpage
// user should be able to create new buttons for additional gifs

var comedy = ["George Carlin", "Ali Wong", "Aziz Ansari", "Tina Fey", "Titus Burgess"];

function displayGif(){

    var gif = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search" + gif + "?api_key=Pu6cLOh06nWg3HRDUMoZXAj7Y9M275kV&limit=10&rating=pg13";
    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
        $("#comediansView").empty();
        console.log(response);
    })


}

// var queryURL = "https://api.giphy.com/v1/gifs/search" + gif +  "&api_key=Pu6cLOh06nWg3HRDUMoZXAj7Y9M275kV&"; 

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
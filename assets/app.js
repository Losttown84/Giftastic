// pseudocode
// call giphy api
// retrieve the data from giphy
// start with an initial array of subjects for giphy to display
// add in gif rating
// set-up holders for gifs to display
// once data is retrieved, display them on webpage
// user should be able to create new buttons for additional gifs

var comedy = ["George Carlin", "Ali Wong", "Aziz Ansari", "Tina Fey", "Titus Burgess"];

function gifDisplay(){

        var gif = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search" + gif + "?api_key=Pu6cLOh06nWg3HRDUMoZXAj7Y9M275kV&limit=10&rating=pg13";

        $.ajax({url: queryURL, method: 'GET'}).done(function(response){
        //     console.log(response);
            $("#comediansView").empty();
    })

for (var i = 0; i < response.data.length; i++){
        var rating = response.data[i].rating;
        var urlImage = response.data[i].images.url;
        var stillImage = response.data[i].images.url;
        
        var image = $("<img>");
        var rating = $("<p id='rating'>" + "Rating: " + rating +"</p>");

        image.attr("src", stillImage);
        image.attr("alt", 'gif');
        image.attr("data-state", "still");
        image.attr("data-still", stillImage);
        image.attr("data-animate", urlImage);

        $("#comediansView").prepend(image, ratingText);
        checkState ();
}
};

function showButtons(){
        $("#createButtons").empty();
        
        for (var i = 0; i<comedy.length; i++){
                var newButton = $("<button class=btn btn-dark>")
                newButton.addClass("comedian");
                newButton.attr("date-name", comedy[i]);
                newButton.text(comedy[i]);
                $("#createButtons").append(newButton);
        }
}
$("addComedian").on("click", function(){
        var comedian = $("comedian-input").val().trim();
        comedy.push(comedy);
        createButtons();
        return false;
})



function checkState(){
                $("img").on("click", function(){
        var state = $(this).attr("data-state");
        if(state === "still")                
                })
        if(state === "still"){
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', "animate");
        }else{
          $(this).attr('src', $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
// var queryURL = "https://api.giphy.com/v1/gifs/search" + gif +  "&api_key=Pu6cLOh06nWg3HRDUMoZXAj7Y9M275kV&"; 
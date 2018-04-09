
$(document).ready(function(){

  //Read data from JSON
  var getQuote = function(data){
    $("#quote-text").text('" ' + data.quoteText + '"');
    if (data.quoteAuthor === ""){
      $(".author").text("Anonymous");
    }
    else{
      $(".author").text(data.quoteAuthor);
    }

    //for twitter
    var tweetURL = 'https://twitter.com/intent/tweet?text='
                  + data.quoteText + ' -- ' + data.quoteAuthor;

    //Change the twitter href
    $("#twitter-share").attr("href", tweetURL);
  };
  //Start page with random quote
  var key = Math.round(Math.random() * 999999 - 000001)
  var keyStr = key.toString();
  // add the key to the URL
  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key="
            + keyStr + "&format=jsonp&lang=en&jsonp=?";
  $.getJSON(url, getQuote, 'jsonp');

  $("#randQuote").click(function(){
    var key = Math.round(Math.random() * 999999 - 000001)
    var keyStr = key.toString();
    //The way the api code works 2 is different than 02 or 002 so if we wanted
    //the generator to have access to all of the quotes we would randomly opt
    //to add zeroes to the beginning of the key...I'm going to skip this for now
    //If the key is less than 6 digits add zeros to the beginning

    // add the key to the URL
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key="
              + keyStr + "&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url, getQuote, 'jsonp');
  });
});

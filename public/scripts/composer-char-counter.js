$(document).ready(function() {
  //'$' initiates JQuery Syntax, target id of text area using #, .on is equivalent to addEventListener, listening for any input on text area.

  $("#tweet-text").on("input", function() { 

    //Returning this simply returns text area object, use .val function to get the value inputted in that object.

    const value = $(this).val();

    //Assign new variable remaining, make it equal to 140 subtracted from the length of our new value. Give us correct amount of charachters as we type.

    const remaining = 140 - value.length;

    //Here, this represents the object of element textarea. We look for parent which is DIV, than sibling of parent which is second DIV, and target counter within second DIV.
    //We could have written just .counter here, but that forces us to read through all code lines in doc, this will only read the lines between DIV1 and DIV2, saving performance.

    const counter = $(this).parent().siblings('.maintweet-footer').children('.counter');

    //.text ensures that we can pull the text being stored in remaining and replace the counter value with it.
    // Below we are saying if the remaining count is less than 0, then make font color red, if not make font color black.
    if (remaining < 0) {
      counter.text(remaining).css("color", "red");
    } else {
      counter.text(remaining).css( "color", "black");
    }
  })
});
